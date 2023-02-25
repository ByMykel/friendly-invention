<script setup lang="ts">
import type { Message } from '../types/index'

defineProps<{
  message: Message
}>()
</script>

<template>
  <div class="message-bot bg-verbio-main p-2 w-60 rounded-md text-white text-sm break-all">
    <p v-if="message.type === 'text'">
      {{ message.text }}
    </p>
    <img v-else :src="message.url" alt="bot image" class="w-full rounded-md" />
  </div>
</template>
