<script setup lang="ts">
import type { Message } from '../types/index'

defineProps<{
  message: Message
}>()
</script>

<template>
  <div class="message-user bg-gray-400 p-2 w-60 rounded-md text-white text-sm break-all">
    <p v-if="message.type === 'text'">
      {{ message.text }}
    </p>
  </div>
</template>
