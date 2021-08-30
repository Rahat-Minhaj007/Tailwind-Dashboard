import React from 'react';

const CampaignStats = () => {
    return (
        <>
            <div className="pt-2 px-5 flex   justify-between">
                <div>

                    <h1 className="font-medium">Referrals & Campaign Stats</h1>
                </div>
                <div>
                    <div className="text-red-600 font-medium flex  ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        <h1>40 Campaigns Sent in total</h1>
                    </div>
                    <h1>4 Campaigns sent in last month</h1>
                </div>
            </div>

            <div className="flex justify-around   py-10 px-5 ">
                <div className="flex flex-col justify-center items-center">
                    <h1>User Reached</h1>
                    <div className="flex items-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-blue-600 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                        <h1 className={`text-blue-600 text-xl`}>0.87</h1>
                    </div>
                    <h1 className="text-3xl pt-5 ">7856</h1>

                </div>
                <div className="bg-gray-700 border-solid h-auto w-px">

                </div>

                <div className="flex flex-col   justify-center items-center">
                    <h1>Referrals</h1>
                    <div className="flex items-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-blue-600 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                        <h1 className={`text-blue-600 text-xl`}>0.7</h1>
                    </div>
                    <h1 className="text-3xl pt-5 ">0756</h1>
                </div>
                <div className="bg-gray-700 border-solid h-32 w-px">

                </div>
                <div className="flex flex-col   justify-center items-center">
                    <h1>Shares</h1>
                    <div className="flex items-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-blue-600 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                        <h1 className={`text-blue-600 text-xl`}>0.22</h1>
                    </div>
                    <h1 className="text-3xl pt-5 ">3454</h1>
                </div>
                <div className="bg-gray-700 border-solid h-32 w-px">

                </div>
                <div className="flex flex-col   justify-center items-center">
                    <h1>Applications</h1>
                    <div className="flex items-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-blue-600 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                        <h1 className={`text-blue-600 text-xl`}>0.47</h1>
                    </div>
                    <h1 className="text-3xl pt-5 ">5236</h1>
                </div>


            </div>


        </>
    );
};

export default CampaignStats;