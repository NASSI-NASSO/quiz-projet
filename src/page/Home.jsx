import React from 'react'

export default function Home() {
  return (
    <div>
        <h2>TEST TOU KNOWLEDGE</h2>  
        <p>This is a quiz application designed to test your knowledge on various topics. Navigate to the Quiz section to get started and see how much you know!</p>
        <button onClick={() => window.location.href='/Quiz'}>Start Quiz</button>

    </div>
  )
}
