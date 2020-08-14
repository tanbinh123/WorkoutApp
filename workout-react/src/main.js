import React from 'react';
import Button from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/react-bootstrap';
import UserService from './services/userservice';
var userService = new UserService();

class Main extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state = {
            user:[],
            uName:"",
            uPass:"",
            fName:"",
            lName:"",
            workouts:[],
            condition:false,
            start:true,
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
        userService.getAllUsers().then((result) => {
            this.setState({
             
            user:result.data});
            console.log(this.state.user);
            console.log(this.state.user[0].lastName);
        
         if(this.state.uName === this.state.user[0].userName && this.state.uPass === this.state.user[0].password)
         {
            console.log("login successfull")
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
        let userObject = {'userName':this.state.uName, 'firstName':this.state.fName,'lastName':this.state.lName,'password':this.state.uPass};
        userService.create(userObject);
        console.log(userObject);
        this.setState({
            start:true,
        })

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
        
        if(this.state.start)
        {
            return(
                <div className="app">
                    <header className="app-header">
                        
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                      
                    </header>

                
                <form  style={{margin:'20%'}} onSubmit={this.HandleLoginSubmit}>
                     <input type="text" name="uName" className="form-control" value={this.state.uName} required placeholder="User Name" onChange={this.handleChange}/>
                    <input type="text" name="uPass" className="form-control" value={this.state.uPass} required placeholder="User Password" onChange={this.handleChange}/>

                    <button style={{margin:'10px'}} class="btn btn-danger" type="submit">Sign In</button>
                </form>
                </div>
            );


            
        }
        else if(this.state.condition)
        {

            return(
               
                <div className="app">
                   
                    <header className="app-header">
                        
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                    
                    </header>

                     <h1>Logged in Successfully</h1>
                    <form  onSubmit={this.handleSubmit}>
                        <button style={{padding:"10px",margin:'10px',}} class="btn btn-danger" type="submit">Click here to change state</button>
                    </form>
                </div>
                );
        }
        else if(!this.state.condition)
        {
            return(
                
                <div className="app" style={{margin:'10%'}}>
                    <header className="app-header">
                        
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                      
                    </header>

                    <h1 >Case 2</h1>
                    <form  class="" onSubmit={this.handleCreateUser}>
                        <div className="first-row">
                            <label className="User-Name-Text">User Name</label>
                            <input type="text" name="uName" className="form-control" value={this.state.uName} required placeholder="User Name" onChange={this.handleChange}/>
                            <input type="text" name="uPass" className="form-control" value={this.state.uPass} required placeholder="User Password" onChange={this.handleChange}/>
                            <input type="text" name="fName" className="form-control" value={this.state.fName} required placeholder="First Name" onChange={this.handleChange}/>
                            <input type="text" name="lName" className="form-control" value={this.state.lName} required placeholder="Last Name" onChange={this.handleChange}/>
                            <br></br>
                        </div>
                        
                        

                        <button class="btn btn-danger" type="submit">Click here to change state</button>
                    </form>
                </div>
               
                );
        }
        else
        {
            return(
                <a>default</a>
            );
        }
       
    }


}

export default Main; 