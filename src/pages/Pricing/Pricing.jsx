import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';

const Pricing = () => {
    const { allCoin, currency } = useContext(CoinContext);
    const [topCoins, setTopCoins] = useState([]);

    useEffect(() => {
        if (allCoin.length) {
            const top20 = [...allCoin]
                .sort((a, b) => a.market_cap_rank - b.market_cap_rank)
                .slice(0, 20);
            setTopCoins(top20);
        }
    }, [allCoin]);

    return (
        <div className="p-8 max-w-6xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-6">📊 Top 20 Cryptos</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-6">
                {topCoins.map((coin, index) => (
                    <div
                        key={coin.id}
                        className="p-4 bg-[#1c1c1c] rounded-xl border hover:border-purple-500 transition"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                            <h2 className="text-lg font-semibold">{coin.name}</h2>
                        </div>
                        <p className="text-xl font-mono">
                            {currency.Symbol}{coin.current_price.toLocaleString()}
                        </p>
                        <p
                            className={`mt-2 text-sm ${
                                coin.price_change_percentage_24h >= 0
                                    ? 'text-green-400'
                                    : 'text-red-400'
                            }`}
                        >
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                        <p className="mt-1 text-sm text-gray-400">
                            Market Cap: {currency.Symbol}{coin.market_cap.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
