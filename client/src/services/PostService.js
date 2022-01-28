import axios from "axios";

const baseURL = "http://localhost:8080/api/posts/";

class PostService{
    getPosts() {
        return axios.get(baseURL)
    }
}

export default new PostService();