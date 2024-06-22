
import star from '../assets/star.svg'
import maximize from '../assets/maximize.svg'
import formula from '../assets/formula.svg'

export default function CoinInfoUp() {
    return (
        <div className="bg-white dark:bg-[#1E2433] h-[60%] mb-1 rounded
            flex flex-col">
            <div className="flex justify-between p-1 pl-4 h-8 border-b-2 border-[#2D3446] cursor-pointer">
                <div className="flex">
                    <div className="flex">
                        <div className="font-bold text-sm">THC/INR</div>
                        <div className="text-sm text-[#9EB1BF] pl-1">Thiscoin</div>
                    </div>
                </div>
                <div className="flex pr-1">
                    <div className="flex pr-4">
                        <div className="text-sm text-[#9EB1BF] pr-2">LAST PRICE</div>
                        <div className="font-bold text-sm">$4500.00</div>
                    </div>
                    <div className='flex'>
                        <img src={star} alt="Logo" className='w-[15px]' />
                    </div>
                </div>
            </div>
            <div className="flex justify-between p-1 pl-4 h-8 border-b-2 border-[#2D3446] ">
                <div className="flex text-[#9EB1BF] text-[11px] gap-2 justify-center items-center">
                    <div className='flex justify-center items-center cursor-pointer text-white border-b-2 border-[#EAC808] h-8'>1M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>5M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>15M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>30M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>1H</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>2M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>4M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>6M</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>12H</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>1D</div>
                    <div className='flex justify-center items-center cursor-pointer hover:text-white hover:border-b-2 hover:border-[#EAC808] h-8'>1W</div>
                </div>
                <div className="flex pr-1 justify-center items-center">
                    <div className="flex pr-4 gap-2">
                        <div className="text-[11px] text-[#9EB1BF]">VOLUME</div>
                        <div className="font-semibold text-[11px]">1.94749</div>
                        <div className="text-[11px] text-[#9EB1BF]">HIGH</div>
                        <div className="font-semibold text-[11px]">5,885,140</div>
                        <div className="text-[11px] text-[#9EB1BF]">LOW</div>
                        <div className="font-semibold text-[11px]">5,746,101</div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='border-l-2 cursor-pointer border-[#2D3446] flex justify-center items-center w-6'>
                            <img src={formula} alt="Logo" className='w-[15px]'/>
                        </div>
                        <div className='border-l-2 cursor-pointer border-[#2D3446] flex justify-center items-center w-6'>
                            <img src={maximize} alt="Logo" className='w-[15px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div>chart</div>
        </div>
    )
}