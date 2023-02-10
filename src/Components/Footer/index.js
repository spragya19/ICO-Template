/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React, { useEffect } from "react";
// import AOS from 'aos';
import Link from "next/link";

const Footer = () => {
//   useEffect(()=>{
//     AOS.init();
//   },[])
  return (
    <>
      <section className=" footer p-8">
        <div className="mt-60  container mx-auto" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
        <div>
            <h4 className="text-white text-center font-semibold mt-16 mb-16">
            AS SEEN IN
            </h4>
            <div class="grid grid-cols-6 gap-6  mb-4">
  <div> <img className="w-25 text-white" src="/assets/img/f1.png" alt=""></img></div>
  <div> <img className="w-25" src="/assets/img/f2.png" alt=""></img></div>
  <div> <img className="w-25" src="/assets/img/f3.png" alt=""></img></div>
  <div> <img className="w-25" src="/assets/img/f4.png" alt=""></img></div>
  <div> <img className="w-25" src="/assets/img/f5.png" alt=""></img></div>
  <div> <img className="w-25" src="/assets/img/f1.png" alt=""></img></div>
</div>
<div class="grid grid-cols-4 mt-5 mb-4 text-center">
  <div> <img className="w-25 mx-auto" src="/assets/img/f1.png" alt=""></img></div>
  <div> <img className="w-25 mx-auto" src="/assets/img/f2.png" alt=""></img></div>
  <div> <img className="w-25 mx-auto" src="/assets/img/f3.png" alt=""></img></div>
  <div> <img className="w-25 mx-auto" src="/assets/img/f4.png" alt=""></img></div>
  
</div>
        </div>
          <div class="flex flex-wrap mt-32">
            <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4 text-white">
              <div>
                <a href='/#'>
                <Image src="/assets/img/logo.png" width={152} height={67} alt='' />
                </a>

                <div className="max-w-sm ">
                  <span className="text-base">
                    ICo enables you to make effortless payments so you grow
                    your business. We’re built specifically for B2B SME’s to
                    provide you with a better way of making transactions across
                    borders.
                  </span>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4 text-white mt-5  ">
              <div>
                <ul className="text-white">
                  <p className="font-bold text-xl">Our Team</p>
                  <div className="md:flex gap-x-24">
                    <div>
                      <li className="my-5">Our Package</li>
                      <li className="my-5">How it works</li>
                      <li className="my-5">About Us</li>
                    </div>
                    <div>
                      <Link href='/terms'>
                      <li className="md:my-5">Term & conditions</li>
                      </Link>
                      <Link href='/privacyPolicy'>
                      <li className="my-5">Privacy Policy</li>
                      </Link>
                      <li className="my-5">Cookies Policy</li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/3  mb-4 text-white md:mt-5">
              <p className="font-bold text-xl ">Contact Us</p>
              <div className="md:flex gap-x-28 ">
                <p className="my-4">example@gmail.com</p>
                <p className="my-4">+1 654 6576 375</p>
              </div>
              <p className="font-bold text-xl mb-4">Subscribe to Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  className="w-[50%] bg-[white] border border-white text-black placeholder:text-black focus:border-red-600 focus:ring-red-600 text-sm rounded-lg focus:ring-red focus:border-red block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
                  placeholder="example@company.com"
                  required
                />
                <button className="transition duration-700 ease-in-out hover:scale-110 ml-5 text-white btn-bg-color rounded-lg px-5">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
