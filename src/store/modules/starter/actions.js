import * as mutations from "../../mutation-types";
import * as actions from "../../action-types";
import starter from "../../../services/starter.js";

export default {
  [actions.STARTER](context) {
    return new Promise((resolve, reject) => {
      starter
        .apiGet()
        .then(response => {
          if (response.data.status === "success") {
            context.commit(mutations.STARTER, response.data.success);
          }
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
