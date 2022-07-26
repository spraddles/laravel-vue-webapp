import { authService } from '@/services'

export const beforeEach = async (to, _from, next) => {

  if ((to.matched.some(route => route.meta.requiredAuth)) && (!authService.isLoggedIn())) {
    return next({ name: 'login' })
  }

  if ((to.matched.some(route => route.name === 'login')) && (authService.isLoggedIn())) {
    return next({ name: 'home' })
  }

  return next()
}
