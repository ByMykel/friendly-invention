import { LoremIpsum } from 'lorem-ipsum'

// Fake bot messages
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

// Fake delay to simulate a real API call
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Simulate 401 error
const unauthorizedError = new Error('Unauthorized')
// @ts-ignore
unauthorizedError.response = {
  status: 401
}

export const login = async (user: string, password: string) => {
  await sleep(100)

  if (user === 'admin' && password === 'admin') {
    return {
      session_id: 'token_123'
    }
  }

  throw unauthorizedError
}

export const getWelcomeMessage = async () => {
  await sleep(200)

  if (!sessionStorage.getItem('token')) {
    throw unauthorizedError
  }

  return [
    { type: 'text', text: 'Welcome to the bot!' },
    {
      type: 'image',
      url: 'https://i.pinimg.com/originals/4e/6f/9a/4e6f9a7e295ce34133d55a3c63394304.jpg'
    }
  ]
}

export const sendMessage = async (userMessage: string) => {
  await sleep(400)

  if (!sessionStorage.getItem('token')) {
    throw unauthorizedError
  }

  if (userMessage === 'image') {
    return [{ type: 'image', url: 'https://picsum.photos/200' }]
  }

  const randomNumberOfMessages = Math.floor(Math.random() * 5) + 1

  return Array.from({ length: randomNumberOfMessages }, () => {
    return {
      type: 'text',
      text: lorem.generateSentences(1)
    }
  })
}
