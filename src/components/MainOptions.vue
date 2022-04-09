<template>
  <div id="main">
    
    <img src="@/assets/logo.png" height="300">

    <div class="parent">

        <input type="button" value="Order food" class="food-btn" @click="goToFood()" />

        <input type="button" value="Order board game" class="food-btn" @click="goToGames()" />

        <input type="button" value="Order music" class="food-btn"
          onclick="window.open('https://open.spotify.com/playlist/6XvC7Yej0sNWsF0YRrEAf5?si=25d86c61f05447c0', '_blank')" />

        <input type="button" class="logout" @click="logout()" value="Log out" />
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  
  methods: {
    goToGames: function() {
       this.$router.push('/games-list')
    },
    goToFood: function() {
       this.$router.push('/food-list')
    },
    logout: function() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-between;
  margin: 0 135px;
}

.food-btn {
  display:inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top:20px;
  white-space: normal;
}

.logout {
  position: absolute;
  top: 10px;
  right: 30px;
}
</style>