import React from 'react';
import Button from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/react-bootstrap';

class Main extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
            user:[],
            uName:"",
            uPass:"",
            workouts:[],
            condition:false,
            start:true,
        }
        console.log("in constructor");
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
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
        
        if(this.state.start)
        {
            return(
                <div className="app">
                    <header className="app-header">
                        
                        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        id="bootstrap-css"/>
                                      
                    </header>

                
                <form  onSubmit={this.handleSubmit}>
                    <button class="btn btn-danger" type="submit">Click here to change state</button>
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

                     <h1>Case 1</h1>
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
                    <form  class="" onSubmit={this.handleSubmit}>
                        <div className="first-row">
                            <label className="User-Name-Text">User Name</label>
                            <input type="text" name="uName" className="form-control" value={this.state.uName} required placeholder="User Name" onChange={this.handleChange}/>
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