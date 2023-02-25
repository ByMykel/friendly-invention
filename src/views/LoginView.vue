<script setup lang="ts">
import { ref } from 'vue'
import { useUser } from '@/composables/useUser'

const { user, password, handleLogin } = useUser()
const error = ref<string | null>(null)

const onSubmit = (e: Event) => {
  error.value = null

  e.preventDefault()
  handleLogin().catch((err: Error) => {
    error.value = err.message
  })
}
</script>

<template>
  <div class="flex h-screen items-center justify-center py-12 px-4">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://www.verbio.com/wp-content/themes/verbio-theme/dist/images/logo.svg"
          alt="Verbio Logo"
          loading="lazy"
          decode="async"
        />
      </div>
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div class="space-y-2">
          <div>
            <label for="user" class="text-sm text-gray-500">User</label>
            <input
              v-model="user"
              class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-verbio-main focus:outline-none text-sm"
              id="user"
              name="user"
              type="text"
              placeholder="Type your user name here"
              required
            />
          </div>
          <div>
            <label for="password" class="text-sm text-gray-500">Password</label>
            <input
              v-model="password"
              class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-verbio-main focus:outline-none text-sm"
              id="password"
              name="password"
              type="password"
              placeholder="Type your password here"
              required
            />
          </div>
        </div>

        <div v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </div>

        <div>
          <button
            type="submit"
            class="w-full rounded-md bg-verbio-main py-2 px-4 text-sm font-medium text-white hover:bg-verbio-mainDark focus:bg-verbio-mainDark focus:outline-none"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
