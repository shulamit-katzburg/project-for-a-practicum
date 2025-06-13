import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CategorySelection({ user }) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      axios.get(`http://localhost:5000/api/categories/${selectedCategoryId}/sub`)
        .then(res => setSubcategories(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedCategoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategoryId) {
      alert("יש לבחור קטגוריה");
      return;
    }
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const payload = {
        userId: user?.id,
        categoryId: Number(selectedCategoryId),
        subCategoryId: selectedSubCategoryId ? Number(selectedSubCategoryId) : null,
        prompt: question,
      };
      await axios.post('http://localhost:5000/api/prompts', payload);
      setQuestion("");
      navigate('/result');
    } catch (err) {
      console.error(err);
      alert('שגיאה בשליחת השאלה');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">בחר קטגוריה:</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={e => setSelectedCategoryId(e.target.value)} className="border p-2 rounded" required value={selectedCategoryId}>
          <option value="">-- בחר --</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        {selectedCategoryId && (
          <>
            <h3 className="text-lg font-semibold mt-4">בחר תת קטגוריה (לא חובה):</h3>
            <select className="border p-2 rounded mt-2" value={selectedSubCategoryId} onChange={e => setSelectedSubCategoryId(e.target.value)}>
              <option value="">-- בחר --</option>
              {subcategories.map(sub => (
                <option key={sub.id} value={sub.id}>{sub.name}</option>
              ))}
            </select>
          </>
        )}
        <div className="mt-4">
          <label>כתוב שאלה על הקטגוריה:</label>
          <textarea
            className="border p-2 rounded w-full mt-2"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            rows={3}
            placeholder="כתוב כאן את השאלה שלך..."
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">שלח שאלה</button>
      </form>
    </div>
  );
}
