<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBot } from '@/composables/useBot'
import ChatHeader from '@/components/ChatHeader.vue'
import ChatMessageInput from '@/components/ChatMessageInput.vue'
import ChatMessageList from '@/components/ChatMessageList.vue'

const { messages, isTyping, addMessage, getBotWelcomeMessage } = useBot()
const messageList = ref<typeof ChatMessageList>()

// Scroll to bottom of the chat when a new message is added
const scrollBottom = () => {
  const chatElement = messageList?.value?.messagesRef

  if (!(chatElement instanceof HTMLElement)) return

  chatElement.scrollTo({ top: chatElement.scrollHeight, behavior: 'smooth' })
}

// Handle message input from the user and scroll to bottom
const handleMessageInput = async (text: string) => {
  await addMessage(text)
}

onMounted(async () => {
  await getBotWelcomeMessage()

  // Observe the message list for new messages and scroll to bottom
  const callback = function (mutationsList: MutationRecord[]) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        scrollBottom()
      }
    }
  }

  const scrollingElement = messageList?.value?.messagesRef
  const observer = new MutationObserver(callback)
  observer.observe(scrollingElement, { childList: true })
})
</script>

<template>
  <main class="flex h-screen items-center flex-col justify-center px-4 space-y-2">
    <ChatHeader />
    <ChatMessageList ref="messageList" :messages="messages" :is-typing="isTyping" />
    <ChatMessageInput @submit="handleMessageInput" />
  </main>
</template>
