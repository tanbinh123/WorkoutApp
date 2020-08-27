import React from 'react';
import '../css/styles.css';

export const RenderItems = ({list}) => (
    <div className="flex-container">
        {
        
        list.map(item => (
            <div  key={item.workoutName}>
            <div className="workout-cards" ><u>{item.type}</u> <br></br>
            sets: {item.sets}<br></br>
            reps: {item.reps}</div>
            
            </div>
        ))}
    </div>
  );