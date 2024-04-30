const Rewarding = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] max-w-[1280px] mx-auto px-5">
      <span className="uppercase font-black text-[47px] text-center">
        OUR AI just got more rewarding
      </span>
      <span className="text-[20px] md:max-w-[798.54px] text-center mt-3">
        Prepare for the ultimate Doge upgrade! We're sending Elon's fave towards
        a more sustainable future. Stake DOGE20 today to start earning
        eco-friendly rewards.
      </span>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-5 md:space-x-6 md:space-y-0 font-black">
        <button className="relative">
          <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-white z-[2]" />
          <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1D93A0] z-[1]" />
          <div className="flex justify-center items-center space-x-[8.51px] w-[231.17px] h-10 rounded-[9px] bg-[#11E1F8] relative z-[3]">
            <span className="uppercase">whitepaper</span>
            <img src="/images/arrow.png" />
          </div>
        </button>
        <button className="relative">
          <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-white z-[2]" />
          <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
          <div className="flex justify-center items-center space-x-[8.51px] w-[231.17px] h-10 rounded-[9px] bg-[#1CF2AA] relative z-[3]">
            <span className="uppercase">audit</span>
          </div>
        </button>
      </div>
      <div className="flex flex-col space-y-10 mt-[100px] w-full">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-x-5 md:space-y-0 lg:pl-[114px]">
          <img src="/images/more stake.png" />
          <div className="flex flex-col items-center md:items-start space-y-4 sm:w-[558.49px] text-center md:text-left">
            <span className="font-black text-[40px] uppercase mt-5 md:mt-0">
              more staking!
            </span>
            <span className="text-[20px]">
              Utilizing smart contracts powered by Ethereum, XRPAI is much more
              than a meme coin and brings passive earning potential to the
              community.
              <br />
              Harness the power of your XRPAI tokens by staking and earning
              rewards, making your tokens work for you.
            </span>
            <button className="relative w-[231.17px] font-black">
              <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-white z-[2]" />
              <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
              <div className="flex justify-center items-center space-x-[8.51px] h-10 rounded-[9px] bg-[#1CF2AA] relative z-[3]">
                <span className="uppercase">buy now</span>
                <img src="/images/arrow.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center space-y-5 md:space-x-5 md:space-y-0 lg:pr-[114px]">
          <img src="/images/better wallet.png" />
          <div className="flex flex-col items-center md:items-start space-y-4 sm:w-[558.49px] text-center md:text-left">
            <span className="font-black text-[40px] uppercase mt-5 md:mt-0">
              Better wallet!
            </span>
            <span className="text-[20px]">
              There’s no need to worry about complicated wallets and custody of
              your tokens.
              <br />
              XRPAI is built on Ethereum, meaning you automatically gain more
              flexibility with your ERC-20 tokens. Use what you already have.
            </span>
            <button className="relative w-[231.17px] font-black">
              <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-white z-[2]" />
              <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
              <div className="flex justify-center items-center space-x-[8.51px] h-10 rounded-[9px] bg-[#1CF2AA] relative z-[3]">
                <span className="uppercase">buy now</span>
                <img src="/images/arrow.png" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-x-5 md:space-y-0 lg:pl-[114px]">
          <img src="/images/no inflation.png" />
          <div className="flex flex-col items-center md:items-start space-y-4 sm:w-[558.49px] text-center md:text-left">
            <span className="font-black text-[40px] uppercase mt-5 md:mt-0">
              No More Inflation!
            </span>
            <span className="text-[20px]">
              XRP is a beloved token but has been limited in its potential
              future worth because it has an infinite supply that will always
              emit more tokens into the market. XRPAI fixes this with a fixed
              supply, allowing for unhindered upwards pressure on the token
              price.
            </span>
            <button className="relative w-[231.17px] font-black">
              <div className="absolute top-0 left-0 translate-x-[2px] translate-y-[2px] w-full h-full rounded-[9px] bg-white z-[2]" />
              <div className="absolute top-0 left-0 translate-x-[4px] translate-y-[4px] w-full h-full rounded-[9px] bg-[#1FB985] z-[1]" />
              <div className="flex justify-center items-center space-x-[8.51px] h-10 rounded-[9px] bg-[#1CF2AA] relative z-[3]">
                <span className="uppercase">buy now</span>
                <img src="/images/arrow.png" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewarding;