
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Navbar from './Navbar';

export default function Funds() {

    const [mode, setMode] = useState(true)
    const handleTheme = () => {
        setMode(!mode)
    }


    const data = [
        { name: "ThisCoin", symbol: 'THIS', balance: 1500, investedAmt: 910, portfolio: 412.52, gains: 500.03 },
        { name: "ThisCoin", symbol: 'THIS', balance: 1500, investedAmt: 910, portfolio: 412.52, gains: 500.03 },
    ];


    return (
        <div className={`${mode && "dark"}`}>
            <div className='h-screen bg-[#F0F2F5] dark:bg-[#101623] text-white flex flex-col'>
                <Navbar mode={mode} handleTheme={handleTheme} activeTab="FUNDS" />
                <div className='w-screen h-screen flex flex-col items-center pt-20 px-32'>
                    <div className='w-full flex justify-between border-b-[1px] border-[#3A4152]'>
                        <div className='flex'>
                            <div className='px-4 border-b-2 border-[#3067F0]'>
                                <h2 className='text-[#3067F0] font-bold text-sm'>BALANCES</h2>
                            </div>
                            <div className='px-4'>
                                <h2 className='text-[#9EB1BF] font-bold text-sm'>TRANSFER HISTORY</h2>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <button className='bg-[#1E2433] text-[12px] font-bold px-3 py-2 rounded-md border-[1px] border-[#3A4152] text-[#9EB1BF]'>Withdraw INR</button>
                            </div>
                            <div>
                                <button className='bg-[#66C37B] text-[12px] font-bold px-3 py-2 rounded-md'>Deposit INR</button>
                            </div>
                        </div>
                    </div>


                    <div className='flex gap-3 w-full mt-10 text-sm'>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex flex-col gap-2 justify-center'>
                            <h2 className='font-bold text-sm'>Total portfolio value</h2>
                            <h2 className='font-bold text-xl'>$466.65</h2>
                        </div>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex flex-col gap-2 justify-center'>
                            <div className='flex justify-between'>
                                <h2>Crypto Holdings</h2>
                                <h2 className='font-bold'>$407.92</h2>
                            </div>
                            <div className='flex justify-between'>
                                <h2>Invested Value</h2>
                                <h2 className='font-bold'>926.86</h2>
                            </div>
                        </div>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex justify-between items-center'>
                            <h2>
                                All time Gains
                            </h2>
                            <h2 className='font-bold'>205.52</h2>
                        </div>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex justify-between items-center'>
                            <h2>
                                All time Gains
                            </h2>
                            <h2 className='font-bold'>205.52</h2>
                        </div>
                    </div>
                    <div className='mt-10 w-full'>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-[#161D2B] text-[#ABB1BF]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Assets
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Total Balance
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Invested INR
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Current Portfolio
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            All - Time Gains
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((coin, index) => (
                                        <tr className={index % 2 === 0 ? 'bg-[#1E2433]' : 'bg-[#161D2B]'}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{coin.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{coin.balance}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{coin.investedAmt}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{coin.portfolio}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{coin.gains}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <button>Deposit</button>
                                                <button>Withdraw</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}