import React from 'react'

const Features = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-6">🚀 Features</h1>
            <ul className="space-y-4 text-lg">
                <li>
                    <strong>💹 Real-Time Coin Prices:</strong> Get live updates on all major cryptocurrencies pulled from CoinGecko API.
                </li>
                <li>
                    <strong>📈 Interactive Charts:</strong> Visualize coin trends with sleek, easy-to-read charts.
                </li>
                <li>
                    <strong>🔔 Price Alerts (Coming Soon):</strong> Set alerts for when your favorite coin hits your price target.
                </li>
                <li>
                    <strong>🌐 Multi-Currency Support:</strong> View prices in USD, EUR, and INR.
                </li>
                <li>
                    <strong>🔐 Secure by Design:</strong> Built with best practices for API key security and scalability.
                </li>
            </ul>
        </div>
    );
};

export default Features;

