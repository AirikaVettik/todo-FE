import App from './App'
import LandingPage from './components/LandingPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/todo',
    name: 'todo',
    component: App
  },
]
export default routes