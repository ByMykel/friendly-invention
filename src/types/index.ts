interface MessageText {
  from: 'bot' | 'user'
  type: 'text'
  text: string
}

interface MessageImage {
  from: 'bot' | 'user'
  type: 'image'
  url: string
}

export type Message = MessageText | MessageImage

export interface scrollToBottom {
  (): void
}
