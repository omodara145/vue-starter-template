import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import starter from "./modules/starter";

Vue.use(Vuex);

const ifInProduction = process.env.NODE_ENV === "production";

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "vue-starter-template",
      storage: localStorage
    })
  ],
  modules: {
    starter
  },
  strict: ifInProduction
});
