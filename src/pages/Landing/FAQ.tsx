import { Collapse } from "@mui/material";
import { useState } from "react";

const Accordion = ({ title, description }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        "flex flex-col p-6 rounded-[16px] cursor-pointer text-black transition " +
        (open ? "bg-[#1CF2AA]" : "bg-[#1CF2AA]")
      }
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center space-x-2">
        <span className="font-black text-[20px] leading-[22px]">{title}</span>
        <img
          className={open ? "rotate-180" : ""}
          src="/images/arrow-down-dark.svg"
        />
      </div>
      <div className="mt-2">
        <Collapse in={open}>
          <span className="text-[16px] leading-[24px]">{description}</span>
        </Collapse>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] max-w-[1280px] mx-auto px-5 pb-[74px]">
      <div className="flex flex-col space-y-[33.37px]">
        <span className="uppercase font-black text-[47px] text-center">
          Frequently Asked Questions
        </span>
        <div className="flex flex-col space-y-6 flex-1">
          <Accordion
            title="What is XRPAI?"
            description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
          />
          <Accordion
            title="How will XRPAI do staking? "
            description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
          />
          <Accordion
            title="Does XRPAI have other features?"
            description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
          />
          <Accordion
            title="What are the XRPAI tokenomics?"
            description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
          />
          <Accordion
            title="How do I find technical support?"
            description="XRPAI is part of the XRP family of meme coins but adds more utility and value for holders by introducing staking on Ethereum for  passive rewards."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
