import React from "react";
import { Crown } from "lucide-react";
import logo from "../../assets/Logo.png";
import movieFood from "../../assets/cenima.png";
function PremiumCard() {
  return (
    <>
      <div
        className="h-64 w-full bg-cover bg-left rounded-xl px-20 relative"
        style={{
          backgroundImage: `url("${movieFood}")`,
        }}
      >
      <div className="absolute top-0 right-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent"></div>
        <div className="flex justify-between items-center pt-8">
          <div className="text-white">
            <div className="flex items-center gap-4">
              <img src={logo} alt="" className="w-20 rounded-full" />
              <h1 className="text-4xl font-bold py-4">
                Ethio<span className="text-[#f3b126]">Movie</span>
              </h1>
            </div>

            <h2 className="text-xl font-semibold px-4 pb-2">Unlimited Ethiopian Movies,anytime,anywhere.</h2>
            <p className="py-2 text-[#b8b8ba] px-4">
              Join EthioMovie Premuim and Enjoy HD quality, <br /> ad-free,streaming on
              all your device.
            </p>
          </div>

          <div className="text-center mt-4">
            <Crown size={80} color="#f3b126"/>
            <h2 className="text-xl font-bold text-[#f3b126]">Go to premium today!</h2>
            <button className="border border-[#f3b126] rounded-lg px-6 py-2 bg-[#f3b126] text-lg text-bold my-2 ">Start your free trial!</button>
            <p className="text-white">cancel anytime</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumCard;
