<script setup lang="ts">
import ChatHeader from '@/components/ChatHeader.vue'
import ChatMessageInput from '@/components/ChatMessageInput.vue'
import ChatMessageList from '@/components/ChatMessageList.vue'
import { ref } from 'vue'

interface Message {
  id: number
  text: string
}

const messageList = ref<HTMLElement | null>(null)
const messages = ref<Message[]>([])

const scrollBottom = () => {
  const chatElement = messageList?.value?.messagesRef

  if (!(chatElement instanceof HTMLElement)) return

  // Check if is close to bottom
  const isCloseToBottom =
    chatElement.scrollTop + chatElement.clientHeight >= chatElement.scrollHeight - 100

  // Scroll to bottom if is close to bottom
  if (isCloseToBottom) {
    chatElement.scrollTo({
      top: chatElement.scrollHeight - 10,
      behavior: 'smooth'
    })
  }
}

const addMessage = async (message: string): Promise<void> => {
  const random = Math.floor(Math.random() * 4) + 1

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  for (let j = 0; j < random; j++) {
    messages.value.push({
      id: messages.value.length,
      text: message
    })
    await sleep(100)

    scrollBottom()
  }

  scrollBottom()
}
</script>

<template>
  <main class="flex h-screen items-center flex-col justify-center px-4 space-y-2">
    <ChatHeader />
    <ChatMessageList ref="messageList" :messages="messages" />
    <ChatMessageInput @submit="addMessage" />
  </main>
</template>
