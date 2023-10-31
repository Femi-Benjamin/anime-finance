// import React from 'react'
import Profilephoto from "../assets/images/profilephoto.svg";

const Active = () => {
  return (
    <div className="w-[478px] h-[420px] bg-[#e9e9e9] dark:bg-[#313135] rounded-2xl">
      <div className="px-7 p-6 border-b border-[#494950]">
        <h1 className="text-[24px] font-semibold">Active members</h1>
      </div>
      <div className="px-[25px] p-5 flex justify-between items-center text-[18px] font-semibold">
        <div className="flex gap-5 items-center">
          <img src={Profilephoto} alt="" />
          <h1>MinerX</h1>
        </div>

        <div>
          <p>200MH/s</p>
        </div>
      </div>
    </div>
  );
};

export default Active;
