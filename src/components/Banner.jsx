import React, { useEffect, useState } from "react";
import BannerCard from "../Home/BannerCard";
import { Card } from "flowbite-react";
import Search from "./Search";

const Banner = () => {

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left Side*/}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy your books{" "}
            <span className="text-blue-700">at best prices!</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            voluptatum atque facere quod nisi doloremque impedit eligendi odit
            rerum aut odio voluptatem modi ea, nostrum harum? Officia at dolorum
            temporibus!
          </p>
          <div>
            <Search />
          </div>
        </div>
        {/*rightSide*/}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
