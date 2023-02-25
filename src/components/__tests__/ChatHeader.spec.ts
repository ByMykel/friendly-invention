import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ChatHeader from '../ChatHeader.vue'

describe('ChatHeader', () => {
  it('renders properly', () => {
    const imageUrl = 'https://www.verbio.com/wp-content/themes/verbio-theme/dist/images/logo.svg'
    const wrapper = mount(ChatHeader)

    expect(wrapper.find('button').text()).toContain('Log out')

    expect(wrapper.find('img').attributes('src')).toBeTruthy()
    expect(wrapper.find('img').attributes('alt')).toBeTruthy()

    expect(wrapper.find('img').attributes('src')).toBe(imageUrl)
    expect(wrapper.find('img').attributes('alt')).toBe('Verbio Logo')
  })
})
