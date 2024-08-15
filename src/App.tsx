import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { WagmiProvider } from 'wagmi'
import './App.css'
import reactLogo from './assets/react.svg'
import ConnectWallet from './components/ConnectWallet'
import { wagmiConfig } from './configs/wagmi'



function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient()

 


  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div>
          {/* <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
        </div>
        
        <div className="card">
          
          {/* <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p> */}
        </div>
        
        <ConnectWallet/>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
