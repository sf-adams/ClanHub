import axios from "axios";

const baseURL = "http://localhost:8080/api/posts/";

class PostService {
  getPosts() {
    return axios.get(baseURL);
  }

  newPost(post) {
    return axios.post(baseURL, post);
  }

  editPost(post){
    return axios.put(baseURL, post), {
      
    }
  }
}

export default new PostService();
