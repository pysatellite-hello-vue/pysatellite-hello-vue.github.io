<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref({
	cnt: 0,
	name: "KIM",
	
})

// functions that mutate state and trigger updates
function increment() {
  count.value.cnt = count.value.cnt + 1
  count.value.name = count.value.name.split('').reverse().join('')
}

// lifecycle hooks
onMounted(() => console.log(`The initial count is ${count.value}.`))
</script>

<template>
  <button @click="increment">Count is: {{ count.cnt }} {{ count.name }}</button>
</template>

