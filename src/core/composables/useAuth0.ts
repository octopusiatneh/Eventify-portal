import { useAuth0 } from '@auth0/auth0-vue'

export const useAuth = () => {
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0()

  return {
    login() {
      return loginWithRedirect({
        appState: {
          target: '',
        },
      })
    },
    isAuthenticated,
    user,
    isLoading,
  }
}
