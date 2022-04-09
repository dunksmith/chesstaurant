<template>
  <div id="main">
    
    <form @submit="checkPassword()">

    <label>Please enter password:</label>
    <input type="password" name="password" v-model="password" autofocus />

    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      password: null,
    }
  },

  methods: {
    checkPassword: function() {
      if (this.password === "smithlist") {
       this.$router.push('/main-options')
      }
      else {
        alert("wrong password");
        this.password = null;
      }
      return false;
    }
  }
}
</script>

<style scoped>
#main {
  background: white;
  margin: 60px;
  padding: 100px 0;
}
</style>