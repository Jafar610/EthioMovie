import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../assets/Logo.png";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Login() {
  return (
    <>
      <div className="">
        <div>
          <div className="flex justify-between align-center py-4 px-20">
            <div className="flex justify-start align-center gap-2">
              <img src={logo} alt="" className="w-10 rounded-full" />
              <h1 className="text-4xl font-bold text-black">
                Ethio<span className="text-[#fab612]">Movie</span>
              </h1>
            </div>
            <div className="flex justify-center align-center gap-2 border border-[#fab612] rounded-lg px-4 py-2">
              <LanguageIcon />
              <select name="" id="" className="outline-none">
                <option value="Eng" className="outline-none">
                  English
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between align-center px-20">
          <div>
            <div>
              <h2>Ethiopian Stories.</h2>
              <h2>Endless Emotions.</h2>
              <p>Discover and Watch Ethiopian Movies any time, anywhere.</p>
            </div>
            <div>
              <div>
                <OndemandVideoIcon />
                <p>Unlimited Movies.</p>
                <p>Watch all you love.</p>
              </div>
              <div>
                <SmartphoneIcon />
                <p>Anywhere.</p>
                <p>On any device.</p>
              </div>
              <div>
                <GppGoodOutlinedIcon />
                <p>Safe & Secure.</p>
                <p>Your data is protected.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0b0c10] text-white px-15 py-10 mt-4 border border-[#222527] rounded-lg">
            <div className="">
              <div className="">
                <h1 className="text-4xl pb-3 font-bold">
                  Welcome <span className="text-[#fab612]">Back!</span>
                </h1>
                <p className="text-lg pb-8">Login to continue watching.</p>
              </div>
              <form action="">
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
                  <p>Don't have an account? <a href="" className="text-[#fab612]">Sign up</a></p>
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
