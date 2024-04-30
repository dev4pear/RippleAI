const Roadmap = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] max-w-[1280px] mx-auto px-5">
      <span className="uppercase font-black text-[47px]">roadmap</span>
      <div className="hidden 1xl:block mt-[280px] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-dashed border-[#1CF2AA] w-screen"></div>
        <div className="flex justify-center items-center space-x-[133px]">
          <div className="relative">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#1CF2AA] rounded-full">
              <span className="font-black text-[47px] text-black">1</span>
            </div>
            <div className="absolute bottom-[calc(100%+30px)] left-1/2 -translate-x-1/2 border border-dashed w-[60px] rotate-90"></div>
            <div className="flex flex-col space-y-2 p-6 rounded-[16px] absolute bottom-[calc(100%+50px)] left-1/2 -translate-x-1/2 w-[216.47px]">
              <span className="font-black text-[22px]">
                Presale and Marketing
              </span>
              <span className="mt-1 text-[14px]">
                XRPAI starts on a level playing field with a fair presale. The
                team will allocate a portion of funds raised towards a
                professional marketing strategy.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#1CF2AA] rounded-full">
              <span className="font-black text-[47px] text-black">2</span>
            </div>
            <div className="absolute top-[calc(100%+30px)] left-1/2 -translate-x-1/2 border border-dashed w-[60px] rotate-90"></div>
            <div className="flex flex-col space-y-2 p-6 rounded-[16px] absolute top-[calc(100%+54px)] left-1/2 -translate-x-1/2 w-[216.47px]">
              <span className="font-black text-[22px]">
                Early Staking Incentive
              </span>
              <span className="text-[14px]">
                Presale buyers of XRPAI will be able to stake their tokens into
                the smart contract before listing day to benefit from the high
                early rewards opportunity.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#1CF2AA] rounded-full">
              <span className="font-black text-[47px] text-black">3</span>
            </div>
            <div className="absolute bottom-[calc(100%+30px)] left-1/2 -translate-x-1/2 border border-dashed w-[60px] rotate-90"></div>
            <div className="flex flex-col space-y-2 p-6 rounded-[16px] absolute bottom-[calc(100%+54px)] left-1/2 -translate-x-1/2 w-[216.47px]">
              <span className="font-black text-[22px]">
                Presale Token Claiming
              </span>
              <span className="mt-1 text-[14px]">
                The XRPAI staking smart contract is programmed to distribute
                tokens to all stakers in the pool over a period of two years,
                providing sustained passive rewards.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#1CF2AA] rounded-full">
              <span className="font-black text-[47px] text-black">4</span>
            </div>
            <div className="absolute top-[calc(100%+30px)] left-1/2 -translate-x-1/2 border border-dashed w-[60px] rotate-90"></div>
            <div className="flex flex-col space-y-2 p-6 rounded-[16px] absolute top-[calc(100%+54px)] left-1/2 -translate-x-1/2 w-[216.47px]">
              <span className="font-black text-[22px]">
                DEX Launch on Uniswap
              </span>
              <span className="mt-1 text-[14px]">
                XRPAI will launch on Uniswap, the largest decentralized
                exchange. This will provide the best trading environment and
                early liquidity.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#1CF2AA] rounded-full">
              <span className="font-black text-[47px] text-black">5</span>
            </div>
            <div className="absolute bottom-[calc(100%+30px)] left-1/2 -translate-x-1/2 border border-dashed w-[60px] rotate-90"></div>
            <div className="flex flex-col space-y-2 p-6 rounded-[16px] absolute bottom-[calc(100%+54px)] left-1/2 -translate-x-1/2 w-[216.47px]">
              <span className="font-black text-[22px]">
                Allocated Liquidity Provision
              </span>
              <span className="mt-1 text-[14px]">
                The XRPAI team will add a substantial liquidity pool to Uniswap.
                For this purpose, 10% of the total token supply has been set
                aside.
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-[#1CF2AA] rounded-full">
              <span className="font-black text-[47px] text-black">6</span>
            </div>
            <div className="absolute top-[calc(100%+30px)] left-1/2 -translate-x-1/2 border border-dashed w-[60px] rotate-90"></div>
            <div className="flex flex-col space-y-2 p-6 rounded-[16px] absolute top-[calc(100%+54px)] left-1/2 -translate-x-1/2 w-[216.47px]">
              <span className="font-black text-[22px]">
                Long-Term Passive Rewards
              </span>
              <span className="mt-1 text-[14px]">
                The XRPAI staking smart contract is programmed to distribute
                tokens to all stakers in the pool over a period of two years,
                providing sustained passive rewards.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex 1xl:hidden flex-col items-center space-y-5 mt-10 text-black">
        <div className="relative">
          <div className="flex flex-col space-y-3 bg-white border-[5px] border-[#1CF2AA] p-6 rounded-[16px] w-full max-w-[400px]">
            <span className="capitalize font-semibold text-[24px]">
              Presale and Marketing
            </span>
            <span className="text-[14px]">
              XRPAI starts on a level playing field with a fair presale. The
              team will allocate a portion of funds raised towards a
              professional marketing strategy.
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-3 bg-white border-[5px] border-[#1CF2AA] p-6 rounded-[16px] w-full max-w-[400px]">
            <span className="capitalize font-semibold text-[24px]">
              Early Staking Incentive
            </span>
            <span className="mt-1 text-[14px]">
              Presale buyers of XRPAI will be able to stake their tokens into
              the smart contract before listing day to benefit from the high
              early rewards opportunity.
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-3 bg-white border-[5px] border-[#1CF2AA] p-6 rounded-[16px] w-full max-w-[400px]">
            <span className="capitalize font-semibold text-[24px]">
              Presale Token Claiming
            </span>
            <span className="mt-1 text-[14px]">
              The XRPAI staking smart contract is programmed to distribute
              tokens to all stakers in the pool over a period of two years,
              providing sustained passive rewards.
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-3 bg-white border-[5px] border-[#1CF2AA] p-6 rounded-[16px] w-full max-w-[400px]">
            <span className="capitalize font-semibold text-[24px]">
              DEX Launch on Uniswap
            </span>
            <span className="mt-1 text-[14px]">
              XRPAI will launch on Uniswap, the largest decentralized exchange.
              This will provide the best trading environment and early
              liquidity.
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-3 bg-white border-[5px] border-[#1CF2AA] p-6 rounded-[16px] w-full max-w-[400px]">
            <span className="capitalize font-semibold text-[24px]">
              Allocated Liquidity Provision
            </span>
            <span className="mt-1 text-[14px]">
              The XRPAI team will add a substantial liquidity pool to Uniswap.
              For this purpose, 10% of the total token supply has been set
              aside.
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-3 bg-white border-[5px] border-[#1CF2AA] p-6 rounded-[16px] w-full max-w-[400px]">
            <span className="capitalize font-semibold text-[24px]">
              Long-Term Passive Rewards
            </span>
            <span className="mt-1 text-[14px]">
              The XRPAI staking smart contract is programmed to distribute
              tokens to all stakers in the pool over a period of two years,
              providing sustained passive rewards.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
