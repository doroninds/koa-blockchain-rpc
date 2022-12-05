import { DefaultContext, ParameterizedContext } from 'koa'

export type ApplicationState = {
  auth: boolean
}

export type ExtensionContext = {}

export type RPCReqestCall = {
  contract: string
  method: string
  args: any[]
}

export type Context = ParameterizedContext<ApplicationState, DefaultContext & ExtensionContext>
