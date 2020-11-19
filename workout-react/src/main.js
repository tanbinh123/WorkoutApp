import React from 'react';
import Button from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/react-bootstrap';
import UserService from './services/userservice';
import './css/styles.css';
import WorkoutCreatePage from './pages/workoutcreatepage';
import MenuPage from './pages/menupage';
var userService = new UserService();





class Main extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            user:null,
            uName:"",
            uPass:"",
            fName:"",
            lName:"",
            workouts:[],
            condition:false,
            start:true,
            workoutCreate:false,
            registerErrorMessage:'',
        }
        console.log("in constructor");
        this.HandleLoginSubmit = this.HandleLoginSubmit.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    HandleLoginSubmit(event)
    {
        event.preventDefault();
        userService.userLogin(this.state.uName,this.state.uPass).then((result) => {
            this.setState({
                user:result.data,
            });
            console.log(result);
       
            
            console.log("before accessing result");
           
            
            console.log(this.state.user);
            console.log(this.state.user[0].lastName);
        
         if(this.state.uName === this.state.user[0].userName && this.state.uPass === this.state.user[0].password)
         {
            console.log("login successfull");
            this.setState({
                start:false,
                condition:true,
            })
        }
        else 
        {
            this.setState({
                start:true,
            })
        }
    });
        
        // userService.getAllUsers().then((result) => {
        //     this.setState({
             
        //     user:result.data});
        //     console.log(this.state.user);
        //     console.log(this.state.user[0].lastName);
        
        //  if(this.state.uName === this.state.user[0].userName && this.state.uPass === this.state.user[0].password)
        //  {
        //     console.log("login successfull");
        //     this.setState({
        //         start:false,
        //         condition:true,
        //     })
        // }
        // else 
        // {
        //     this.setState({
        //         start:true,
        //     })
        // }
        
        // });
       
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    handleCreateUser(event)
    {
        event.preventDefault();
        userService.userLogin(this.state.uName,this.state.uPass).then((result) => {
            console.log(result.data);
            if(result.data[0] === undefined)
            {
                
                let userObject = {'userName':this.state.uName, 'firstName':this.state.fName,'lastName':this.state.lName,'password':this.state.uPass};
                userService.create(userObject);
                console.log(userObject);
                this.setState({
                    start:true,
                });
            }
            else if(result.data[0].userName == this.state.uName)
            {
                this.setState({
                    registerErrorMessage:'User Exists'
                });
            }
            
        
        });
    }
    
    changeState(){
        this.setState({
            start: !this.state.start
        });
    }
    handleLogout(){
        this.setState({
            start:true,
            user:null,

        });
    }
    handleCreateWorkout(){
        console.log("hi");
        console.log("start = " + this.state.start);
        console.log("condition = " + this.state.condition);
        console.log("workoutcreate = " + this.state.workoutCreate);
        this.setState({
            condition:false,
            workoutCreate:true,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        
        this.state.condition = !this.state.condition;
        this.state.start = false;
        this.setState({state: this.state});
        console.log("trying to submit Start " + this.state.start);
        console.log("trying to submit condition " + this.state.condition);
    }
    render(){
        //LoginPage
        if(this.state.start)
        {
            
            return(
                
                <div className="login"  style={{margin:'10%'}}>
                     <h1 >Welcome to the Workout App!</h1>
                     <h3 >Please login</h3>
                     <br></br>
                    <header className="app-header">
                        
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                      
                    </header>

                
                <form onSubmit={this.HandleLoginSubmit}>
                     <input type="text" name="uName"  value={this.state.uName} required placeholder="User Name" onChange={this.handleChange}/>
                     <br></br>
                     <br></br>
                    <input type="text" name="uPass"  value={this.state.uPass} required placeholder="User Password" onChange={this.handleChange}/>
                    <br></br>
                    <br></br>
                    <button class="btn btn-info" type="submit">Sign In</button>
                    <br></br>
                    {/* style={{margin:'10px'}}  */}
                    
                </form>
                <br></br>
                <button class="btn btn-info" onClick={()=>this.changeState()}>Click here to Register</button>
                </div>
            );


            
        }//menupage
        else if(this.state.condition)
        {

            return(
               
                <div className="app" style={{margin:'10%'}}>
                <MenuPage uName={this.state.uName}/>
                <form  onSubmit={this.handleSubmit}>
                <br></br>
                    {/* <button  class="btn btn-info" type="submit">Click here to change state</button>  */}
                    <br></br>
                    
                    {/* style={{padding:"10px",margin:'10px',}} */}
                </form>
                <br></br>
                <button  class="btn btn-info" onClick={()=>this.handleLogout()}>Click here to Logout</button> 

                </div>
                );
        }//workoutcreatepage
        else if(this.state.workoutCreate)
        {
            return(
                <div className="app" style={{margin:'10%'}}>
                <WorkoutCreatePage uName={this.state.uName}/>
                </div>
            );
        }//Register user
        else if(!this.state.condition)
        {
            return(
                
                <div className="app" style={{margin:'10%'}}>
                    <header className="app-header">
                        
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                      
                    </header>

                    <h1 >Register User</h1>
                    <form  class="" onSubmit={this.handleCreateUser}>
                        <div className="first-row">
                            <label className="User-Name-Text">User Name</label>
                            <input type="text" name="uName" className="form-control" value={this.state.uName} required placeholder="User Name" onChange={this.handleChange}/>
                            <input type="text" name="uPass" className="form-control" value={this.state.uPass} required placeholder="User Password" onChange={this.handleChange}/>
                            <input type="text" name="fName" className="form-control" value={this.state.fName} required placeholder="First Name" onChange={this.handleChange}/>
                            <input type="text" name="lName" className="form-control" value={this.state.lName} required placeholder="Last Name" onChange={this.handleChange}/>
                            <br></br>
                        </div>
                        
                        <button class="btn btn-info" type="submit">Submit</button>
                    </form>
                    <a>{this.state.registerErrorMessage}</a>
                    <br></br>
                    <button class="btn btn-info" onClick={()=>this.changeState()}>Click here to Login</button> 
                </div>
               
                );
        }//default page
        else if(this.state.condition)
        {
            return(
                <a>default</a>
            );
        }
       
       
    }


}
export default Main; 