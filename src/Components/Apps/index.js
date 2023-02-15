/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Apps = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className=" py-10 app mt-28 pb-20" id="apps">
      <div className="container mx-auto px-3  " id="Banner">
        <div class=" items-center">
          <div
            className="text-[white]  justify-center items-center  ml-10 md:mb-0 "
            data-aos="fade-up"  data-aos-duration="1500"
          >
            <p className=" text-5xl font-semibold text-center mt-28 ">
              ICO Wallet App
            </p>
            <p className=" text-l text-[white] mt-10 text-center mb-20 ">
              ICO Wallet App Once you’ve entered into our ecosystem, you can
              mange every thing.
              <br /> Anyone with a smartphone and an internet connection can
              participate in <br />
              global marketplace.
            </p>
          </div>
        </div>
        <div class="grid  md:grid-cols-2">
          <div
            className="text-white   ml-10 md:mb-0"
            data-aos="fade-up"  data-aos-duration="1500"
          >
            <p className="text-l ">
            ICO Crypto Mobile for the future of funding that powering dat for
              the new equity blockchain.<br /><br />
               Lorem ipsum dolor sit amet, consectetur
              adipis cing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc
              itation ullamco laboris nisi commodo consequat.
            </p>
            <ul class="list-disc">
   <li className=" mt-4 text-[#dbd5d5]">Crypto-news curation</li>
 <li className=" mt-4 text-[#dbd5d5]">Natural Language Understanding</li>
 <li className=" mt-4 text-[#dbd5d5]">Wallet aggregation</li>
 <li className=" mt-4 text-[#dbd5d5]">Professional Network</li>
 <li className=" mt-4 text-[#dbd5d5]">No more expensive fees</li>
  
</ul>
<div className="mt-11">
<button className=" text-white font-semibold hover:text-white py-2 px-4 border-[2px] text-sm border-[#ffc123] hover:bg-[#ffc123] rounded">
           GET THE APP NOW
                </button></div>

           
          </div>{" "}
          <div className="text-white  "   data-aos="fade-up"  data-aos-duration="1500">
            <img className=" w=[200px]" src="/assets/img/phone.png" alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
