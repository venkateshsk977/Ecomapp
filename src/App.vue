<script setup>
import { ref } from 'vue'
import RegisterForm from './components/Register.vue'
import login from './components/Login.vue'

const registerDialog = ref(false)
const loginDialog =ref(false)
</script>

<template>
  <v-app>
   <v-btn
  color="primary"
  class="floating-register"
  elevation="8"
  @click="registerDialog = true"
>
  Register
</v-btn>

 <v-btn
  color="primary"
  class="floating-login"
  elevation="8"
  @click="loginDialog = true"
>
  Login
</v-btn>


    <v-main class="bg-grey-lighten-3 pa-4">
      <router-view />
    </v-main>

    <!-- Register Dialog -->
<v-dialog v-model="registerDialog" max-width="500px">
  <RegisterForm @close="registerDialog = false" />
</v-dialog>

<v-dialog v-model="loginDialog" max-width="500px">
  <login @close="loginDialog = false" />
</v-dialog>


  </v-app>
</template>
<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
.v-main {
 min-height: calc(-64px + 100vh);
    min-width: calc(-100px + 100vw);
}
.floating-register {
  position: fixed;
  top: 1%;
  right: 2%;
  z-index: 999;
  border-radius: 999px;
}

.floating-login {
  position: fixed;
  top: 1%;
  right: 6%;
  z-index: 999;
  border-radius: 999px;
}
</style>
