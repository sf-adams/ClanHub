import axios from "axios";

const baseURL = "http://localhost:8080/api/posts/";

class PostService {
  getPosts() {
    return axios.get(baseURL);
  }

  newPost(post) {
    return axios.post(baseURL, post);
  }

  removePost(post){
    return axios.delete(baseURL + post) 
  }

  updatePost(post){
    return axios.put(baseURL + post)
  }
}

export default new PostService();
