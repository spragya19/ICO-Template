/* eslint-disable @next/next/no-img-element */
import React from "react";
import Token from '../Token'
const ProblemSol = () => {
  const toggle = () => {
    if (show === "hidden") {
      setShow("mobile-nav");
    } else {
      setShow("hidden");
    }
  };
  return (
    <section id="ico">
      <div className=" solution  relative py-72">
        <div className="container mx-auto ">
          <p className="text-white text-4xl font-bold">Problem & Solution</p>
          <p className="text-white text-l mt-5 ">
            Problem & Solution We are creating tokens to solve the world’s
            biggest blockchain <br />
            issues surrounding cross-border payments, data accessibility and
            payment.
          </p>
          <div class="grid grid-cols-3 gap-4 mt-12">
            <div>
              {" "}
              <p className="text-white text-3xl font-bold">
                Problems with
                <br /> Information Sharing
              </p>
              <p className="text-white text-l mt-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              {" "}
              <p className="text-white text-3xl font-bold">
                Relation between <br />
                provider and end-user
              </p>
              <p className="text-white text-l mt-5 ">
                Sed ut perspiciatis unde omnis iste natus error sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                <br /> <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className=" bg-[#3a31315c] item-center pl-4 pb-10 pt-6 w-[350px] rounded-lg">
              {" "}
              <p className="text-[#fee600] text-l font-bold mt-5">
                OUR SOLUTION
              </p>
              <p className="text-white text-3xl font-bold">
                That All Change <br />
                with ICO Crypto
              </p>
              <p className="text-white text-l mt-5 ">
                Sed ut perspiciatis unde omnis iste natus error sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                <br /> <br /> Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
     <Token />
    </section>
  );
};

export default ProblemSol;
