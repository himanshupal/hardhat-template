import { ethers } from 'hardhat'

async function main() {
  try {
    const Greeter = await ethers.getContractFactory('MyContract')
    const greeter = await Greeter.deploy('Hey there!')

    const contract = await greeter.deployed()

    console.log('Greeter deployed to:', greeter.address, 'Contract Address:', contract.address)
  } catch (e: any) {
    console.error(e.message)
  }
}

main()
