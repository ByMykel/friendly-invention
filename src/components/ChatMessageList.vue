<script setup lang="ts">
import { ref } from 'vue'
import type { Message } from '../types/index'
import MessageBot from './MessageBot.vue'
import MessageUser from './MessageUser.vue'
import MessageBotLoading from './MessageBotLoading.vue'

const messagesRef = ref<HTMLElement | null>(null)

defineProps<{
  messages: Message[]
  isTyping: boolean
}>()

// expose the ref to the parent component so we can scroll to bottom
defineExpose({
  messagesRef
})
</script>

<template>
  <div class="w-full max-w-3xl bg-gray-300 overflow-y-hidden h-full rounded-md relative">
    <ul
      ref="messagesRef"
      class="overflow-y-scroll overflow-x-hidden h-full space-y-2 bg-[url('/patterns/graph-paper.svg')] flex flex-col p-2"
    >
      <li
        v-for="(message, index) in messages"
        :key="`mesage-${index}`"
        :class="[message.from === 'user' ? 'flex justify-end' : 'flex justify-start']"
      >
        <MessageUser v-if="message.from === 'user'" :message="message" />
        <MessageBot v-else :message="message" />
      </li>
    </ul>
    <MessageBotLoading v-if="isTyping" />
  </div>
</template>

<style scoped>
.message-bot {
  animation: bot 0.4s ease;
}

@keyframes bot {
  from {
    transform: translateX(350px);
  }
  to {
    transform: translateX(0);
  }
}

.message-user {
  animation: user 0.4s ease;
}

@keyframes user {
  from {
    transform: translateX(-350px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
