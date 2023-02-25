<script setup lang="ts">
import { useUser } from '@/composables/useUser'
const { handleLogout } = useUser()
</script>

<template>
  <header class="h-14 w-full max-w-3xl">
    <div class="flex items-center justify-between h-full">
      <div class="flex items-center space-x-2">
        <img
          class="mx-auto h-8 w-auto"
          src="https://www.verbio.com/wp-content/themes/verbio-theme/dist/images/logo.svg"
          alt="Verbio Logo"
          loading="lazy"
          decode="async"
        />
      </div>
      <div class="flex items-center space-x-2">
        <button
          type="button"
          class="w-full rounded-md bg-verbio-main py-2 px-4 text-sm font-medium text-white hover:bg-verbio-mainDark focus:bg-verbio-mainDark focus:outline-none"
          @click="handleLogout"
          @keyup.enter="handleLogout"
        >
          Log out
        </button>
      </div>
    </div>
  </header>
</template>
