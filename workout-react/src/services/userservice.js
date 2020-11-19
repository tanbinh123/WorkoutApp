
import React from 'react';
// import axios from 'C:/Users/Josh/AppData/Roaming/npm/node_modules/axios';
import axios from 'axios';
//C:/Users/Josh/AppData/Roaming/npm/node_modules/axios
const USER_POST_REST_API_URL = 'http://localhost:8080/registerUser';
const USER_GET_REST_API_URL = 'http://localhost:8080/pullUsers';
const USER_LOGIN_GET_REST_API_URL = 'http://localhost:8080/loginUser';
const USER_ERROR_GET_REST_API_URL = 'http://localhost:8080/getUser';

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
    userRegError(uName,uPass)
    {   
        let str = USER_ERROR_GET_REST_API_URL+'/'+uName+'/'+uPass;
        return axios.get(str);
    }
    userLogin(uName,uPass)
    {
       let str = USER_LOGIN_GET_REST_API_URL+'/'+uName+'/'+uPass;
        return axios.get(str);
    }
    getAllUsers()
    {
        
         return axios.get(USER_GET_REST_API_URL);
    }
    
    
}
export default UserService;