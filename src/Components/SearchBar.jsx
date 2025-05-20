import React from "react";

const SearchBar = () => {
  return (
    <div className="sticky z-4 top-0 bg-white">
      <div className="flex gap-[20px] pt-[15px] pl-[20px] pb-[15px] items-center ">
        <div className="flex w-[1300px] h-[50px] rounded-xl p-[15px] gap-[10px] items-center bg-[#f1f1f1] hover:bg-[#e3dfdf]">
          <img className="w-[20px] h-[20px]" src="search.png" alt="" />
          <p className="text-[#8d8d8d]">Search</p>
        </div>
        <div className="w-[50px] h-[50px] p-[10px] rounded-xl hover:bg-[#e3dfdf]">
          <img
            className="rounded-full w-[30px] h-[30px]"
            src="pfp.jpg"
            alt=""
          />
        </div>
        <div className="ddarrow w-[30px] h-[30px] text-[#6e6e6e] text-[22px] text-center font-mono rotate-90 hover:rounded-full hover:bg-[#e3dfdf]">
          <p className="flex pl-[10px] text-center absolute">></p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
