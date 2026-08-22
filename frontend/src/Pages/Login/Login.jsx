import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../assets/Logo.png";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
function Login() {
  const [hidden, setHidden] = useState('hidden');
  const changeHandler = () =>{
    setHidden(prev => prev === "hidden" ? "visible" : "hidden")
  }
  return (
    <>
      <div className="bg-[#010205] text-white w-full h-screen">
        <div>
          <div className="flex justify-between align-center py-4 px-20">
            <div className="flex justify-start align-center gap-2">
              <img src={logo} alt="" className="w-10 rounded-full" />
              <h1 className="text-4xl font-bold text-white">
                Ethio<span className="text-[#fab612]">Movie</span>
              </h1>
            </div>
            <div className="flex justify-center align-center gap-2 border border-[#fab612] rounded-lg px-4 py-2">
              <LanguageIcon />
              <select name="" id="" className="outline-none">
                <option value="Eng" className="outline-none text-white">
                  English
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between align-center px-20">
          <div className="mt-50">
            <div>
              <h2 className="text-4xl font-bold py-2">Ethiopian Stories.</h2>
              <h2 className="text-4xl font-bold pb-2 text-[#fab612]">Endless Emotions.</h2>
              <p className="text-xl">Discover and Watch Ethiopian Movies <br /> any time, anywhere.</p>
            </div>
            <div className="flex justify-start align-center gap-10 py-6 text-[#fab612]">
              <div className="">
                <OndemandVideoIcon fontSize="large" />
                <p className="text-[#f2f3f1] pt-2">Unlimited Movies.</p>
                <p className="text-[#6c6d6e] text-sm">Watch all you love.</p>
              </div>
              <div>
                <SmartphoneIcon fontSize="large"/>
                <p className="text-[#f2f3f1] pt-2">Anywhere.</p>
                <p className="text-[#6c6d6e] text-sm">On any device.</p>
              </div>
              <div>
                <GppGoodOutlinedIcon fontSize="large"/>
                <p className="text-[#f2f3f1] pt-2" >Safe & Secure.</p>
                <p className="text-[#6c6d6e] text-sm">Your data is protected.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0b0c10] text-white px-15 py-2 mt-2 border border-[#222527] rounded-lg">
            <div className="">
              <div className="">
                <h1 className="text-4xl pb-3 font-bold">
                  Welcome <span className="text-[#fab612]">Back!</span>
                </h1>
                <p className="text-lg pb-8">Login to continue watching.</p>
              </div>
              <form action="">
                <div className={hidden}>
                  <label htmlFor="name">Full Name</label>
                  <div className="flex justify-start align-center gap-2 border border-[#a0a0a3] rounded-sm w-full py-2 px-2 my-1 text-[#a0a0a3]">
                    <PersonIcon />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <div className="flex justify-start align-center gap-2 border border-[#a0a0a3] rounded-sm w-full py-2 px-2  my-2 text-[#a0a0a3]">
                    <EmailIcon />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <div className="flex justify-start align-center gap-2 border border-[#a0a0a3] rounded-sm w-full py-2 px-2  my-2 text-[#a0a0a3]">
                    <LockIcon />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="outline-none"
                    />
                    <VisibilityOffIcon />
                  </div>
                </div>

                <div className="flex justify-end align-center py-4">
                  <p className="text-[#fab612]">Forget Password?</p>
                </div>

                <div className="flex justify-center align-center border border-[#fab612] rounded-lg py-2 px-4 bg-[#fab612]">
                  <button className="text-black font-semibold">Login</button>
                </div>

                <div className="flex justify-center align-center py-2 text-[#c9c8ca]">
                  <p>Don't have an account? <span onClick={changeHandler} className="text-[#fab612] cursor-pointer">Sign up</span></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
