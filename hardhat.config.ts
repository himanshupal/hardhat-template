import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { HardhatUserConfig, task } from 'hardhat/config'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task('accounts', 'Prints the list of accounts', async (taskArgs, { ethers }) => {
  const accounts = await ethers.getSigners()

  accounts.forEach(({ address }) => {
    console.log(address)
  })
})

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
      accounts: {
        mnemonic: 'junk junk junk junk junk junk junk junk junk junk junk junk',
        count: 10
      }
    }
  }
}

export default config
