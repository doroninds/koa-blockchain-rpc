import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import ENV from './config/env'
import middlewares from './middlewares'
import RPC from './rpc'
import { logger } from './utils/logger'

const port = ENV.APP_PORT
const app = new Koa()

app.use(bodyParser()).use(middlewares.jsonrpc).use(middlewares.auth).use(RPC)

app.listen(port, () => {
  logger.info(`🚀 Server started on http://localhost:${port}`)
})
