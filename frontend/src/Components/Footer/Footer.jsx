import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import PremiumCard from "../PremiumCard/PremiumCard";
import logo from "../../assets/Logo.png"
function Footer() {
  return (
    <>
     <div className='w-full h-screen bg-[#0b0f13] p-4'>
        <PremiumCard/>
        <div>
            <div className='flex justify-between align-center mt-10 text-[#d2d1d2] px-20'>
                <div>
                    <div className='flex  align-center py-2 gap-4'>
                        <img src={logo} alt="" className='w-10 rounded-full' />
                        <h1 className='text-3xl font-bold'>Ethio<span className='text-[#f3b61f]'>Movie</span></h1>
                    </div>
                    <div>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <YouTubeIcon/>
                        <TelegramIcon/>
                    </div>
                </div>
                <div>
                    <h2>Explore</h2>
                    <p>Home</p>
                    <p>Movie</p>
                    <p>Series</p>
                    <p>Categories</p>
                    <p>New release</p>
                    <p>Top Rated</p>
                    <p>Comming Soon</p>
                </div>
                <div>
                    <h2>My Account</h2>
                    <p>My List</p>
                    <p>Watch Letter</p>
                    <p>History</p>
                    <p>Subscriptions</p>
                    <p>Profile Settings</p>
                </div>
                <div>
                    <h2>Support</h2>
                    <p>Help Center</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>Terms of Usage</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h2>Download App</h2>
                    <p>Watch EthioMovie on your mobile device</p>
                    
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