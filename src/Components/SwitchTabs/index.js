import { useState } from 'react';

const SwitchTabs = () => {

    const [tab, setTab] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    });

    const changeHandler = (id) => {
        setTab({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            [id]: true
        });
    };

    return (
        <>
            <div className='container mx-auto'>
                {/* Tab Bar */}
                <div class="text-sm font-medium text-center text-gray-500  dark:text-gray-400 ">
                    <ul class="flex flex-wrap -mb-px justify-center">
                        <li class="mr-2">
                            <button onClick={changeHandler.bind(this, "tab1")} class={`inline-block p-4 rounded-t-lg ${tab.tab1 ? 'text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active' : 'hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b'}`}>Tab 1</button>
                        </li>
                        <li class="mr-2">
                            <button onClick={changeHandler.bind(this, "tab2")} class={`inline-block p-4 rounded-t-lg ${tab.tab2 ? 'text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active' : 'hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b'}`}>Tab 2</button>
                        </li>
                        <li class="mr-2">
                            <button onClick={changeHandler.bind(this, "tab3")} class={`inline-block p-4 rounded-t-lg ${tab.tab3 ? 'text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active' : 'hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b'}`}>Tab 3</button>
                        </li>
                        <li class="mr-2">
                            <button onClick={changeHandler.bind(this, "tab4")} class={`inline-block p-4 rounded-t-lg ${tab.tab4 ? 'text-[#39a9ff] border-[#39a9ff] dark:text-[#39a9ff] dark:border-[#39a9ff] border-b active' : 'hover:text-[#39a9ff] hover:border-[#39a9ff] dark:hover:text-[#39a9ff] hover:border-b'}`}>Tab 4</button>
                        </li>
                    </ul>
                </div>

                {/* Contents of Tab Bar */}
                <div className='p-4'>
                    {tab.tab1 && <div>
                        <p>Hello from Tab 1</p>
                    </div>}

                    {tab.tab2 && <div>
                        <p>Hi from Tab 2</p>
                    </div>}

                    {tab.tab3 && <div>
                        <p>Bye from Tab 3</p>
                    </div>}

                    {tab.tab4 && <div>
                        <p>Hello again from Tab 4</p>
                    </div>}
                </div>
            </div>

        </>
    );
};

export default SwitchTabs;