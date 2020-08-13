
import React from 'react';
import axios from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/axios';
const USER_POST_REST_API_URL = 'http://localhost:8080/registerUser';
const USER_GET_REST_API_URL = 'http://localhost:8080/pullUsers';
var data = [];
var userPromise;
class UserService extends React.Component{
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
        
         userPromise = axios.get(USER_GET_REST_API_URL);
         data = userPromise.then(function(result) {
            console.log(result);
            var userData=[];
            result.data.forEach(element => {
                userData.push(element);
            });
            
            console.log(userData[0].lastName);
            
            console.log("UserDATA = " + userData);
            data=userData;
        });
        return data;
       
        //let resParse = JSON.parse(res);
        //console.log(resParse);
       
        //let userList = [];
        //userList.push(userJsonString);
        //JSON.parse(res);
       
    }
    
}
export default UserService;