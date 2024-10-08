import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function Funds() {
    const userInfo:any = useSelector((state: RootState) => state.userInfo);
    const allCoins = useSelector((state: RootState) => state.coin.allCoins);

    const [mode, setMode] = useState(true);
    const handleTheme = () => {
        setMode(!mode);
    };

    const [cryptoHoldings, setCryptoHoldings] = useState(0);
    const [investedValue, setInvestedValue] = useState(0);
    const [totalPortfolio, setTotalPortfolio] = useState(0);
    const [allTimeGains, setAllTimeGains] = useState(0);
    const [trade, setTrade] = useState("");

    useEffect(() => {
        document.title = "CoinXchange";
        let tempCryptoHoldings = 0;
        let tempInvestedValue = 0;
        let tempTotalPortfolio = 0;

        userInfo.userInfo.holdings?.forEach((coin: any) => {
            const coinInfo = allCoins.find((obj) => obj.symbol === coin.symbol);
            const coinPrice = coinInfo.data[coinInfo.data.length - 1].close;
            const currentPortfolio = coin.totalBalance * coinPrice;

            tempCryptoHoldings += currentPortfolio;
            tempInvestedValue += coin.invested;
            tempTotalPortfolio += currentPortfolio;
        });

        const difference = Math.abs(tempCryptoHoldings - tempInvestedValue);
        // const average = (tempInvestedValue + tempCryptoHoldings) / 2;
        const percentageDiff = (difference / tempInvestedValue) * 100;
        const trade = tempInvestedValue < tempCryptoHoldings ? "+" : "-";
        setTrade(trade);

        setCryptoHoldings(tempCryptoHoldings);
        setInvestedValue(tempInvestedValue);
        setTotalPortfolio(tempTotalPortfolio);
        setAllTimeGains(percentageDiff);
    }, [userInfo, allCoins]);

    return (
        <div className={`${mode && "dark"}`}>
            <div className='min-h-screen bg-[#F0F2F5] dark:bg-[#101623] text-white flex flex-col'>
                <Navbar mode={mode} handleTheme={handleTheme} activeTab="FUNDS" />
                <h2 className='absolute mt-12 mx-4 lg:mt-20 lg:mx-24 text-xl text-black dark:text-white font-semibold'>Hi {userInfo.userInfo.name}</h2>
                <div className='w-full h-full text-black dark:text-white flex flex-col items-center pt-20 px-4 sm:px-6 lg:px-24'>
                    <div className='w-full flex justify-between border-b-[1px] border-[#3A4152] pb-4'>
                        <div className='flex'>
                            <div className='px-2 sm:px-4 border-b-2 border-[#3067F0]'>
                                <h2 className='text-[#3067F0] font-bold text-sm'>BALANCES</h2>
                            </div>
                            <div className='px-2 sm:px-4'>
                                <h2 className='text-[#9EB1BF] font-bold text-sm'>TRANSFER HISTORY</h2>
                            </div>
                        </div>
                        <div className='flex gap-2 sm:gap-4'>
                            <div>
                                <button className='dark:bg-[#1E2433] text-[12px] font-bold px-2 py-2 sm:px-3 sm:py-2 rounded-md border-[1px] border-[#3A4152] dark:text-[#9EB1BF]'>Withdraw INR</button>
                            </div>
                            <div>
                                <button className='bg-[#66C37B] text-[12px] font-bold px-2 py-2 sm:px-3 sm:py-2 rounded-md'>Deposit INR</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-center gap-3 w-full mt-10 text-sm'>
                        <div className='w-full sm:w-1/2 lg:w-[24%] rounded-md bg-secondary dark:bg-secondary-dark px-4 py-4 flex flex-col gap-2 justify-center'>
                            <h2 className='font-bold text-sm'>Total portfolio value</h2>
                            <h2 className='font-bold text-xl'>₹{totalPortfolio.toFixed(2)}</h2>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-[24%] rounded-md bg-secondary dark:bg-secondary-dark px-4 py-4 flex flex-col gap-2 justify-center'>
                            <div className='flex justify-between'>
                                <h2 className='dark:text-[#cdd2df]'>Crypto Holdings</h2>
                                <h2 className='font-bold'>₹{cryptoHoldings.toFixed(2)}</h2>
                            </div>
                            <div className='flex justify-between'>
                                <h2 className='dark:text-[#cdd2df]'>Invested Value</h2>
                                <h2 className='font-bold'>₹{investedValue.toFixed(2)}</h2>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-[24%] rounded-md bg-secondary dark:bg-secondary-dark px-4 py-4 flex justify-between items-center'>
                            <div className='dark:text-[#cdd2df] flex'>
                                All time Gains
                                <h2 className={`font-bold text-[12px] ml-2 px-1 ${trade === '+' ? 'text-[#66C37B]' : 'text-[#F6685E] bg-[#f6685e28]'}`}>{trade}{allTimeGains.toFixed(2)}%</h2>
                            </div>
                            <h2 className={`font-bold ${trade === '+' ? 'text-[#66C37B]' : 'text-[#F6685E]'}`}>₹{(cryptoHoldings - investedValue).toFixed(2)}</h2>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-[24%] rounded-md bg-secondary dark:bg-secondary-dark px-4 py-4 flex justify-between items-center'>
                            <h2 className='dark:text-[#cdd2df]'>INR Balance</h2>
                            <h2 className='font-bold'>₹{userInfo.userInfo.balance}</h2>
                        </div>
                    </div>

                    <div className='mt-10 w-full'>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="dark:bg-[#161D2B] dark:text-[#ABB1BF]">
                                    <tr>
                                        <th scope="col" className="px-2 sm:px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Assets
                                        </th>
                                        <th scope="col" className="px-2 sm:px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Total Balance
                                        </th>
                                        <th scope="col" className="px-2 sm:px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            invested inr
                                        </th>
                                        <th scope="col" className="px-2 sm:px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Current Portfolio
                                        </th>
                                        <th scope="col" className="px-2 sm:px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            All - Time Gains
                                        </th>
                                        <th scope="col" className="px-2 sm:px-6 py-3 text-left text-[10px] font-medium uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userInfo.userInfo.name && userInfo.userInfo.holdings.map((coin: any, index: number) => {

                                        const coinInfo = allCoins.find((obj) => obj.symbol === coin.symbol);
                                        const coinPrice = coinInfo.data[coinInfo.data.length - 1].close;
                                        const currentPortfolio = coin.totalBalance * coinPrice;
                                        const difference = Math.abs(currentPortfolio - coin.invested);
                                        // const average = (coin.invested + currentPortfolio) / 2;
                                        const percentageDiff = (difference / coin.invested) * 100;
                                        const trade = coin.invested < currentPortfolio ? "profit" : "loss";
                                        const allTimeGains = percentageDiff.toFixed(2);

                                        return (
                                            <tr key={index} className={`${index % 2 === 0 ? 'dark:bg-[#1E2433]' : 'dark:bg-[#161D2B]'} hover:bg-[#1E2433] hover:border-y border-[#6f717560]`}>
                                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                                                    <h2 className='font-bold'>{coin.name}</h2>
                                                    <h2 className='font-thin pt-1 text-sm text-[#ABB1BF]'>{coin.symbol}</h2>
                                                </td>
                                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap">{coin.totalBalance.toFixed(2)} {coin.symbol}</td>
                                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap">₹{coin.invested}</td>
                                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap">₹{currentPortfolio.toFixed(2)}</td>
                                                <td className={`px-2 sm:px-6 py-4 whitespace-nowrap ${trade === 'profit' ? 'text-[#66C37B]' : 'text-[#F6685E]'}`}>
                                                    <h2>{(currentPortfolio - coin.invested).toFixed(2)}</h2>
                                                    <h2 className='font-bold pt-1 text-[12px]'>{trade === "profit" ? "+" : "-"} {allTimeGains}%</h2>
                                                </td>
                                                <td className="px-2 sm:px-6 py-4 whitespace-nowrap flex justify-evenly">
                                                    <button className='border rounded-md px-2 sm:px-4 py-1 font-bold text-[#ABB1BF] border-[#51545a] text-sm hover:bg-[#66C378] hover:text-white'>Deposit</button>
                                                    <button className='border rounded-md px-2 sm:px-4 py-1 font-bold text-[#ABB1BF] border-[#51545a] text-sm hover:bg-[#F6685E] hover:text-white'>Withdraw</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
