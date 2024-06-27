import logo from '../assets/logo.svg'
import download from '../assets/download.svg'
import theme from '../assets/theme.svg'
import theme_light from '../assets/theme_light.svg'
import help from '../assets/help.svg'
import user from '../assets/user.svg'
import wallet from '../assets/wallet.svg'
import logout from '../assets/logout.svg'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ mode, handleTheme, activeTab }: { mode: boolean, handleTheme: () => void, activeTab: string }) {

    let navigate = useNavigate();

    const { email, signOut } = useAuth();
    
    const [loggedIn, setLoggedIn] = useState(email ? false : true)
    const [userSettings, setUserSettings] = useState(false)

    const handleLogOut = () => {
        signOut();
        navigate('/signin')
    }

    useEffect(() => {
        if (userSettings) {
            setTimeout(() => {
                setUserSettings(false)
            }, 5000);
        }
    }, [userSettings])

    return (
        <div className="bg-[#3067F0] dark:bg-[#2D3446] h-[45px] flex justify-between">
            <div className='flex items-center w-full pl-8 gap-2 cursor-pointer'>
                <div className='h-full w-[20%] flex'>
                    <img src={logo} alt="Logo" className='w-36' />
                </div>
                <div className={`font-bold cursor-pointer hover:bg-gray-800 px-4 ml-4 h-full flex justify-center items-center ${activeTab == "EXCHANGE" ? 'bg-[#1F2531] border-b-[3px] border-[#FAED9B]' : ''}`}
                    onClick={() => navigate('/exchange')}>EXCHANGE</div>
                <div className={`font-bold cursor-pointer hover:bg-gray-800 px-4 h-full flex justify-center items-center ${activeTab == "P2P" ? 'bg-[#1F2531] border-b-[3px] border-[#FAED9B]' : ''}`}>P2P</div>
                {!loggedIn &&
                    <div className={`font-bold cursor-pointer hover:bg-gray-800 px-4 h-full flex justify-center items-center ${activeTab == "FUNDS" ? 'bg-[#1F2531] border-b-[3px] border-[#FAED9B]' : ''}`}
                        onClick={() => navigate('/funds')}>FUNDS</div>
                }
            </div>
            <div className='flex w-full justify-end items-center gap-6'>
                <div className='font-semibold h-full flex items-center cursor-pointer hover:bg-gray-800'>INVITE & EARN</div>
                {!loggedIn &&
                    <div className='font-semibold h-full flex w-10 justify-end'>
                        <div className='hover:bg-gray-800 flex w-10 justify-center cursor-pointer'
                        onClick={() => setUserSettings(true)}>
                            <img src={user} alt="Logo" className='w-5' />
                        </div>
                        {userSettings &&
                            <div className='bg-[#2D3446] flex flex-col z-10 py-2 gap-2 border-t-2 border-[#404a64] absolute top-10 w-48 '>
                                <div className='flex px-2 gap-2 cursor-pointer hover:bg-[#1c2130]'
                                    onClick={() => navigate('/funds')}>
                                    <img src={wallet} alt="Logo" className='w-5' />
                                    <h2>Funds</h2>
                                </div>
                                <div className='flex px-2 gap-2 cursor-pointer hover:bg-[#1c2130]'
                                    onClick={() => handleLogOut()}>
                                    <img src={logout} alt="Logo" className='w-5' />
                                    <h2>Logout</h2>
                                </div>
                            </div>
                        }
                    </div>
                }
                <div className='font-semibold h-full flex w-10 justify-center cursor-pointer hover:bg-gray-800'>
                    <img src={download} alt="Logo" className='w-5' />
                </div>
                <div className='font-semibold h-full flex w-10 justify-center cursor-pointer hover:bg-gray-800' onClick={() => handleTheme()}>
                    {!mode && <img src={theme_light} alt="Logo" className='w-5' />}
                    {mode && <img src={theme} alt="Logo" className='w-5' />}
                </div>
                <div className='font-semibold h-full items-center mr-4 flex w-16 justify-between cursor-pointer hover:bg-gray-800'>
                    <img src={help} alt="Logo" className='w-5' />
                    HELP
                </div>
            </div>
        </div>
    )
}