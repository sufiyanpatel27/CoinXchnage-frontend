import { useState } from 'react'
import Navbar from './components/Navbar'
import Coinlist from './components/Coinlist'
import CoinInfoUp from './components/CoinInfoUp'

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
            <div className="bg-white dark:bg-[#1E2433] h-[40%] mt-1 rounded">middle col lower</div>
          </div>
          <div className="bg-white dark:bg-[#1E2433] w-[23%] mr-2 m-1 rounded">right col</div>
        </div>
      </div>
    </div>
  );
}