import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function TradeInfo() {

    let navigate = useNavigate();

    const { email } = useAuth();

    const [loggIn, setLoggedIn] = useState(email ? false : true)

    const [activeTab, setActiveTab] = useState('buy');


    const [activeOrder, setaAtiveOrder] = useState('open');

    const [isToggled, setIsToggled] = useState(false);
    const [isToggledcancel, setIsToggledCancel] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
    };
    const toggleCancel = () => {
        setIsToggledCancel(!isToggledcancel);
    };



    return (
        <div className="w-[23%] mr-2 m-1 flex flex-col justify-between">
            <div className="bg-white dark:bg-[#1E2433] mb-1 rounded h-[60%] flex flex-col text-[#9EB1BF]">
                <div className="flex justify-between">
                    <button
                        className={`w-full focus:outline-none font-bold text-[11px] px-4 py-2 ${activeOrder === 'open' ? 'bg-[#1E2433] text-white border-t-4 border-[#66C37B] rounded-s-[4px]' : 'bg-[#161D2B] rounded-s-[4px]'}`}
                        onClick={() => setaAtiveOrder('open')}
                    >
                        OPEN ORDERS
                    </button>
                    <button
                        className={`w-full focus:outline-none font-bold text-[11px] px-4 py-2 ${activeOrder === 'completed' ? 'bg-[#1E2433] text-white border-t-4 border-[#66C37B] rounded-e-[4px]' : 'bg-[#161D2B] rounded-e-[4px]'}`}
                        onClick={() => setaAtiveOrder('completed')}
                    >
                        COMPLETED ORDERS
                    </button>
                </div>
                {activeOrder == "open" &&
                    <div className="flex items-center px-2 border-b-[1px] border-[#141822] pb-1">
                        <div
                            className={`relative inline-block w-6 h-3 transition duration-200 ease-in ${isToggled ? 'bg-blue-500' : 'bg-gray-300'
                                } rounded-full cursor-pointer`}
                            onClick={toggle}
                        >
                            <span
                                className={`absolute left-0 top-0 bottom-0 w-3 h-3 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${isToggled ? 'translate-x-3' : ''
                                    }`}
                            />
                        </div>
                        <h2 className="text-[12px] pl-2">BTC-INR Orders</h2>
                    </div>
                }
                {activeOrder == "completed" &&
                    <div className="flex items-center justify-between px-2  border-b-[1px] border-[#141822] pb-1">
                        <div className="flex  items-center">
                            <div
                                className={`relative inline-block w-6 h-3 transition duration-200 ease-in ${isToggled ? 'bg-blue-500' : 'bg-gray-300'
                                    } rounded-full cursor-pointer`}
                                onClick={toggle}
                            >
                                <span
                                    className={`absolute left-0 top-0 bottom-0 w-3 h-3 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${isToggled ? 'translate-x-3' : ''
                                        }`}
                                />
                            </div>
                            <h2 className="text-[12px] pl-2">BTC-INR Orders</h2>
                        </div>
                        <div className="flex">
                            <div
                                className={`relative inline-block w-6 h-3 transition duration-200 ease-in ${isToggledcancel ? 'bg-blue-500' : 'bg-gray-300'
                                    } rounded-full cursor-pointer`}
                                onClick={toggleCancel}
                            >
                                <span
                                    className={`absolute left-0 top-0 bottom-0 w-3 h-3 bg-white rounded-full shadow-md transform transition duration-200 ease-in-out ${isToggledcancel ? 'translate-x-3' : ''
                                        }`}
                                />
                            </div>
                            <h2 className="text-[12px] pl-2">Hide Cancelled Orders</h2>
                        </div>
                    </div>
                }
                <div className="flex justify-between items-center h-5 pl-2 border-b-[1px] border-[#2C3240] ">
                    <div className="w-full text-[10px] cursor-pointer text-[#9EB1BF] flex">PAIR</div>
                    <div className="w-full text-[10px] cursor-pointer text-[#9EB1BF] flex">AMOUNT</div>
                    <div className="w-full text-[10px] cursor-pointer text-[#9EB1BF] flex">PRICE</div>
                    <div className="w-full text-[10px] cursor-pointer text-[#9EB1BF] flex">TOTAL</div>
                </div>
            </div>


            <div className="bg-white dark:bg-[#141A28] mt-1 rounded h-[40%] flex flex-col text-[#9EB1BF]">
                <div className="flex justify-between border-b-2 border-[#2D3446]">
                    <button
                        className={`w-full focus:outline-none font-bold text-[11px] px-4 py-2 ${activeTab === 'buy' ? 'bg-[#1E2433] text-white border-t-4 border-[#66C37B] rounded-s-[4px]' : 'bg-[#161D2B] rounded-s-[4px]'}`}
                        onClick={() => setActiveTab('buy')}
                    >
                        BUY
                    </button>
                    <button
                        className={`w-full focus:outline-none font-bold text-[11px] px-4 py-2 ${activeTab === 'sell' ? 'bg-[#1E2433] text-white border-t-4 border-[#F6685E] rounded-e-[4px]' : 'bg-[#161D2B] rounded-e-[4px]'}`}
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