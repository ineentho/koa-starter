import commonTags from 'common-tags'
import Koa from 'koa'
import koaRoarrLogger from 'koa-roarr-logger'

import { PORT, HOST } from './config'
import log from './log'
import routes from './routes/index'

if (!process.env.ROARR_LOG) {
  // eslint-disable-next-line no-console
  console.warn(commonTags.oneLine`
    The environment variable ROARR_LOG is not set, logging is therefore disabled.
    Please start with "npm run dev" or set ROARR_LOG to enable logging`)
}

process.on('unhandledRejection', error => {
  log.fatal({ error }, 'unhandled promise rejection')
  process.exit(1)
})

process.on('uncaughtException', error => {
  log.fatal({ error }, 'uncaught exception')
  process.exit(1)
})

const errorHandler = () => async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500
    ctx.body = { message: error.message }

    ctx.log.error({ error }, 'error handling request')
  }
}

const app = new Koa()

app
  .use(koaRoarrLogger(log))
  .use(errorHandler())
  .use(routes.routes())
  .use(routes.allowedMethods())

log.info({ port: PORT, host: HOST }, 'server running')
app.listen(PORT, HOST)
