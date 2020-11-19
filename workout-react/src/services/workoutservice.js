
import React from 'react';
// import axios from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/axios';
import axios from 'axios';
const WORKOUT_POST_REST_API_URL = 'http://localhost:8080/createWorkout';
const WORKOUT_GET_ALL_REST_API_URL = 'http://localhost:8080/workouts';
const WORKOUT_NAME_GET_REST_API_URL = 'http://localhost:8080/checkWorkoutExists';

class WorkoutService extends React.Component{

    constructor(props)
    {
        super(props)

        this.state={
            data: Array(),
        }

    }

    workoutExists(wName)
    {
         let str = WORKOUT_NAME_GET_REST_API_URL+'/'+wName;
          return axios.get(str);
      
    }
    getWorkouts(uName)
    {
        return axios.get(WORKOUT_GET_ALL_REST_API_URL+'/'+uName);
    }
    createWorkout(workout)
    {
        let workoutString = JSON.stringify(workout);
        console.log(workoutString);
        console.log(workout);
        

        console.log(axios.post(WORKOUT_POST_REST_API_URL,workoutString,{headers:{'content-type':'application/json'}}).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
        );
    }

  
    
}
export default WorkoutService;