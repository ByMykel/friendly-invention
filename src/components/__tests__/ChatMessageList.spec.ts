import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ChatMessageList from '../ChatMessageList.vue'

describe('ChatMessageList', () => {
  it('renders properly', () => {
    const wrapper = mount(ChatMessageList, {
      props: {
        messages: [
          {
            from: 'bot',
            type: 'text',
            text: 'Hello'
          },
          {
            from: 'user',
            type: 'text',
            text: 'Hi'
          }
        ]
      }
    })

    expect(wrapper.html()).toContain('Hello')
    expect(wrapper.html()).toContain('Hi')
  })
})
