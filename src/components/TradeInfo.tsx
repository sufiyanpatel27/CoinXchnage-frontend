import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function TradeInfo() {

    let navigate = useNavigate();

    const { email } = useAuth();

    const [loggIn, setLoggedIn] = useState(email ? false : true)

    const [activeTab, setActiveTab] = useState('buy');



    return (
        <div className="w-[23%] mr-2 m-1 flex flex-col justify-between">
            <div className="bg-white dark:bg-[#1E2433] mb-1 rounded h-[60%] flex justify-center items-center text-[#9EB1BF]">upcoming in phase III</div>
            <div className="bg-white dark:bg-[#141A28] mt-1 rounded h-[40%] flex flex-col text-[#9EB1BF]">
                <div className="flex justify-between border-b-2 border-[#2D3446]">
                    <button
                        className={`w-full focus:outline-none font-bold text-[12px] px-4 py-2 ${activeTab === 'buy' ? 'bg-[#1E2433] text-white border-t-4 border-[#66C37B]' : 'bg-[#161D2B]'}`}
                        onClick={() => setActiveTab('buy')}
                    >
                        BUY
                    </button>
                    <button
                        className={`w-full focus:outline-none font-bold text-[12px] px-4 py-2 ${activeTab === 'sell' ? 'bg-[#1E2433] text-white border-t-4 border-[#F6685E]' : 'bg-[#161D2B]'}`}
                        onClick={() => setActiveTab('sell')}
                    >
                        SELL
                    </button>
                </div>

                {loggIn &&
                    <div className="flex flex-col items-center mt-20 gap-2">
                        <button onClick={() => navigate('/signin')} className="text-[12px] font-bold w-[60%] bg-[#66C37B] px-6 py-3 rounded-md text-white">LOGIN</button>
                        <span className="text-white text-[12px]">OR</span>
                        <button onClick={() => navigate('/signup')} className="text-[12px] font-bold w-[60%] bg-transparent border border-[#66C37B] text-white px-6 py-3 rounded-md">CREATE AN ACCOUNT</button>
                    </div>
                }
                {!loggIn &&
                    <div className="flex flex-col items-center mt-20 gap-2">
                        logged In
                    </div>
                }
            </div>

        </div>
    )
}