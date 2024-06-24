import React, { useState, useMemo } from 'react'
import './App.css'
const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  const handleWeight = (event) => {
    setWeight(event.target.value);
  }

  const handleHeight = (event) => {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calHeight = height/100;
    return (weight/(calHeight*calHeight)).toFixed(2);
  }, [weight, height]);

  return (
    <main>
     <h1>Project 1 : BMI Calculator</h1>

     <div className='input-section'>

      <p className='slider-output'>Weight : {weight} kg</p>
      <input className='input-slider' 
              type='range' 
              step='1' 
              min='40' 
              max='200' 
              onChange={handleWeight}
      />
      <p className='slider-output'>Height : {height} cm</p>
      <input className='input-slider' 
              type='range' 
              min='140' 
              max='201' 
              onChange={handleHeight}
      />
     </div>
     <div className='output-section'>
      <p>Your BMI is </p>
      <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App

