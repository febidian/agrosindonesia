import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Line from "../assets/icons/Line";
import Logo from "../assets/icons/Logo";
import Dots from "../assets/icons/Dots";
import LogoFooter from "../assets/icons/LogoFooter";
import Close from "../assets/icons/Close";

function Main({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="font-inter antialiased">
        <div className="bg-white border-b-2  py-8 ">
          <div className="lg:px-32 md:px-9 flex flex-row items-center justify-between">
            <div>
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div className="md:hidden sm:block pr-7">
              <button onClick={(e) => setOpen(!open)} className="relative">
                {open ? <Close /> : <Dots />}
                <div
                  className={
                    open
                      ? "bg-white rounded-md py-8 px-5 flex flex-col absolute right-1 top-8 space-y-4 border"
                      : "hidden"
                  }
                >
                  <NavLink
                    to="tentang"
                    className="text-base transition duration-150 hover:text-green-600"
                    activeClassName="text-green-600"
                  >
                    TENTANG
                  </NavLink>
                  <NavLink
                    to="profile"
                    className="text-base transition duration-150 hover:text-green-600"
                    activeClassName="text-green-600"
                  >
                    PROFILE
                  </NavLink>
                </div>
              </button>
            </div>
            <div className="md:flex sm:hidden">
              <div className="flex flex-row items-center space-x-6">
                <NavLink
                  to="tentang"
                  className="text-base transition duration-150 hover:text-green-600"
                  activeClassName="text-green-600"
                >
                  TENTANG
                </NavLink>
                <NavLink
                  to="profile"
                  className="text-base transition duration-150 hover:text-green-600"
                  activeClassName="text-green-600"
                >
                  PROFILE
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-32 md:px-9 px-4 mt-20">{children}</div>
        <div className="md:bg-footer mt-20 md:h-10 bg-green-600 ">
          <div className="lg:px-32 md:px-9 flex md:flex-row flex-col justify-center items-center md:space-x-4 md:space-y-0 space-y-3 md:py-0 py-3 h-full">
            <div>
              <LogoFooter />
            </div>
            <div className="lg:flex hidden">
              <Line />
            </div>
            <div className="text-xs text-white">
              PT ANTAR GLOBAL PROSPERO © 2021. All rights reserved.
            </div>
            <div className="text-xs text-white">SYARAT & KETENTUAN</div>
            <div className="text-xs text-white">KEBIJAKAN PRIVASI</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
