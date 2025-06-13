import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategorySelection({ user }) {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      axios.get(`http://localhost:5000/api/subcategories/${selectedCategoryId}`)
        .then(res => setSubcategories(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedCategoryId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">בחר קטגוריה:</h2>
      <select onChange={e => setSelectedCategoryId(e.target.value)} className="border p-2 rounded">
        <option value="">-- בחר --</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      {selectedCategoryId && (
        <>
          <h3 className="text-lg font-semibold mt-4">בחר תת קטגוריה:</h3>
          <select className="border p-2 rounded mt-2">
            <option value="">-- בחר --</option>
            {subcategories.map(sub => (
              <option key={sub.id} value={sub.id}>{sub.name}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
