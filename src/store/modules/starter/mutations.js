import * as types from "../../mutation-types";

export default {
  [types.STARTER](state, starter) {
    state.starter = starter;
  }
};
