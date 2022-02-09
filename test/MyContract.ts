import { expect } from 'chai'
import { ethers } from 'hardhat'
import { MyContract } from '../typechain-types'

const contractName = 'Contract Name'

describe('Contract', function () {
  let contract: MyContract

  beforeEach(async function () {
    const factory = await ethers.getContractFactory('MyContract')
    contract = (await factory.deploy(contractName)) as MyContract
  })

  it('Has a name', async function () {
    expect(await contract.getName()).to.equal(contractName)
  })

  it('Can add numbers', async function () {
    expect(await contract.add(25, 75)).to.equal(100)
  })
})
