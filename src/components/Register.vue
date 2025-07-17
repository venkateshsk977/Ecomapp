<template>
  <v-card class="pa-4" style="background-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border-radius: 12px;" elevation="10">
    <v-card-title class="text-h5">Register</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleRegister">
        <v-text-field v-model="form.name" label="Name" required />
        <v-text-field v-model="form.email" label="Email" type="email" required />
        <v-text-field v-model="form.password" label="Password" type="password" required />
        <v-text-field v-model="form.phone" label="Phone" />

        <v-text-field v-model="form.address.street" label="Street" />
        <v-text-field v-model="form.address.city" label="City" />
        <v-text-field v-model="form.address.state" label="State" />
        <v-text-field v-model="form.address.pincode" label="Pincode" />
        <v-text-field v-model="form.address.country" label="Country" />

        <v-select v-model="form.role" :items="roles" label="Role" />

       <v-row class="mt-4" justify="end" align="center" no-gutters>
  <v-col cols="5">
    <v-btn color="primary" block @click="registerUser">REGISTER</v-btn>
  </v-col>
  <v-col cols="2">    
  </v-col>
  <v-col cols="5">
    <v-btn color="error" block @click="emit('close')">CLOSE</v-btn>
  </v-col>
</v-row>
        <v-alert v-if="message" :type="messageType" class="mt-3" dense>{{ message }}</v-alert>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        phone: '',
        address: {
          street: '',
          city: '',
          state: '',
          pincode: '',
          country: '',
        },
        role: 'customer',
      },
      roles: ['customer', 'seller', 'admin'],
      message: '',
      messageType: 'success',
    }
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post('http://localhost:3000/register', this.form)
        this.message = response.data.message
        this.messageType = 'success'
        this.resetForm()
      } catch (err) {
        this.message = err.response?.data?.error || 'Registration failed'
        this.messageType = 'error'
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        password: '',
        phone: '',
        address: {
          street: '',
          city: '',
          state: '',
          pincode: '',
          country: '',
        },
        role: 'customer',
      }
    }
  }
}


const registerUser = () => {
  // Submit logic
  // ...

  // Emit close after success
  emit('close')
}
</script>
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])
</script>