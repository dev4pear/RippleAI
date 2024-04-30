import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cover bg-norepeat bg-footer">
      <div className="flex flex-col 1lg:flex-row items-end w-full max-w-[1280px] mx-auto font-bold text-[18px] pl-5 1lg:pl-[116.45px] pr-5 py-10 1lg:py-0 1lg:h-[912px]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-x-5 md:space-y-0 w-full pb-5">
          <img src="/images/logo-bottom.png" />
          <div className="flex flex-col items-center sm:items-end space-y-8">
            <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 md:gap-x-[94px] font-bold text-[18px]">
              <div className="flex flex-col space-y-5 uppercase">
                <Link to="/">about</Link>
                <Link to="/">roadmap</Link>
                <Link to="/">rewards</Link>
                <Link to="/">faq</Link>
              </div>
              <div className="flex flex-col space-y-5 uppercase">
                <Link to="/">privacy policy</Link>
                <Link to="/">cookies</Link>
                <Link to="/">terms & conditions</Link>
              </div>
              <div className="flex flex-col sm:items-end space-y-2">
                <Link to="/">Street 1st Floor</Link>
                <Link to="/">Location</Link>
                <Link to="/">Ripple Trade Center</Link>
                <Link to="/">Country</Link>
                <Link to="/">marketing@XRPAI.io</Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 uppercase text-center">
              <span>2024 RippleAI. All Rights Reserved.</span>
              <div className="flex sm:ml-[22px]">
                <Link
                  to=""
                  className="flex justify-center items-center w-[25.49px] h-[25.49px] border border-white rounded-full sm:ml-[22px]"
                >
                  <img className="w-[15.34px]" src="/images/telegram.svg" />
                </Link>
                <Link
                  to=""
                  className="flex justify-center items-center w-[25.49px] h-[25.49px] border border-white rounded-full ml-[14px]"
                >
                  <img className="w-[14.8px]" src="/images/twitter.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
