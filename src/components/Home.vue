<template>
  <v-container
    fluid
    class="fill-height d-flex flex-column justify-center align-center text-center"
    style="top:120px !important;background: radial-gradient(circle at center, #ffffff, #dfe6e9);"
  >
    <!-- Welcome Text -->
    <h1 class="text-h3 font-weight-bold mb-6" style="color: #2d3436">
      Welcome, User!
    </h1>

    <!-- Tom & Jerry Image -->
    <v-img
      src="https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg"
      alt="Tom and Jerry"
      max-width="450"
      width="100%"
      height="auto"
      class="rounded-lg elevation-6"
      cover
    />
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>
