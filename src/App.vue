<script setup>
import { ref } from 'vue'

const message = ref({name: "MIN", age: 46})
const name = "MIN"
</script>

<template>
  <h1>{{ message }}</h1>
</template>
