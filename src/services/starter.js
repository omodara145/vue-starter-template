import axios from "axios";

export default {
  apiGet() {
    return axios.get("endpoint/get");
  },

  apiPost(data) {
    return axios.post("/endpoint/post", {
      data: data
    });
  }
}