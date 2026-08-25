import React from "react";
import logo from "../../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Navbar() {
  return (
    <>
      <div className="px-20 bg-[#02070c] text-[#faf9fa]">
        <div className="flex justify-between items-center w-full py-2 ">
          <div className="flex justify-start items-center gap-10 py-2">
            <div className="flex items-center">
              <img src={logo} alt="" className="w-8 rounded-full" />
              <h2 className="font-bold text-lg">
                Ethio<span className="text-[#e4a726]">Movies</span>
              </h2>
            </div>
            <div className="">
              <ul className="flex justify-center items-center gap-6">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="">Movies</a>
                </li>
                <li>
                  <a href="">Series</a>
                </li>
                <li>
                  <a href="">Categories</a>
                </li>
                <li>
                  <a href="">MyList</a>
                </li>

                <li className="border border-[#282b2e] rounded-full px-2">
                    <SearchIcon />
                <input
                  type="text"
                  placeholder="Search movies, series..."
                  className="outline-none px-2  w-[300px] py-1"
                />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center py-2">
              <NotificationsIcon/>
              <img src={logo} alt="" className="w-8 rounded-full" />
              <p className="text-lg">Abebe</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
