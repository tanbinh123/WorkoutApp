import React from 'react';
import '../css/styles.css';
import '../utility/renderitems'
import { RenderItems } from '../utility/renderitems';
import WorkoutService from '../services/workoutservice';

class WorkoutCreatePage extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            type:"",
            sets:0,
            reps:0,
            workoutName:"",
            workoutTypeCount: 0,
            workoutType:["ex1","ex2", "ex3", "ex4", "ex5", "ex6"],
            workoutList:[],
            uName:this.props.uName,
        }
        this.hideExercise = this.hideExercise.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addWorkoutToList = this.addWorkoutToList.bind(this);
    }
    changeWorkout(type)
    {
        // let count = 0;
        // this.state.workoutType.forEach(element => {
        //     if(type == element)
        //     {
        //         this.setState({
        //             workoutTypeCount: count,
        //         });
               
        //     }
        //     count++;
        // });

        this.setState({
            type: type,
            
        });
    }
    handleChange(event)
    {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }
    
    submitWorkout()
    {
        let ws = new WorkoutService();

        ws.createWorkout(this.state.workoutList);
        this.setState({
            workoutList:[],
            workoutName:"",
            
        });
    }
    hideExercise(id){
        console.log(id);
        document.getElementById(id).style.display = 'none';
    }
    showAllExercises(){
        this.state.workoutType.forEach(element => {
            document.getElementById(element).style.display = '';
        });
    }
    addWorkoutToList(event)
    {    
        event.preventDefault();
        let li = this.state.workoutList;
        li.push({'workoutName':this.state.workoutName , 'type':this.state.type, 'sets':this.state.sets, 'reps':this.state.reps, 'user':this.props.uName});
        this.hideExercise(this.state.type);
        this.setState({
            workoutList: li,
            sets: 0,
            reps: 0,
            // workoutTypeCount: this.state.workoutTypeCount++,
            // type: this.state.workoutType[this.state.workoutTypeCount]
        });
        // if(this.state.workoutTypeCount > 5)
        // {
        //     this.setState({
        //         workoutTypeCount: 0,
        //         type: this.state.workoutType[this.state.workoutTypeCount]

        //     });
        // }
        
         li.forEach(element => {
             console.log(element);
         });
        
        
    }

    render(){
        return(
            <div className="workoutcreatepage">
                <header className="app-header">
                         
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                      
                    </header>
                    <h1>Current user {this.props.uName}</h1>
                    <div className="flex-container">
                        <div>
                            <h1 id="ex1" onClick={()=>this.changeWorkout(this.state.workoutType[0])}>Exercise1</h1>
                        </div>
                        <div>
                            <h1 onClick={()=>this.changeWorkout(this.state.workoutType[1])}>Exercise2</h1>
                        </div>
                        <div>
                            <h1 onClick={()=>this.changeWorkout(this.state.workoutType[2])}>Exercise3</h1>
                        </div>
                        <div>
                            <h1 onClick={()=>this.changeWorkout(this.state.workoutType[3])}>Exercise4</h1>
                        </div>
                        <div>
                            <h1 onClick={()=>this.changeWorkout(this.state.workoutType[4])}>Exercise5</h1>
                        </div>
                        <div>
                            <h1 onClick={()=>this.changeWorkout(this.state.workoutType[5])}>Exercise6</h1>
                        </div>
                    </div>

                <a>Workout Name:</a>
                {/* <button class="btn btn-info" onClick={()=>this.changeState()}>Click here to Register</button> */}
                 <form onSubmit={this.addWorkoutToList}>
                 <input type="text" name="workoutName" className="form-control" value={this.state.workoutName} required placeholder="Workout Name" onChange={this.handleChange}/>
                   
                      <h2>Current Workout Selected<br></br>{this.state.type} </h2>
                        <a>sets: </a>
                            <input type="number" name="sets"  max="30" className="form-control" value={this.state.sets} required placeholder="" onChange={this.handleChange}/>
                        <a>reps: </a>   
                            <input type="number" name="reps" className="form-control" value={this.state.reps} required placeholder="" onChange={this.handleChange}/>
                            <input type="hidden" name="type" className="form-control" value={this.state.type}  onChange={this.handleChange} />
                            <button class="btn btn-info" type="submit" >Click here to add workout</button>
                    </form>
                    <a>{this.state.workoutName}</a>
                  <RenderItems list={this.state.workoutList}></RenderItems>

                
                  <button class="btn btn-info" onClick={()=>this.submitWorkout()} >Submit workout</button>
                  

                </div>
               
        );

        

       
    }
    
}
 
export default WorkoutCreatePage;