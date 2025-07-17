<template>


    <v-card class="rounded-lg" style="backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.85);">
      <v-card-title class="text-h6 font-weight-bold">Login</v-card-title>

      <v-card-text>
        <!-- Stylish Email -->
        <v-text-field
          v-model="email"
          label="Email"
          prepend-inner-icon="mdi-email-outline"
          color="blue darken-1"
          variant="outlined"
          class="mb-4"
        />

        <!-- Password -->
        <v-text-field
          v-model="password"
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
          type="password"
          color="grey"
          variant="outlined"
        />
      </v-card-text>

      <!-- Moved up slightly -->
      <v-card-actions class="justify-end" style="margin-top: -20px;">
        <v-btn color="primary" text @click="handleLogin">Login</v-btn>
        <v-btn color="red" text @click="loginDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>

</template>

<script setup>
import { ref } from 'vue'

const loginDialog = ref(false)
const email = ref('')
const password = ref('')

function handleLogin() {
  // Your login logic here
}
</script>
