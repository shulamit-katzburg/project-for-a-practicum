import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PromptResultPage() {
  const { promptId } = useParams();
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/prompts/${promptId}`)
      .then(res => setPrompt(res.data))
      .catch(err => console.error(err));
  }, [promptId]);

  if (!prompt) return <p>טוען...</p>;

  return (
    <div>
      <h3>השאלה:</h3>
      <p>{prompt.prompt}</p>
      <h3>תשובה:</h3>
      <p>{prompt.response}</p>
    </div>
  );
}
