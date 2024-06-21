import logo from '../assets/logo.svg'
import download from '../assets/download.svg'
import theme from '../assets/theme.svg'
import theme_light from '../assets/theme_light.svg'
import help from '../assets/help.svg'

export default function Navbar({ mode, handleTheme }: { mode: boolean, handleTheme: () => void }) {
    return (
        <div className="bg-[#3067F0] dark:bg-[#2D3446] h-[45px] flex justify-between">
            <div className='flex items-center gap-4'>
                <div className='ml-8 mr-4 w-36'>
                    <img src={logo} alt="Logo" className='' />
                </div>
                <div className='font-bold h-full w-[110px] bg-[#1F2531] flex justify-center items-center border-b-[3px] border-[#FAED9B]'>EXCHANGE</div>
                <div className='font-bold'>P2P</div>
            </div>
            <div className='flex items-center gap-8'>
                <div className='font-semibold'>INVITE & EARN</div>
                <div className='font-semibold'>
                    <img src={download} alt="Logo" className='w-5' />
                </div>
                <div className='font-semibold cursor-pointer' onClick={() => handleTheme()}>
                    {!mode && <img src={theme_light} alt="Logo" className='w-5' />}
                    {mode && <img src={theme} alt="Logo" className='w-5' />}
                </div>
                <div className='font-semibold mr-4 flex w-16 justify-between'>
                    <img src={help} alt="Logo" className='w-5' />
                    HELP
                </div>
            </div>
        </div>
    )
}