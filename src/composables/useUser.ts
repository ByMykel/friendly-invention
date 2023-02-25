import { ref } from 'vue'
import { login } from '../services/botService'
import router from '../router'

export function useUser() {
  const user = ref<string>('')
  const password = ref<string>('')

  const handleLogin = async (): Promise<void> => {
    if (!user.value || !password.value) {
      return
    }

    await login(user.value, password.value).then((res) => {
      const token = res.session_id

      sessionStorage.setItem('token', token)

      user.value = ''
      password.value = ''

      router.push({ name: 'chat' })
    })
  }

  const handleLogout = (): void => {
    sessionStorage.removeItem('token')
    router.push({ name: 'login' })
  }

  return {
    user,
    password,
    handleLogin,
    handleLogout
  }
}
