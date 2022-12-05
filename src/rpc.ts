import { Context } from 'koa'
import { RPCReqestCall } from './@types'
import FakeContact from './mocks/contract'

function getRrcData(payload: any): RPCReqestCall {
  return {
    contract: payload.contract,
    method: payload.method,
    args: payload.args,
  }
}

const RPC = async (ctx: Context) => {
  let body: any = null
  const data = getRrcData(ctx.request.body)

  if (data.contract === 'FakeContract') {
    if (data.method === 'sharpeningLevel') {
      const [tokenAddress, tokenId] = data.args
      const res = await FakeContact.sharpeningLevel(tokenAddress, tokenId)
      body = res
    }
  }

  ctx.body = body
}

export default RPC
