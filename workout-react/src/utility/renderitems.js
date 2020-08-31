import React from 'react';
import '../css/styles.css';

export const RenderItems = ({list}) => (
    <div className="flex-container">
        {
        
        list.map(item => (
            <div  key={item.workoutName}>
            <div className="workout-cards" ><u>{item.type}</u> <br></br>
            <a>sets: {item.sets}</a><br></br>
            <a>reps: {item.reps}</a></div>
            
            </div>
        ))}
    </div>
  );