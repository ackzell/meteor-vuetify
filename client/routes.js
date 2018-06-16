import HomeComponent from '/imports/ui/Home.vue'
import NotFoundComponent from '/imports/ui/NotFound.vue'

const routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]
export default routes
