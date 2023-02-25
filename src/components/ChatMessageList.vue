<script setup lang="ts">
import { ref } from 'vue'

const messagesRef = ref<HTMLElement | null>(null)

defineProps<{
  messages: object[]
}>()

// expose the ref to the parent component so we can scroll to bottom
defineExpose({
  messagesRef
})
</script>

<template>
  <div class="w-full max-w-3xl bg-gray-300 overflow-y-hidden h-full rounded-md">
    <div
      ref="messagesRef"
      class="overflow-y-scroll h-full space-y-2 bg-[url('/patterns/graph-paper.svg')] flex flex-col items-end p-2"
    >
      <TransitionGroup name="list">
        <div
          v-for="message in messages"
          :key="message.id"
          class="bg-verbio-main p-2 w-52 rounded-t-md rounded-bl-md text-white text-sm"
        >
          {{ message.text }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
