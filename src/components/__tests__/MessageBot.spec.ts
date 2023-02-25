import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MessageBot from '../MessageBot.vue'

describe('MessageUser', () => {
  it('renders properly', () => {
    const wrapper = mount(MessageBot, {
      props: {
        message: {
          from: 'bot',
          type: 'text',
          text: 'Hello Vitest!'
        }
      }
    })

    expect(wrapper.find('div').text()).toContain('Hello Vitest!')
  })

  it('renders properly', () => {
    const wrapper = mount(MessageBot, {
      props: {
        message: {
          from: 'bot',
          type: 'image',
          url: 'https://i.pinimg.com/originals/4e/6f/9a/4e6f9a7e295ce34133d55a3c63394304.jpg'
        }
      }
    })

    expect(wrapper.find('img').attributes('src')).toBeTruthy()
    expect(wrapper.find('img').attributes('alt')).toBeTruthy()
  })
})
