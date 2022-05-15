<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'NavHeader',
};
</script>