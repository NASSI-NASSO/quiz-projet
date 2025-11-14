import React from 'react';
import { useState } from 'react';
import Questions from '../Data/Quetion';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
const [i, setI] = useState(0);
const [score, setScore] = useState(0);
const navigate = useNavigate();


  const handleClick = (opt) => {
    if(opt === Questions[i].correct){
      setScore(score + 1);
    }
console.log(score);


    if (i < Questions.length - 1) {
      setI(i + 1);
      
    }else { navigate('/Result', {state: {score: score}});}
  };
  const Question = Questions[i];
  

  return (
    <div>
      <h2>{`question${Question.id} / ${Questions.length}`}</h2>
      <p>{Question.text}</p>
      {Question.options.map((optabc) => (
        <label key={optabc} style={{display:"block" ,margin:"8px"}}>
        <input
            type="radio"
            name={`question-${Question.id}`}
            onChange={() => handleClick(optabc)}
            />
          {optabc}
        </label>
      
      ))}
    </div>
  );

};

