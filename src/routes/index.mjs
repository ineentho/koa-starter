import Router from 'koa-router'

import example from './example'

const routes = new Router()

routes.get('/example', example)

export default routes
