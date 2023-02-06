import { useRouter } from 'next/router'

export default function useNavigation() {
  const router = useRouter()

  const navigateTo = path => {
    router.push(path)
  }

  const navigateToHome = () => {
    navigateTo('/')
  }

  return {
    navigateTo,
    navigateToHome,
  }
}
