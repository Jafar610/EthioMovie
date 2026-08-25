import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import PremiumCard from "../PremiumCard/PremiumCard";
import logo from "../../assets/Logo.png"
import GooglePlay from "../../assets/download.png"
import AppleStore from "../../assets/apple-logo.png"
function Footer() {
  return (
    <>
     <div className='w-full h-screen bg-[#0b0f13] p-4'>
        <PremiumCard/>
        <div>
            <div className='flex justify-between items-center mt-10 text-[#d2d1d2] px-20'>
                <div>
                    <div className='flex  items-center py-2 gap-4'>
                        <img src={logo} alt="" className='w-10 rounded-full' />
                        <h1 className='text-3xl font-bold'>Ethio<span className='text-[#f3b61f]'>Movie</span></h1>
                    </div>
                    <div className='py-2'>
                        <h3 className='w-[200px] h-auto'>You home for the best Ethiopian movies and series, Watch, enjoy and celebrate our stories.</h3>
                    </div>
                    <div className='flex gap-3'>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <YouTubeIcon/>
                        <TelegramIcon/>
                    </div>
                </div>
                <div>
                    <h2 className='text-[#f3b61f] text-xl font-bold py-2'>Explore</h2>
                    <p className='pb-2'>Home</p>
                    <p className='pb-2'>Movie</p>
                    <p className='pb-2'>Series</p>
                    <p className='pb-2'>Categories</p>
                    <p className='pb-2'>New release</p>
                    <p className='pb-2'>Top Rated</p>
                    <p className='pb-2'>Comming Soon</p>
                </div>
                <div>
                    <h2 className='text-[#f3b61f] text-xl font-bold py-2'>My Account</h2>
                    <p className='pb-2'>My List</p>
                    <p className='pb-2'>Watch Letter</p>
                    <p className='pb-2'>History</p>
                    <p className='pb-2'>Subscriptions</p>
                    <p className='pb-2'>Profile Settings</p>
                </div>
                <div>
                    <h2 className='text-[#f3b61f] text-xl font-bold py-2'>Support</h2>
                    <p className='pb-2'>Help Center</p>
                    <p className='pb-2'>Contact Us</p>
                    <p className='pb-2'>FAQ</p>
                    <p className='pb-2'>Terms of Usage</p>
                    <p className='pb-2'>Privacy Policy</p>
                </div>
                <div>
                    <h2 className='text-[#f3b61f] text-xl font-bold py-2'>Download App</h2>
                    <p className='pb-2'>Watch EthioMovie on <br /> your mobile device.</p>
                    <div className='flex justify-center items-center  gap-2 border border-gray-400 rounded-lg py-2 px-4 my-2'>
                        <img src={GooglePlay} alt="" className='w-8 h-8'/>
                        <div>
                            <p className='text-xs'>GET IT ON</p>
                            <h4 className='font-bold'>Google Play</h4>
                        </div>
                    </div>

                    <div className='flex justify-center items-center  gap-2 border border-gray-400 rounded-lg py-2 px-4 my-4'>
                        <img src={AppleStore} alt="" className='w-8 h-8'/>
                        <div>
                            <p className='text-xs'>Download on the</p>
                            <h4 className='font-bold'>Apple Store</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer