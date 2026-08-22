import React from "react";
import logo from "../../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
function Navbar() {
  return (
    <>
      <div className="px-20">
        <div className="flex justify-between align-center py-4">
          <div className="flex justify-start align-center gap-10">
            <div className="flex justify-start align-center gap-2 py-2">
              <img src={logo} alt="" className="w-10 rounded-full" />
              <h2 className="font-bold">
                Ethio<span>Movies</span>
              </h2>
            </div>
            <div className="flex justify-center align-center gap-4">
              <a href="">Home</a>
              <a href="">Movies</a>
              <a href="">Series</a>
              <a href="">Categories</a>
              <a href="">MyList</a>
            </div>
            <div className="flex justify-start align-center border border-[]  rounded-lg py-2 gap-2">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search movies, series..."
                className="outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center align-center gap-2">
            <NotificationsIcon/>
            <div className="flex justify-center align-center gap-2 py-2">
                <img src={logo} alt="" className="w-10 rounded-full" />
                <p>Abebe</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
