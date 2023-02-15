/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
const Header = () => {
  const [show, setShow] = useState("hidden");
  const [loader, setLoader] = useState(false);
  const toggle = () => {
    if (show === "hidden") {
      setShow("mobile-nav");
    } else {
      setShow("hidden");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      console.log("M", scroll);
      if (scroll > 100) {
        document.getElementById("headerLight")?.classList.add("header-light");
      } else {
        document
          .getElementById("headerLight")
          ?.classList.remove("header-light");
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
    <section className="ico-nav ">
      <nav class="black-bg py-1 fixed-top z-[9999] " id="headerLight">
        <div class="container flex flex-wrap items-center justify-between mx-auto px-3 md:px-0 ">
          <a href="/#" class="flex items-center">
            <img src="/assets/img/logo.png" className="mr-3 h-10 " alt="Logo" />
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
            <ul class="flex flex-col items-center p-4 h-[calc(100vh_-_60px)] lg:h-auto overflow-y-scroll lg:overflow-y-hidden lg:flex-row xl:space-x-8 lg:space-x-4 ">
              <li>
                <a className="theme-color  nav-link" href="/#ico">
                  WHAT IS ICO
                </a>
              </li>
              {/* <li>
              <a
                className="nav-link"
                href="#"
            
              >
                Our Package
              </a>
            </li> */}
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
                <button className=" text-white font-semibold hover:text-white py-2 px-4 border border-[#fee600] hover:bg-[#fee600] rounded">
                  Login
                </button>
              </li>
              <li>
                <button className=" text-white font-semibold hover:text-white py-2 px-4 border border-[#fee600] hover:bg-[#fee600] rounded">
                  Signup
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
