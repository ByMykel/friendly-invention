import { ref } from 'vue'
import { getWelcomeMessage, sendMessage } from '../services/botService'
import router from '@/router'
import type { Message, scrollToBottom } from '../types/index'

// Delay messages to add simple animation
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function useBot() {
  const messages = ref<Message[]>([])
  const isTyping = ref(false)

  const addMessage = async (message: string, callback: scrollToBottom): Promise<void> => {
    messages.value.push({
      from: 'user',
      type: 'text',
      text: message
    })

    callback()

    await getBotResponse(message, callback)
  }

  const getBotWelcomeMessage = async (callback: scrollToBottom): Promise<void> => {
    isTyping.value = true

    await getWelcomeMessage()
      .then(async (res) => {
        isTyping.value = false
        
        for (const message of res) {
          messages.value.push({
            from: 'bot',
            ...message
          } as Message)

          callback()

          await sleep(100)
        }
      })
      .catch((err) => {
        isTyping.value = false

        // log out user if unauthorized
        if (err.response.status === 401) {
          sessionStorage.removeItem('token')
          router.push({ name: 'login' })
        }
      })
  }

  const getBotResponse = async (message: string, callback: scrollToBottom): Promise<void> => {
    isTyping.value = true

    await sendMessage(message)
      .then(async (res) => {
        isTyping.value = false

        for (const message of res) {
          messages.value.push({
            from: 'bot',
            ...message
          } as Message)

          callback()

          await sleep(100)
        }
      })
      .catch((err) => {
        isTyping.value = false

        // log out user if unauthorized
        if (err.response.status === 401) {
          sessionStorage.removeItem('token')
          router.push({ name: 'login' })
        }
      })
  }

  return {
    messages,
    isTyping,
    addMessage,
    getBotWelcomeMessage
  }
}
