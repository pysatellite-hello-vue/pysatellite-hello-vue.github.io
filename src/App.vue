<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
 <span>Multiline message is:</span>
 <p>{{ message }}</p>
 <textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>
