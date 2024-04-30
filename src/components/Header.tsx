import { useState } from "react";
import { Link } from "react-router-dom";

import ConnectWallet from "./ConnectWallet";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-full text-[18px] uppercase font-bold fixed z-[999] pt-[22px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="px-5">
          <div className="flex justify-between items-center space-x-2 h-[94px] pl-7 pr-[57px] rounded-[22px] bg-[rgba(255,255,255,.05)] backdrop-blur-[46.4px]">
            <img src="/images/logo-top.png" />
            <img
              className="flex 1lg:hidden"
              src="/images/ham.svg"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <div className="hidden 1lg:flex space-x-5">
              <Link to="/">staking</Link>
              <Link to="/" className="flex items-start space-x-[4.75px]">
                <span>about</span>
                <img src="/images/arrow-down.svg" />
              </Link>
              <Link to="/">whitepaper</Link>
              <Link to="/">audit</Link>
            </div>
            <div className="hidden 1lg:flex items-center">
              <ConnectWallet />
              <Link
                to=""
                className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full ml-[22px]"
              >
                <img src="/images/telegram.svg" />
              </Link>
              <Link
                to=""
                className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full ml-[14px]"
              >
                <img src="/images/twitter.svg" />
              </Link>
            </div>
          </div>
          {openMenu && (
            <div className="flex lg:hidden flex-col space-y-5 p-5 absolute top-full right-0 w-full rounded-sm z-[2] shadow-xl bg-[rgba(255,255,255,.05)] backdrop-blur-[46.4px]">
              <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col space-y-5">
                  <Link to="/">staking</Link>
                  <Link to="/" className="flex items-start space-x-[4.75px]">
                    <span>about</span>
                    <img src="/images/arrow-down.svg" />
                  </Link>
                  <Link to="/">whitepaper</Link>
                  <Link to="/">audit</Link>
                </div>
                <ConnectWallet />
                <div className="flex items-center">
                  <Link
                    to=""
                    className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full"
                  >
                    <img src="/images/telegram.svg" />
                  </Link>
                  <Link
                    to=""
                    className="flex justify-center items-center w-[36px] h-[36px] border border-white rounded-full ml-[14px]"
                  >
                    <img src="/images/twitter.svg" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
