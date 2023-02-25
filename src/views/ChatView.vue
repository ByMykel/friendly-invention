<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBot } from '@/composables/useBot'
import ChatHeader from '@/components/ChatHeader.vue'
import ChatMessageInput from '@/components/ChatMessageInput.vue'
import ChatMessageList from '@/components/ChatMessageList.vue'

const { messages, addMessage, getBotWelcomeMessage } = useBot()
const messageList = ref<HTMLElement | null>(null)

// Scroll to bottom of the chat when a new message is added
const scrollBottom = () => {
  const chatElement = messageList?.value?.messagesRef

  if (!(chatElement instanceof HTMLElement)) return

  chatElement.scrollTo({
    top: chatElement.scrollHeight - 10,
    behavior: 'smooth'
  })
}

// Handle message input from the user and scroll to bottom
const handleMessageInput = async (text: string) => {
  await addMessage(text, scrollBottom)

  setTimeout(() => {
    scrollBottom()
  }, 200)
}

onMounted(async () => {
  await getBotWelcomeMessage(scrollBottom)
})
</script>

<template>
  <main class="flex h-screen items-center flex-col justify-center px-4 space-y-2">
    <ChatHeader />
    <ChatMessageList ref="messageList" :messages="messages" />
    <ChatMessageInput @submit="handleMessageInput" />
  </main>
</template>
