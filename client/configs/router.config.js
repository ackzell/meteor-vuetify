import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

import routeDefs from '/client/routes.js'

const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
})

RouterFactory.configure(factory => {
  factory.addRoutes(routeDefs)
})

export default routerFactory
