import React from 'react'

const Blog = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-6">📰 Blog</h1>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold">🔍 How to Read a Crypto Chart</h2>
                    <p className="text-sm text-gray-400">April 20, 2025</p>
                    <p className="mt-2">
                        Candlesticks? Moving averages? RSI? We break down the basics of technical analysis in crypto. Even if you're new, you'll be reading charts like a pro in no time.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">⚖️ Best Stablecoins in 2025</h2>
                    <p className="text-sm text-gray-400">April 5, 2025</p>
                    <p className="mt-2">
                        USDT, USDC, DAI – which stablecoin should you trust in 2025? We compare them on safety, decentralization, and use case.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">📊 Is Crypto Still a Good Investment?</h2>
                    <p className="text-sm text-gray-400">March 27, 2025</p>
                    <p className="mt-2">
                        The crypto space is changing. With regulation, ETFs, and mainstream adoption, is it still the wild west? Let’s break down the risks and opportunities.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">🛡️ Why Self-Custody Matters</h2>
                    <p className="text-sm text-gray-400">March 12, 2025</p>
                    <p className="mt-2">
                        "Not your keys, not your coins." Learn why hardware wallets and seed phrases are more important than ever in 2025.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">⛏️ Is Crypto Mining Dead?</h2>
                    <p className="text-sm text-gray-400">February 22, 2025</p>
                    <p className="mt-2">
                        With Ethereum's switch to Proof of Stake and rising electricity costs, is mining still worth it? We look at the numbers and the networks still running PoW.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">🌍 Top 5 Crypto-Friendly Countries</h2>
                    <p className="text-sm text-gray-400">February 1, 2025</p>
                    <p className="mt-2">
                        From Portugal to Singapore — here are the places welcoming Web3 innovation with open arms (and low taxes 👀).
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">📱 Best Crypto Apps in 2025</h2>
                    <p className="text-sm text-gray-400">January 10, 2025</p>
                    <p className="mt-2">
                        From tracking your portfolio to buying NFTs — here are the apps we can’t live without this year.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
