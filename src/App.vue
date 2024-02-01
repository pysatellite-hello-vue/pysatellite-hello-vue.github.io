<script setup>
import { ref } from 'vue'
import Child from './components/Child.vue'

const pocketMoney = ref('퇴근하셔도 좋아요. 수고해셨습니다 : D')
</script>

<template>
  <Child :pocketMoney="pocketMoney" />
</template>
