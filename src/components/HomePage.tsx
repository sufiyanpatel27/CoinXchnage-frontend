import { useEffect, useState } from "react";
import CoininfoDown from "./CoininfoDown";
import CoinInfoUp from "./CoinInfoUp";
import Coinlist from "./Coinlist";
import Navbar from "./Navbar";
import TradeInfo from "./TradeInfo";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { setUserInfo } from "../feature/coin/userSlice";


export default function HomePage() {

    const userInfo = useSelector((state: RootState) => state.userInfo);
    const dispatch = useDispatch<AppDispatch>();


    const base_url = import.meta.env.VITE_BASE_URL || "http://localhost:5000/";

    const [mode, setMode] = useState(true)
    const handleTheme = () => {
        setMode(!mode)
    }

    const { userId, email, token } = useAuth();


    useEffect(() => {
        if (email) {
            axios.get(base_url + 'userinfo/' + userId, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => dispatch(setUserInfo(res.data)))
                .catch((err) => console.log("error here:", err))
        }
    }, [])

    return (
        <div className={`${mode && "dark"}`}>
            <div className='h-screen bg-[#F0F2F5] dark:bg-[#101623] text-white flex flex-col'>
                <Navbar mode={mode} handleTheme={handleTheme} activeTab="EXCHANGE" />
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