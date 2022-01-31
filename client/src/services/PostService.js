import axios from "axios";

const baseURL = "http://localhost:8080/api/posts/";

class PostService {
  getPosts(search) {
    return axios.get(baseURL)
  }

  newPost(post) {
    
    return axios.post(baseURL, post);
  }

  removePost(post) {
    return axios.delete(baseURL + post);
  }

  editPost(post) {
    console.log(baseURL + post.id, post);
    return axios.put(baseURL + post.id, post);
  }
}

export default new PostService();
