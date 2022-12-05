class FakeContract {
  constructor() {}

  async sharpeningLevel(tokenAddress: string, tokenId: string): Promise<string> {
    if (tokenAddress === '0x0000000000000000000000000000000000000001' && tokenId === '1337') {
      return '1'
    }

    return '0'
  }
}

const contract = new FakeContract()
export default contract
