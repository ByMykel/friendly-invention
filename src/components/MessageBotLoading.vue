<template>
  <div class="animate-pulse absolute bottom-2 w-full flex justify-center">
    <div
      class="message-bot bg-verbio-secondaryDark/70 w-auto p-2 py-0.5 rounded-full text-white text-sm break-all flex items-center gap-1"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-robot"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"
          ></path>
          <path d="M10 16h4"></path>
          <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
          <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
          <path d="M9 7l-1 -4"></path>
          <path d="M15 7l1 -4"></path>
        </svg>
      </span>
      <p>bot is typing...</p>
    </div>
  </div>
</template>
