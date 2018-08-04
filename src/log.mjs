import roarr from 'roarr'
import os from 'os'
import uuidv4 from 'uuid/v4'
import middlewareSerializeError from '@roarr/middleware-serialize-error'
import compose from 'compose-function'

const createSerializeErrorMiddleware = middlewareSerializeError.default
const log = roarr.default

const serializeError = createSerializeErrorMiddleware()

const addContext = message => ({
  ...message,
  context: {
    ...message.context,
    application: 'koa-starter',
    hostname: os.hostname(),
    instanceId: uuidv4(),
  },
})

export default log.child(
  compose(
    addContext,
    serializeError,
  ),
)
