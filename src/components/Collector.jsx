// import React from 'react'
import Profilephoto from "../assets/images/Profilephoto.svg"

export const Collector = () => {
    return (
        <div className="h-[226px] bg-[#e9e9e9] dark:bg-[#313135] rounded-2xl mt-[50px] mb-[18.5px]">
            <div className="text-center items-center p-[39px]">
                <div className="flex justify-center pb-3">
                    <img className="w-20 h-20" src={Profilephoto} alt="" />
                </div>
                <h1 className="text-[32px] leadng-[45.547px] font-semibold pb-6">CoinCollector23</h1>
            </div>
        </div>
    )
}
