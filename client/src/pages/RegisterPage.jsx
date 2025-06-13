import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const isFormValid = name.trim() !== '' && phone.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users', { name, phone });
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/prompt');
    } catch (err) {
      console.error(err);
      alert('הייתה שגיאה בהרשמה או בהתחברות');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>הרשמה / התחברות</h1>
      <form onSubmit={handleSubmit}>
        <label>שם:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>טלפון:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
        {isFormValid ? (
          <button type="submit">התחבר / הרשם</button>
        ) : (
          <button type="button" disabled>יש למלא את כל השדות</button>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
