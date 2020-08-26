import React from 'react';

export const RenderItems = ({list}) => (
    <ul>
        {
        
        list.map(item => (
            <li key={item.workoutName}>
           <div>{item.type}</div>
            <div>sets: {item.sets}</div>
            <div>reps: {item.reps}</div>
            
            </li>
        ))}
    </ul>
  );