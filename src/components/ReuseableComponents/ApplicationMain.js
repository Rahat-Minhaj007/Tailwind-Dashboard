import React from 'react';

const ApplicationMain = ({ title, email, img }) => {
    return (
        <>
            <div className="flex justify-between pt-5">
                <div>
                    <div className="flex">
                        <img src={img} alt="" className="h-6 w-6 rounded-full" />
                        <h1 className="pl-2">{title}</h1>

                    </div>
                    <h1 className="text-blue-600 text-center pl-8">{email}</h1>

                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default ApplicationMain;