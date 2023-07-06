import React from 'react';

const Main = () => {
  return (
    <>
      <div className=" px-[140px] flex flex-col w-1/2 mt-[200px] place-content-end content-end ml-auto mr-7 ">
        <h1 className=" text-[70px] text-shadow-inner text-stroke font-black text-[#009b4d] text-opacity-60 leading-[70px] font-['Raleway']">
          Affordable, <br></br>
          <span className="font-['Gothic'] text-shadow-inner tracking-wide text-[#009b4d] text-[70px] text-opacity-60 uppercase">
            convenient!
          </span>
        </h1>
        <p className="text-[#faf5e9] text-[18px] leading-tight w-[370px] font-['Raleway'] font-semibold mt-2">
          Get groceries and foodstuffs that are the most affordable on the
          continent with zero stress.
        </p>
        <button
          className="bg-[#009b4d] bg-opacity-60 drop-shadow-2xl w-[170px]  border-[0.5px] border-black font-['Raleway'] text-[#ffffff] text-base font-semibold mt-6 rounded-full px-[20px] py-[9px] hover:bg-opacity-60 hover:border-none transition-transform "
          type="button"
        >
          Join a Group
        </button>
      </div>
    </>
  );
}

export default Main