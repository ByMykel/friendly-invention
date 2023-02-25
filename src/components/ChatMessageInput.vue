<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue'

const message = ref<string>('')
const inputRef = ref<HTMLInputElement>()

onMounted(() => {
  inputRef.value?.focus()
})

const emit = defineEmits<{
  (event: 'submit', message: string): void
}>()

const sendMessage = (): void => {
  if (message.value.trim() === '') return

  emit('submit', message.value)
  message.value = ''
}
</script>

<template>
  <div class="w-full max-w-3xl h-20">
    <div class="relative rounded-md h-full py-2">
      <input
        ref="inputRef"
        v-model="message"
        type="text"
        class="block w-full rounded-md border-gray-400 pl-3 pr-12 border-2 shadow-sm focus:border-verbio-main focus:ring-verbio-main sm:text-sm h-full focus:outline-none"
        placeholder="Type your message here"
        @keyup.enter="sendMessage()"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-2">
        <Transition name="send-button">
          <button
            v-if="message.length > 0"
            type="button"
            class="bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded-full"
            @click="sendMessage()"
          >
            <svg
              class="w-6 h-6 text-verbio-main"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              ></path>
            </svg>
          </button>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.send-button-enter-active,
.send-button-leave-active {
  transition: all 0.2s ease;
}

.send-button-enter-from,
.send-button-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
