import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HistoryPage() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.id) {
      axios
        .get(`http://localhost:5000/api/prompts/user/${user.id}`)
        .then((res) => {
          setPrompts(res.data);
        })
        .catch((err) => {
          console.error('שגיאה בשליפת היסטוריה:', err);
        });
    }
  }, []);
  
  return (
    <div>
      <h2>היסטוריה</h2>
      {prompts.map(p => (
        <div key={p.id}>
          <p><strong>שאלה:</strong> {p.prompt}</p>
          <p><strong>תשובה:</strong> {p.response}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
