import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score ?? 0; // récupérer le score passé

  return (
    <div>
      <h2>🎉 Quiz Finished!</h2>
      <h3>Your score: {score}</h3>
      <button onClick={() => navigate('/Quiz')}>Restart Quiz</button>
    </div>
  );
}
