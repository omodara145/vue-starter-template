<template>
  <component :is="layout">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view :layout.sync="layout" />
    </div>
  </component>
</template>

<script>
import AppLayout from "./layouts/app.vue";

export default {
  name: "App",
  components: {},
  data() {
    return {
      layout: AppLayout
    };
  }
};
</script>
