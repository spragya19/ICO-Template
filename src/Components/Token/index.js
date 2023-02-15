/* eslint-disable @next/next/no-img-element */
import React from "react";

const Token = () => {
  
  return (
    <section id="token">
      <div className="container  mx-auto px-3">
        <div class=" items-center" >
          <div
            className="text-[#374574]  justify-center items-center  mb-10 ml-10 md:mb-0"
            
          >
            <p className=" text-5xl font-semibold text-center" data-aos="fade-up"  data-aos-duration="1200">
              Pre-Sale & Values
            </p>
            <p className=" text-l text-[#637097] mt-10 text-center mb-20" data-aos="fade-up"  data-aos-duration="1200">
              ICO Crypto token will be released on the basis of Ethereum and
              Bitocin <br />
              platform. It’s compatibility of the token with third-party
              services wallets, <br /> exchanges etc, and provides easy-to-use
              integration.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center" data-aos="fade-up"  data-aos-duration="1200">
              <div>
                <div className="">
                  <ul class="list-outside list-disc flex flex-wrap">
                    <li className="  w-[50%]">
                      <div>
                        <h4 className="text-xl font-semibold text-[#374574]">
                          Start
                        </h4>
                        <p className=" text-[#637097] ">
                          Feb 8, 2022 (9:00AM GMT)
                        </p>
                      </div>
                    </li>
                    <li className=" w-[50%]">
                      <div>
                        <h4 className="text-xl font-semibold text-[#374574]">
                          Number of tokens for sale
                        </h4>
                        <p className=" text-[#637097] ">900,000 ICC (9%)</p>
                      </div>
                    </li>
                    <li className=" mt-8 w-[50%]">
                      <div>
                        <h4 className="text-xl font-semibold text-[#374574]">
                          End
                        </h4>
                        <p className="text-l text-[#637097] ">
                          Feb 20, 2022 (11:00AM GMT)
                        </p>
                      </div>
                    </li>
                    <li className="mt-8 w-[50%]">
                      <div>
                        <h4 className="text-xl font-semibold text-[#374574]">
                          Tokens exchange rate
                        </h4>
                        <p className="text-l text-[#637097] ">
                          1 ETH = 650 ICC, 1 BTC = 1940 ICC
                        </p>
                      </div>
                    </li>
                    <li className="mt-8 w-[50%]">
                      <div>
                        <h4 className="text-xl font-semibold text-[#374574]">
                          Acceptable currencies
                        </h4>
                        <p className="text-l text-[#637097] ">ETH, BTC, LTC</p>
                      </div>
                    </li>
                    <li className="mt-8 w-[50%]">
                      <div>
                        <h4 className="text-xl font-semibold text-[#374574]">
                          Minimal transaction amount
                        </h4>
                        <p className="text-l text-[#637097] ">
                          1 ETH/ 1 BTC/ 1 LTC
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center py-8 px-5 ml-12 bg-[#2b4aed] rounded">
                <h4 className="text-xl font-semibold text-[white]">
                  PRE SALE SYTART IN
                </h4>
                <h1 className="mt-5 text-white text-6xl">75 : 09 : 28 : 10</h1>
                <button className=" mt-5 text-white font-semibold hover:text-white py-2 px-4 border bg-[#ffc123] hover:bg-[#39a9ff] rounded">
                  REGISTER & BUY TOKEN
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 items-center mt-20"  data-aos="fade-up"  data-aos-duration="1200">
              <div>
                <p className=" text-3xl font-semibold text-center  ">
                  Initial Token Distribution
                </p>
                <img className="w-[90%] mt-12" src="/assets/img/token1.png" alt=""></img>
              </div>
              <div className="text-center ">
                <p className=" text-3xl font-semibold text-center  ">
                  Sale Proceed Allocation
                </p>
                <img className="w-[90%] mt-12" src="/assets/img/token2.png" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
