import { useState } from "react";

const SwitchTabs = () => {
  const [tab, setTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
  });

  const changeHandler = (id) => {
    setTab({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      [id]: true,
    });
  };

  return (
    <>
      <div className="container mx-auto" id="faq">
        <div class="row text-center">
          <div class="col-lg-8 mx-auto">
            <p className="text-[#374574] text-4xl mt-16 font-bold">
              Frequently Asked Questions
            </p>
            <p className="text-[#637097] text-l mt-5 ">
              Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies,
              and few <br /> others. If you have any other questions, please get
              in touch using the <br /> contact form below.
            </p>
       
          </div>
        </div>
        {/* Tab Bar */}
        <div class="text-sm font-medium text-center text-gray-500  dark:text-gray-400 ">
          <ul class="flex flex-wrap -mb-px justify-center">
            <li class="mr-2">
              <button
                onClick={changeHandler.bind(this, "tab1")}
                class={`inline-block p-4 rounded-t-lg ${
                  tab.tab1
                    ? "text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active"
                    : "hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b"
                }`}
              >
                GENERAL
              </button>
            </li>
            <li class="mr-2">
              <button
                onClick={changeHandler.bind(this, "tab2")}
                class={`inline-block p-4 rounded-t-lg ${
                  tab.tab2
                    ? "text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active"
                    : "hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b"
                }`}
              >
                PRE-ICO & ICO
              </button>
            </li>
            <li class="mr-2">
              <button
                onClick={changeHandler.bind(this, "tab3")}
                class={`inline-block p-4 rounded-t-lg ${
                  tab.tab3
                    ? "text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active"
                    : "hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b"
                }`}
              >
                TOKEN
              </button>
            </li>
            <li class="mr-2">
              <button
                onClick={changeHandler.bind(this, "tab4")}
                class={`inline-block p-4 rounded-t-lg ${
                  tab.tab4
                    ? "text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active"
                    : "hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b"
                }`}
              >
                CLIENT
              </button>
            </li>
            <li class="mr-2">
              <button
                onClick={changeHandler.bind(this, "tab5")}
                class={`inline-block p-4 rounded-t-lg ${
                  tab.tab5
                    ? "text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active"
                    : "hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b"
                }`}
              >
                LEGAL
              </button>
            </li>
          </ul>
        </div>

        {/* Contents of Tab Bar */}
        <div className="p-4">
          {tab.tab1 && (
            <div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    What is ICO Crypto?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    What cryptocurrencies can I use to purchase?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How can I participate in the ICO Token sale?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How do I benefit from the ICO Token?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab.tab2 && (
            <div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Which of us ever undertakes laborious?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Their separate existence is a myth?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Pityful a rethoric question ran over her cheek?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How do I benefit from the ICO Token?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
            </div>
          )}

          {tab.tab3 && (
            <div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Which of us ever undertakes laborious?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                  Their separate existence is a myth?


                  </p>{" "}
                  <p className="text-[#637097] ">
                  Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Pityful a rethoric question ran over her cheek?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How do I benefit from the ICO Token?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
            </div>
          )}

{tab.tab4 && (
            <div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    What is ICO Crypto?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    What cryptocurrencies can I use to purchase?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How can I participate in the ICO Token sale?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How do I benefit from the ICO Token?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
            </div>
          )}
             {tab.tab5 && (
            <div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Which of us ever undertakes laborious?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Their separate existence is a myth?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    Pityful a rethoric question ran over her cheek?
                  </p>
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
                <div>
                  <p className="text-[#374574] font-semibold text-xl">
                    How do I benefit from the ICO Token?
                  </p>{" "}
                  <p className="text-[#637097] ">
                    Once ICO period is launched, You can purchased Token with
                    Etherum, Bitcoin or Litecoin. You can also tempor incididunt
                    ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SwitchTabs;
