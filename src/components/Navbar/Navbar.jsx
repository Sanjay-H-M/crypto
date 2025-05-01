import React, { useContext } from 'react'
import arrow_icon from "../../assets/arrow.png"
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", Symbol: "$" })
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", Symbol: "€" })
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", Symbol: "₹" })
                break;
            }
            default: {
                setCurrency({ name: "usd", Symbol: "$" })
                break;
            }
        }
    }
    return (
        <div className='Navbar flex items-center justify-around p-[20px] border-b-2 border-b-[#3c3c3c]'>
            <Link to={"/"}>
                <div className="flex flex-row items-center gap-1 logo font-bold text-2xl font-sans hover:cursor-pointer">
                    <img width={"30px"} src="logo.png" alt="" />
                    <span className='logo max-[400px]:text-sm max-[350px]:hidden'>CRYPTO</span>
                </div>
            </Link>
            <ul className='hidden md:flex flex-row gap-6'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/features"><li>Features</li></Link>
                <Link to="/pricing"><li>Top 20 Cryptos</li></Link>
                <Link to="/blog"><li>Blog</li></Link>
            </ul>
            <div className="nav-right flex flex-row items-center justify-between gap-2">
                <select onChange={currencyHandler} className='px-2 py-1 border-2 border-white rounded-md bg-transparent'>
                    <option className="bg-[#09005c] text-white " value="usd">USD</option>
                    <option className="bg-[#09005c] text-white " value="eur">EUR</option>
                    <option className="bg-[#09005c] text-white " value="inr">INR</option>
                </select>
                <button className='flex flex-row items-center px-5 py-1 border-none rounded-full hover:cursor-pointer gap-2 bg-white text-[#393939]'>
                    <Link to='/signup'><span>Sign Up </span></Link>
                    <img className='size-[13px]' src={arrow_icon} alt="Arrow" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
