const Tokenomics = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] xl:mt-[360px] max-w-[1280px] mx-auto px-5">
      <span className="uppercase font-black text-[47px]">Tokenomics</span>
      <div className="flex flex-col 1md:flex-row justify-between items-center space-y-10 1md:space-x-[90px] 1md:space-y-0 mt-[46.3px] w-full break-words">
        <div className="flex flex-col bg-white border-[5px] border-[#1CF2AA] rounded-[20px] w-full md:w-[450px] pt-[21.69px] pb-[13.95px] px-6">
          <span className="font-semibold text-[22px] text-center text-black">
            Token Information
          </span>
          <span className="text-[#878787]">
            <br />
            XRP AI Tokenomics include smart staking rewards, meaning you can
            earn right away.
            <br />
            <br />
            25% of supply sold in presale 25% allocated to marketing 25% for the
            project treasury 15% used for staking rewards 10% for exchange
            liquidity
            <br />
            <br />
            XRPAI Token Address: 0x000000000000000000000000000000000000dead
            <br />
            <br />
          </span>
        </div>
        <img className="1md:flex-1 1md:w-0" src="/images/tokenomics.png" />
      </div>
    </div>
  );
};

export default Tokenomics;