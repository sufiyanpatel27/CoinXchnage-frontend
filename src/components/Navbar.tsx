import logo from '../assets/logo.svg'
import download from '../assets/download.svg'
import theme from '../assets/theme.svg'
import theme_light from '../assets/theme_light.svg'
import help from '../assets/help.svg'

export default function Navbar({ mode, handleTheme }: { mode: boolean, handleTheme: () => void }) {
    return (
        <div className="bg-[#3067F0] dark:bg-[#2D3446] h-[45px] flex justify-between">
            <div className='flex items-center gap-4'>
                <div className='ml-8 mr-4'>
                    <img src={logo} alt="Logo" className='' />
                </div>
                <div className='font-medium'>EXCHANGE</div>
                <div className='font-medium'>P2P</div>
            </div>
            <div className='flex items-center gap-8'>
                <div className='font-medium'>INVITE & EARN</div>
                <div className='font-medium'>
                    <img src={download} alt="Logo" className='w-5' />
                </div>
                <div className='font-medium cursor-pointer' onClick={() => handleTheme()}>
                    {!mode && <img src={theme_light} alt="Logo" className='w-5' />}
                    {mode && <img src={theme} alt="Logo" className='w-5' />}
                </div>
                <div className='font-medium mr-4 flex w-16 justify-between'>
                    <img src={help} alt="Logo" className='w-5' />
                    HELP
                </div>
            </div>
        </div>
    )
}