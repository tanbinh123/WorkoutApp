import React from 'react';
import '../css/styles.css';
import '../utility/renderitems'
import { RenderItems } from '../utility/renderitems';
import WorkoutService from '../services/workoutservice';

class WorkoutCreatePage extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            type:"ex1",
            sets:0,
            reps:0,
            workoutName:"",
            workoutTypeCount: 0,
            workoutType:["ex1","ex2", "ex3", "ex4", "ex5", "ex6"],
            workoutTypeBool:[false,false,false,false,false,false],
            workoutList:[],
            uName:this.props.uName,
            showForm:false,
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
            type:'ex1',
            showForm:false,
            
        });
        this.showAllExercises();
        
    }
    hideExercise(id){
        console.log(id);
        document.getElementById(id).style.opacity = 0.5;
        document.getElementById(id).style.pointerEvents = 'none';

    }
    showAllExercises(){
        this.state.workoutType.forEach(element => {
            document.getElementById(element).style.opacity = 1;
            document.getElementById(element).style.pointerEvents = '';
        });
    }
    
    changeShowForm()
    {
        let ws = new WorkoutService();
        ws.workoutExists(this.state.workoutName)
        if(true){
            this.setState({
                showForm:!this.state.showForm,
                workoutList:[],
                workoutTypeBool:[false,false,false,false,false,false],
                type:'ex1',
            });
        }
        else
        {

        }
       

    
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
        var findNext = false;
        
           for(let i = 0; i < this.state.workoutType.length; i++)
           {
               if(this.state.workoutType[i] === this.state.type)
               {
                    this.state.workoutTypeBool[i] = true;
                    if(this.state.workoutType[i+1] != null && this.state.workoutTypeBool[i+1] != true)
                    {
                       
                        this.setState({
                            type:this.state.workoutType[i+1],
                        });
                        
                        
                    }else if(this.state.workoutTypeBool[i+1] == true){
                        findNext = true;
                        console.log("Should be in findnext=true" + findNext);
                    }
                    if(this.state.type == this.state.workoutType[i]){
                        findNext = true;
                        console.log("Should be in findnext=true" + findNext);
                    }
               }
              
           }
           console.log("" + this.state.workoutTypeBool.length + ""+ findNext);
           var boolCount = 0;
            for(let i = 0; i < this.state.workoutTypeBool.length; i++)
            {
              
                   
                if(this.state.workoutTypeBool[i]==true)
                {
                    boolCount++;
                }
                if(findNext)
                {
                    console.log("inside findnext")
                    if(this.state.workoutTypeBool[i] == false)
                    {
                        this.setState({
                            type:this.state.workoutType[i],
                        });
                        break;
                    }
                    
                }
                if(boolCount == this.state.workoutTypeBool.length)
                {
                     this.setState({
                         type:'',
                     });
                }
                
                
           }
           console.log(boolCount);
           console.log(this.state.workoutTypeBool)
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
       
        if(this.state.showForm)
        {

            if(this.state.type === '')
            {
                
            return(
                <div className="workoutcreatepage">
                    <header className="app-header">
                             
                            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                            rel="stylesheet" 
                            id="bootstrap-css"/>
                                          
                        </header>
                        <h1>Current user : {this.props.uName}</h1>
                        <h1>Workout Name : {this.state.workoutName}</h1> <button class="btn btn-info" onClick={()=>this.changeShowForm()} >Cancle</button>
                        <br></br>
                        <br></br>
                        <div className="flex-container">
                            <div>
                                <h1 id="ex1" onClick={()=>this.changeWorkout(this.state.workoutType[0])}>Exercise1</h1>
                            </div>
                            <div>
                                <h1 id="ex2" onClick={()=>this.changeWorkout(this.state.workoutType[1])}>Exercise2</h1>
                            </div>
                            <div>
                                <h1  id="ex3" onClick={()=>this.changeWorkout(this.state.workoutType[2])}>Exercise3</h1>
                            </div>
                            <div>
                                <h1 id="ex4" onClick={()=>this.changeWorkout(this.state.workoutType[3])}>Exercise4</h1>
                            </div>
                            <div>
                                <h1  id="ex5" onClick={()=>this.changeWorkout(this.state.workoutType[4])}>Exercise5</h1>
                            </div>
                            <div>
                                <h1   id="ex6" onClick={()=>this.changeWorkout(this.state.workoutType[5])}>Exercise6</h1>
                            </div>
                        </div>
    
                        <a>{this.state.workoutName}</a>
                      <RenderItems list={this.state.workoutList}></RenderItems>
    
                    <br></br>
                      <button class="btn btn-info" onClick={()=>this.submitWorkout()} >Submit workout</button>
                      
    
                    </div>
                   
            );
            }
            else
            {

                return(
                    <div className="workoutcreatepage">
                        <header className="app-header">
                                 
                                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                                rel="stylesheet" 
                                id="bootstrap-css"/>
                                              
                            </header>
                            <h1>Current user : {this.props.uName}</h1>
                            <h1>Workout Name : {this.state.workoutName}</h1> <button class="btn btn-info" onClick={()=>this.changeShowForm()} >Cancle</button>
                            <br></br>
                            <br></br>
                            <div className="flex-container">
                                <div>
                                    <h1 id="ex1" onClick={()=>this.changeWorkout(this.state.workoutType[0])}>Exercise1</h1>
                                </div>
                                <div>
                                    <h1 id="ex2" onClick={()=>this.changeWorkout(this.state.workoutType[1])}>Exercise2</h1>
                                </div>
                                <div>
                                    <h1  id="ex3" onClick={()=>this.changeWorkout(this.state.workoutType[2])}>Exercise3</h1>
                                </div>
                                <div>
                                    <h1 id="ex4" onClick={()=>this.changeWorkout(this.state.workoutType[3])}>Exercise4</h1>
                                </div>
                                <div>
                                    <h1  id="ex5" onClick={()=>this.changeWorkout(this.state.workoutType[4])}>Exercise5</h1>
                                </div>
                                <div>
                                    <h1   id="ex6" onClick={()=>this.changeWorkout(this.state.workoutType[5])}>Exercise6</h1>
                                </div>
                            </div>
        
                       
                         <form id ="f2" type="hidden" onSubmit={this.addWorkoutToList}>
                         <input type="hidden" name="workoutName" className="form-control" value={this.state.workoutName} required placeholder="Workout Name" onChange={this.handleChange}/>
                           
                              <h2>Current Exercise Selected<br></br>{this.state.type} </h2>
                                <a>sets: </a>
                                    <input type="number" name="sets"  max="30" className="form-control" value={this.state.sets} required placeholder="" onChange={this.handleChange}/>
                                <a>reps: </a>   
                                    <input type="number" name="reps" className="form-control" value={this.state.reps} required placeholder="" onChange={this.handleChange}/>
                                    <input type="hidden" name="type" className="form-control" value={this.state.type}  onChange={this.handleChange} />
                                    <br></br>
                                    <button class="btn btn-info" type="submit" >Click here to add workout</button>
                            </form>
                            <a>{this.state.workoutName}</a>
                          <RenderItems list={this.state.workoutList}></RenderItems>
        
                        <br></br>
                          <button class="btn btn-info" onClick={()=>this.submitWorkout()} >Submit workout</button>
                          
        
                        </div>
                       
                );
            }


        }
        else
        {
            return(
                <div className="workoutcreatepage">
                    <header className="app-header">
                             
                            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                            rel="stylesheet" 
                            id="bootstrap-css"/>
                                          
                        </header>
                        <h1>Current user {this.props.uName}</h1>
                     
    
                    <a>Workout Name:</a>
                    {/* <button class="btn btn-info" onClick={()=>this.changeState()}>Click here to Register</button> */}
                     <input type="text" name="workoutName" className="form-control" value={this.state.workoutName} required placeholder="Workout Name" onChange={this.handleChange}/>
                     <button class="btn btn-info" onClick={()=>this.changeShowForm()} >CreateWorkout</button>
                   
    
                    </div>
                   
            );
        }
      

        

       
    }
    
}
 
export default WorkoutCreatePage;