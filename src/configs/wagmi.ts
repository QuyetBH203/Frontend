import { createConfig, http } from 'wagmi'
import { base, hardhat, localhost, mainnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'


export const wagmiConfig = createConfig({
  chains: [mainnet, base, localhost, hardhat],
  connectors: [
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(), 
    [localhost.id]: http(),
    [hardhat.id]: http("https://bsc-testnet-rpc.publicnode.com/"),
  },
})