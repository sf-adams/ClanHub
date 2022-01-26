import axios from 'axios';

const baseURL = "http://localhost:8080/api/users/";

class UserService{
    getUsers() {
        return axios.get(baseURL);
    }
}

export default new UserService;