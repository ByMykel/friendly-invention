import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MessageUser from '../MessageUser.vue'

describe('MessageUser', () => {
  it('renders properly', () => {
    const wrapper = mount(MessageUser, {
      props: {
        message: {
          from: 'user',
          type: 'text',
          text: 'Hello Vitest!'
        }
      }
    })

    expect(wrapper.find('div').text()).toContain('Hello Vitest!')
  })
})
