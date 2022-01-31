import axios from "axios";

const baseURL = "http://localhost:8080/api/comments/";

class CommentService {
  getComments() {
    return axios.get(baseURL);
  }

  newComment(post) {
    return axios.post(baseURL, post);
  }

  removeComment(post) {
    return axios.delete(baseURL + post);
  }

  editComment(post) {
    return axios.put(baseURL + post.id, post);
  }
}

export default new CommentService();
