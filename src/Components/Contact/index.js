import React from "react";

const Contact = () => {
  return (
    <section className=" py-10 contact mt-22 " id="contact">
      <div className="container mx-auto px-3  " id="contact">
        <div class=" items-center">
          <div
            className="text-[white]  justify-center items-center  ml-10 md:mb-0 "
            data-aos="zoom-in"
          >
            <p className=" text-[#374574] text-5xl font-semibold text-center mt-28 ">
              Get In Touch
            </p>
          </div>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-3 ">
          <div>
            <p className="text-[#637097] pt-12">
              Any question? Reach out to us and we’ll get back to you shortly.
            </p>
            <ul class="list-none">
              <li className="text-[#637097] mt-6">+44 0123 4567</li>
              <li className="text-[#637097] mt-6">info@company.com</li>
              <li className="text-[#637097] mt-6">oin us on Telegram</li>
            </ul>
          </div>

          <div class="col-span-2 px-10">
            <div class="relative pt-8 ">
              <input
                type="text"
                id="floating_filled"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-3 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute pt-8 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Name
              </label>
            </div>
            <div class="relative pt-8 ">
              <input
                type="text"
                id="floating_filled"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-3 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute pt-8 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Email
              </label>
            </div>
            <div class="relative pt-20">
              <textarea
                type="textarea"
                id="floating_filled"
                class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-3 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm text-gray-500 pt-20 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Your Message
              </label>
            </div>
            <div  class="relative pt-8">
            <button className="bg-[#39a9ff] text-white font-semibold hover:text-white py-2 px-4 border border-[#39a9ff] hover:bg-[#fee600]  hover:border-[#fee600] rounded">
              Submit
              </button>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
