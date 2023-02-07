const Sweeper = require('./src/sweeper')

const n = process.env.N
const bip32 = process.env.PRIVATE_KEY1_BIP32
const privkey2 = process.env.PRIVATE_KEY2
const toAddr = process.env.DESTINATION_ADDR
const network = process.env.NETWORK
const derivationPath = process.env.DERIVATION_PATH
const maxBalanceToSweep = process.env.MAX_BALANCE

if (!n || !bip32 || !privkey2 || !toAddr || !network || !derivationPath) {
  console.log('One or more required arguments are missing')
  process.exit(0)
}

const sweep = new Sweeper(network, bip32, privkey2, toAddr, n, derivationPath, {
  maxBalanceToSweep: maxBalanceToSweep
})

Sweep()

async function Sweep () {
  try {
    await sweep.begin()
  } catch (err) {
    console.log(err)
  }
}
