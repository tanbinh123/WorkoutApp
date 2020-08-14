
import React from 'react';
import axios from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/axios';
const USER_POST_REST_API_URL = 'http://localhost:8080/registerUser';
const USER_GET_REST_API_URL = 'http://localhost:8080/pullUsers';

var userPromise;
class UserService extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            data: Array(),
        }
    }
    create(user)
    {
        let userString = JSON.stringify(user);
        console.log(userString);
        axios.post(USER_POST_REST_API_URL,userString,{headers:{'content-type':'application/json'}}).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    getAllUsers()
    {
        
         return axios.get(USER_GET_REST_API_URL);
        //  userPromise.then((response) => {
        //    // console.log(response);
        //     // var userData=[];
        //     // result.data.forEach(element => {
        //     //     userData.push(element);
        //     // });
            
        //         this.state.data = response.data;
        //         //console.log(this.state.data);
        //         return this.state.data;
        //     // console.log(userData[0].lastName);
            
        //    // console.log("UserDATA = " + userData);
        //     //data=userData;
        // });
        //return this.state.data;
       
        
       
        //let resParse = JSON.parse(res);
        //console.log(resParse);
       
        //let userList = [];
        //userList.push(userJsonString);
        //JSON.parse(res);
       
    }
    
}
export default UserService;