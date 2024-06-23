import { useState } from 'react'
import Navbar from './components/Navbar'
import Coinlist from './components/Coinlist'
import CoinInfoUp from './components/CoinInfoUp'
import CoininfoDown from './components/CoininfoDown'
import TradeInfo from './components/TradeInfo'

export default function App() {

  const [mode, setMode] = useState(true)
  const handleTheme = () => {
    setMode(!mode)
  }

  return (
    <div className={`${mode && "dark"}`}>
      <div className='h-screen bg-[#F0F2F5] dark:bg-[#101623] text-white flex flex-col'>
        <Navbar mode={mode} handleTheme={handleTheme} />
        <div className="flex justify-between h-screen mt-1 text-black dark:text-white">
          <Coinlist />
          <div className="w-[61%] flex flex-col justify-between m-1">
            <CoinInfoUp />
            <CoininfoDown />
          </div>
          <TradeInfo />
        </div>
      </div>
    </div>
  );
}