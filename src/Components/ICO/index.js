/* eslint-disable @next/next/no-img-element */
import React from "react";

const ICO = () => {
  return (
    <section
      className=" bg-contain bg-no-repeat bg-[#white] xl:min-h-screen md:flex flex-col items-center justify-center"
      id="ico"
    >
      <div className="container mx-auto px-3">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div
            className="text-black justify-center items-center md:items-start mb-10 ml-10 md:mb-0"
            data-aos="zoom-in"
          >
            <p className="text-[#374574] text-5xl font-bold">
              We’ve built a platform <br />
              to buy and sell shares.
            </p>
            <p className="text-[#374574] text-xl mt-7">
              ICO Crypto is a platform for the future of funding that
              <br /> powering dat for the new equity blockchain.
            </p>
            <p className="text-s text-[#374574] mt-7">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            <br /> <br />Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore</p>
          </div>{" "}
          <div className="text-white " data-aos="zoom-in-down">
            <img className=" w-[450px] ml-auto" src="/assets/img/ico.png" alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICO;
