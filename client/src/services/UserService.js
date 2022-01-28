import axios from 'axios';

const baseURL = "http://localhost:8080/api/users/";

class UserService {
  getUsers() {
    return axios.get(baseURL);
  }

  newUser(user) {
    return axios.post(baseURL, user);
  }
}

export default new UserService;