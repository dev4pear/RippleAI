import ConnectWalletIntro from "./ConnectWalletIntro";

const Introduction = () => {
  return (
    <div className="w-full relative bg-cover bg-norepeat bg-header">
      <div className="max-w-[1280px] mx-auto px-5">
        {/*HEADER*/}
        <div className="w-full flex justify-center md:justify-end relative md:pr-[60px] pt-[216.38px] pb-[198.62px]">
          <div className="flex flex-col items-center border-[#1cf2aa] border-solid border-[5px] bg-white pt-[22px] pb-4 px-[12.5px] rounded-[20px] w-[450px]">
            <span className="font-semibold text-[22px] text-black text-center">
              Missed buying? buy on launch day
              <br />
              before exchanges in:
            </span>
            <div className="flex flex-col justify-center items-center rounded-[16px] bg-[#1FB985] text-white h-[70px] w-full mt-3">
              <div className="flex space-x-5">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-[26px]">05</span>
                  <span className="text-[11px]">DAY</span>
                </div>
                <div>:</div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-[26px]">18</span>
                  <span className="text-[11px]">HRS</span>
                </div>
                <div>:</div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-[26px]">22</span>
                  <span className="text-[11px]">MINS</span>
                </div>
                <div>:</div>
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-[26px]">09</span>
                  <span className="text-[11px]">SEC</span>
                </div>
              </div>
            </div>
            <div className="font-medium text-[18px] mt-[18.47px] text-black">
              Till XRPAI claim and launch
            </div>
            <div className="mt-2 font-medium text-[14px] text-[#878787]">
              Over $10M raised!
            </div>
            <div className="mt-2 font-medium text-[14px] text-[#878787]">
              Your purchased XRPAI = 0 ⓘ
            </div>
            <div className="mt-2 font-medium text-[14px] text-[#878787]">
              Your stakeable XRPAI = 0 ⓘ
            </div>
            <div className="w-full px-5">
              <div className="relative">
                <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-white z-[2]" />
                <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
                <ConnectWalletIntro />
              </div>
            </div>
            <div className="flex items-center space-x-[5.51px] text-[12px] mt-[22.88px] text-black">
              <span>Powered by</span>
              <img src="/images/header-pack-1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;