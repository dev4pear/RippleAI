const Calculator = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] max-w-[1280px] mx-auto px-5">
      <span className="uppercase font-black text-[47px] text-center">
        Rewards Calculator
      </span>
      <span className="text-[20px] md:max-w-[798.54px] text-center mt-3">
        XRPAI offers a new passive rewards opportunity to the meme coin scene
        but could also benefit from token price appreciation. XRPAI has a fully
        diluted starting market cap nearly 900 times cheaper than the original
        XRP.
      </span>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-[46.3px] w-full xl:pl-[116px]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:w-[520px]">
          <span className="font-black text-[40px] uppercase mt-10 lg:mt-0">
            Ready to buy?
          </span>
          <span className="text-[20px]">
            All you need to buy XRPAI tokens at the lowest presale price is a
            decentralised wallet containing ETH, BNB, or USDT. Simply connect to
            the widget above to swap tokens!
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
        <div className="flex flex-col bg-white border-[5px] border-[#1CF2AA] rounded-[20px] md:w-[450px] pt-[21.69px] pb-[13.95px] px-6">
          <span className="font-semibold text-[22px] text-center text-black">
            Returns Calculator
          </span>
          <span className="text-[18px] text-black mt-1.5 text-center">
            Input the amount of XRPAI you’re purchasing, and see what it would
            be worth at different prices.
          </span>
          <div className="flex justify-between mt-3 mb-2 font-medium text-[10px] px-[16.5px] text-black">
            <span>IF I BUY</span>
            <span>($220)</span>
          </div>
          <div className="flex items-center border border-[#1CF2AA] rounded-[9px] pl-[16.54px] pr-[17.39px] h-10">
            <input
              className="flex-1 w-0 font-medium text-[14px] text-black"
              placeholder="Amount"
            />
            <img src="/images/tada.svg" />
          </div>
          <span className="mt-4 text-[#1CF2AA] font-medium text-[12px]">
            And the token price reaches: $0.00047
          </span>
          <input className="mt-2 w-full" type="range" />
          <div className="flex justify-between items-center mt-3 text-[#1CF2AA]">
            <span className="font-semibold text-[22px]">
              Your $XRPAI
              <br />
              would be worth
            </span>
            <span className="font-black text-[32px]">$470</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
