import React from 'react';
import rahat from '../../../image/rahat.jpg';

const Header = () => {
    return (
        <div class="flex flex-row justify-between  pt-5 pb-3">
            <div>
                <h1 class="text-white text-4xl">Dashboard</h1>
                <h1 className="text-blue-500 text-md pt-2">Friday, 29th Aug 2021 </h1>
            </div>
            <div>
                <div className="text-white flex flex-row pl-48">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>

                    <h1 className="text-lg pr-4">Rahat Minhaj</h1>

                    <img
                        src={rahat}
                        className="rounded-full w-8 h-8 mb-3 " alt=""
                    />

                </div>
                <div className="pt-4 flex">
                    <div>

                        <button

                            class="px-4 py-2 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>

                            <span class="pl-1">Add</span>
                        </button>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 font-bold text-white pt-3 pr-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div>
                        <input type="text" placeholder="search for applications here" className="outline-none h-9 w-60 p-3 bg-black text-gray-200" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;