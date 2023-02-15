/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="relative py-10" >
      <div className="container mx-auto px-3  banner" id="Banner">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div
            className="text-white justify-center items-center md:items-start mb-10 ml-10 md:mb-0"
            data-aos="fade-up"  data-aos-duration="1500"
          >
              

            <p className="text-5xl font-bold">
              #1 Best Selling ICO
              <br />
              Landing template
              <br />
              for ICO Startup <br />
              Agency
            </p>
            <p className="font-bold text-l mt-7">
              Most Trending, Clean and Elegant Design based on
              <br /> deeply research
            </p>
            <div className="xl:flex gap-x-14 mt-10 ">
            <button className=" text-white font-semibold hover:text-white py-2 px-4 border-[2px] text-sm border-[#ffc123] hover:bg-[#ffc123] rounded">
              TOKEN DISTRIBUTION
                </button>
              <button className="transition duration-700 ease-in-out hover:scale-110 text-white   font-semibold  py-3 md:py-4 md:w-[170px] w-[130px] md:text-lg text-sm rounded-lg ">
                Download
              </button>
            </div>
          </div>{" "}
          <div className="text-white mt-20 " data-aos="zoom-in-down">
            <img className=" w=[200px]" src="/assets/img/banner.png" alt=""></img>
          </div>
        </div>
      </div>

      <div className="container mt-72 mx-auto px-3">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div
            className="text-black  justify-center items-center md:items-start mb-10 ml-10 md:mb-0"
            data-aos="fade-up"  data-aos-duration="1500"
          >
            <p className=" text-xl font-semibold ">
              OUR
              <br /> PARTNERS
            </p>
            <div className="xl:flex gap-x-14 mt-5 ">
            <img className="w-30" src="/assets/img/lg1.png" alt=""></img>
            <img className="w-30" src="/assets/img/l2.png" alt=""></img>
             
            </div>
            <div className="xl:flex gap-x-14 mt-3 ">
            <img className="w-30" src="/assets/img/l3.png" alt=""></img>
            <img className="w-30" src="/assets/img/l4.png" alt=""></img>
            <img className="w-30" src="/assets/img/l5.png" alt=""></img>
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
