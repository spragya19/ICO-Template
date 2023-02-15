/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [show, setShow] = useState("hidden");
  const [loader, setLoader] = useState(false);
  const toggle = () => {
    if (show === "hidden") {
      setShow("mobile-nav");
    } else {
      setShow("hidden");
    }
  };
  const [first, setfirst] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      console.log("M", scroll);
      if (scroll > 100) {
        document.getElementById("headerLight")?.classList.add("header-light");
        document.getElementById("headerLight")?.classList.remove("black-bg");
        document.getElementById("headerLight")?.classList.remove("ico-nav");
        setfirst(false)
      } else {
        document
          .getElementById("headerLight")
          ?.classList.remove("header-light");
          document.getElementById("headerLight")?.classList.add("black-bg");
        document.getElementById("headerLight")?.classList.add("ico-nav");
          setfirst(true)
      }
    });

    const li = document.querySelectorAll(".nav-item");
    const sec = document.querySelectorAll("section");

    function activemenu() {
      let len = sec.length;
      while (--len && window.scrollY + 80 < sec[len].offsetTop) {}
      li.forEach((ltx) => ltx.classList.remove("active"));
      // li[len].classList.add("active");
    }
    activemenu();
    window.addEventListener("scroll", activemenu);
  }, []);
  return (
    <section className="">
      <nav class="black-bg py-1 fixed-top z-[9999]  ico-nav" id="headerLight">
        <div
          class="container flex flex-wrap items-center justify-between mx-auto px-3 md:px-0  "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <a href="/#" class="flex items-center">
            <img
              src={first?"/assets/img/logo.png":"/assets/img/logo2.png"}
              className="mr-3 h-10 pb-1 "
              alt="Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => toggle()}
            type="button"
            class="inline-flex items-center p-2 mx-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            id="btn"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="false"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class={`${show}  w-full lg:block lg:w-auto nav-list `}
            id="navbar-default"
          >
            <ul class="flex flex-col items-center p-2 h-[calc(100vh_-_60px)] lg:h-auto overflow-y-scroll lg:overflow-y-hidden lg:flex-row xl:space-x-8 lg:space-x-4 mb-0">
              <li>
                <a className="nav-link" href="/#ico">
                  WHAT IS ICO
                </a>
              </li>
              <li>
                <a className="nav-link " href="/#token">
                  TOKEN
                </a>
              </li>
              <li>
                <a className="nav-link " href="/#roadMap">
                  ROADMAP
                </a>
              </li>
              <li>
                <a className="nav-link " href="/#apps">
                  APPS
                </a>
              </li>
              <li>
                <a className="nav-link " href="/#team">
                  TEAMS
                </a>
              </li>
              <li>
                <a className="nav-link " href="/#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="nav-link " href="/#contact">
                  CONTACT
                </a>
              </li>

              <li>
                <button className={first?'text-white font-semibold hover:text-white py-2 px-4 border-[2px] border-[#ffc123] hover:bg-[#ffc123] text-sm rounded':'text-[#637097] font-semibold hover:text-white py-2 px-4 border-[2px] border-[#ffc123] hover:bg-[#ffc123] text-sm rounded'}>
                  SIGN UP
                </button>
              </li>
              <li>
                <button className={first?'text-white font-semibold hover:text-white py-2 px-4 border-[2px] border-[#ffc123] hover:bg-[#ffc123] text-sm rounded':'text-[#637097] font-semibold hover:text-white py-2 px-4 border-[2px] border-[#ffc123] hover:bg-[#ffc123] text-sm rounded'}>
                 LOG IN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
