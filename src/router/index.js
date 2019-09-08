import Vue from "vue";
import VueRouter from "vue-router";
import { sync } from "vuex-router-sync";
import store from "../store";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  mode: "history",
  routes
});

sync(store, router);
export default router;
