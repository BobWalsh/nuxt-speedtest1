<template>
  <div>
    <h1>this is login Vue</h1>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="email@email.com" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button class="button is-primary">Login</button>
      <div class="error" v-if="error">{{ error.message }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed() {
      alert('pressed!')
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
  border: 2px black solid;
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
  margin-left: 20px;
}
.error {
  color: red;
}
</style>
