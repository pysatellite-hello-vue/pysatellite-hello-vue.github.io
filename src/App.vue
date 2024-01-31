<script setup>
import { ref } from 'vue'
//import { toggleAwesome } from '<my_package>'

const awesome = ref(true)

function toggleAwesome(v) {
  awesome.value = !v
}

function isAwesome() {
  return awesome.value
}
</script>

<template>
  <button @click="toggleAwesome(awesome)">toggle</button>

	<h1 v-if="isAwesome()">Vue is awesome!</h1>
	<h1 v-else>Oh no T T</h1>

	<h4 v-if="isAwesome">v-if TRUE</h4>
	<h4 v-show="isAwesome()">v-show TRUE</h4>
</template>
