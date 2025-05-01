import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {

    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
        if(event.target.value === ""){
            setDisplayCoin(allCoin)
        }
    }

    const searchHandler = async (event) =>{
        event.preventDefault();
        const coins = await allCoin.filter((item)=>{
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins)
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin])

    return (
        <div className="pb-20">
            <div className="m-[80px] flex flex-col items-center text-center gap-[30px] justify-center">
                <div className="flex flex-col gap-2 items-center justify-center max-w-[450px]">
                    <p className='font-bold text-4xl'>LARGEST<br />CRYPTO MARKETPLACE</p>
                    <p>Welcome to the world's largert cryptocurrency marketplace. Sign up to explore more about cryptos</p>
                </div>
                <form onSubmit={searchHandler}className='hero'>
                    <div className="flex flex-row bg-white p-2 rounded-lg">
                        <input onChange={inputHandler} list='coinlist'  value={input} required className='flex-1 outline-none p-[10px] border-none text-black w-[350px]' type="text" placeholder='Search crypto' />
                        <datalist id='coinlist'>
                            {allCoin.map((item,index)=>(
                                <option key={index} value={item.name}/>
                            ))}
                        </datalist>
                        <button className='border-none text-white text-[16px] px-[30px] py-[10px] rounded-lg bg-[#7927ff] font-[16px] hover:cursor-pointer'>Search</button>
                    </div>
                </form>
            </div>
                <div className='crypto-table'>
                    <div className='table-layout'>
                        <p>#</p>
                        <p>Coins</p>
                        <p>Price</p>
                        <p style={{textAlign:"center"}}>24H Change</p>
                        <p className='market-cap'>Market Cap</p>
                    </div>
                    {
                        displayCoin.slice(0, 10).map((item, index) => (
                            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                                    <p>{item.market_cap_rank}</p>
                                    <div>
                                        <img src={item.image} alt="..."/>
                                        <p>{item.name +"-"+ item.symbol}</p>
                                    </div>
                                    <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
                                    <p className={item.price_change_24h>0?"green":"red"}>{Math.floor(item.price_change_24h*100)/100}</p>
                                    <p className='market-cap'>{currency.Symbol} {item.market_cap.toLocaleString()}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>

    )
}

export default Home