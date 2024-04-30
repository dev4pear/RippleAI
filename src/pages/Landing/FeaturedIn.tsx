const FeaturedIn = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] max-w-[1280px] mx-auto px-5">
      <span className="uppercase font-black text-[47px] text-center">Featured In</span>
      <div className="flex justify-center flex-wrap gap-x-16 gap-y-6 px-[62px] w-full mt-[38px]">
        <img src="/images/partners/1.svg" />
        <img src="/images/partners/2.svg" />
        <img src="/images/partners/3.svg" />
        <img src="/images/partners/4.svg" />
        <img src="/images/partners/5.svg" />
        <img src="/images/partners/6.svg" />
        <img src="/images/partners/7.svg" />
      </div>
    </div>
  );
};

export default FeaturedIn;