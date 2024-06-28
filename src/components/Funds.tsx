import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function Funds() {

    const userInfo = useSelector((state: RootState) => state.userInfo);
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
        let tempCryptoHoldings = 0;
        let tempInvestedValue = 0;
        let tempTotalPortfolio = 0;

        userInfo.userInfo.holdings.forEach((coin) => {
            const coinInfo = allCoins.find((obj) => obj.symbol === coin.symbol);
            const coinPrice = coinInfo.data[coinInfo.data.length - 1].close;
            const currentPortfolio = coin.totalBalance * coinPrice;

            tempCryptoHoldings += currentPortfolio;
            tempInvestedValue += coin.invested;
            tempTotalPortfolio += currentPortfolio;
        });

        const difference = Math.abs(tempInvestedValue - tempCryptoHoldings);
        const average = (tempInvestedValue + tempCryptoHoldings) / 2;
        const percentageDiff = (difference / average) * 100;
        const trade = tempInvestedValue < tempCryptoHoldings ? "+" : "-";
        setTrade(trade)

        setCryptoHoldings(tempCryptoHoldings);
        setInvestedValue(tempInvestedValue);
        setTotalPortfolio(tempTotalPortfolio);
        setAllTimeGains(percentageDiff);

    }, [userInfo, allCoins]);

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
                            <h2 className='font-bold text-xl'>${totalPortfolio.toFixed(2)}</h2>
                        </div>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex flex-col gap-2 justify-center'>
                            <div className='flex justify-between'>
                                <h2>Crypto Holdings</h2>
                                <h2 className='font-bold'>${cryptoHoldings.toFixed(2)}</h2>
                            </div>
                            <div className='flex justify-between'>
                                <h2>Invested Value</h2>
                                <h2 className='font-bold'>${investedValue.toFixed(2)}</h2>
                            </div>
                        </div>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex justify-between items-center'>
                            <h2>All time Gains</h2>
                            <h2 className='font-bold'>{trade}{allTimeGains.toFixed(2)}%</h2>
                        </div>
                        <div className='w-full rounded-md bg-[#1E2433] h-full px-4 py-4 flex justify-between items-center'>
                            <h2>INR Balance</h2>
                            <h2 className='font-bold'>${userInfo.userInfo.balance}</h2>
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
                                    {userInfo.userInfo.holdings.map((coin, index) => {

                                        const coinInfo = allCoins.find((obj) => obj.symbol === coin.symbol);
                                        const coinPrice = coinInfo.data[coinInfo.data.length - 1].close;
                                        const currentPortfolio = coin.totalBalance * coinPrice;

                                        const difference = Math.abs(coin.invested - currentPortfolio);
                                        const average = (coin.invested + currentPortfolio) / 2;
                                        const percentageDiff = (difference / average) * 100;
                                        const trade = coin.invested < currentPortfolio ? "profit" : "loss";
                                        const allTimeGains = percentageDiff.toFixed(2);

                                        return (
                                            <tr className={index % 2 === 0 ? 'bg-[#1E2433]' : 'bg-[#161D2B]'}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{coin.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">{coin.totalBalance}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">{coin.invested}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">{currentPortfolio.toFixed(2)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    {trade === "profit" ? "+" : "-"} {allTimeGains}%
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <button>Deposit</button>
                                                    <button>Withdraw</button>
                                                </td>
                                            </tr>
                                        )
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
