
import axios from 'axios';

const USER_POST_REST_API_URL = 'http://localhost:8080/registerUser';

class UserService{
    create(user)
    {
        let userString = JSON.stringify(user);
        axios.post(USER_POST_REST_API_URL,userString,{headers:{'content:type':'application/json'}});
    }
}
export default UserService;