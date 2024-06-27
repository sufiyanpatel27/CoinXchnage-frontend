import { useState } from "react";
import CoininfoDown from "./CoininfoDown";
import CoinInfoUp from "./CoinInfoUp";
import Coinlist from "./Coinlist";
import Navbar from "./Navbar";
import TradeInfo from "./TradeInfo";


export default function HomePage() {

    const [mode, setMode] = useState(true)
    const handleTheme = () => {
        setMode(!mode)
    }

    return (
        <div className={`${mode && "dark"}`}>
            <div className='h-screen bg-[#F0F2F5] dark:bg-[#101623] text-white flex flex-col'>
                <Navbar mode={mode} handleTheme={handleTheme} activeTab="EXCHANGE"/>
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
    )
}