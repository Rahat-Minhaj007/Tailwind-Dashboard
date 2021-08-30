import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    return (
        <>
            <div className="px-5 pt-2 progress">
                <h1 className="text-xl">Total Applications</h1>
                <div className="flex justify-around pt-5">
                    <div className="bg-indigo-500 rounded-full text-xl h-3 w-3 mt-2">

                    </div>
                    <h1 className="text-indigo-500">Application</h1>
                    <li className="pt-3">
                        <span className="bar progressColor1"><span className="b1 progressColor1"></span></span>
                    </li>
                </div>

                <div className="flex justify-around pt-5">
                    <div className="bg-yellow-500 rounded-full text-xl h-3 w-3 mt-2">

                    </div>
                    <h1 className="text-yellow-500">Pending</h1>
                    <li className="pt-3">
                        <span className="bar progressColor2" ><span className="b2 progressColor2"></span></span>
                    </li>
                </div>

                <div className="flex justify-around pt-5">
                    <div className="bg-red-500 rounded-full text-xl h-3 w-3 mt-2">

                    </div>
                    <h1 className="text-red-500">Canceled</h1>
                    <li className="pt-3">
                        <span className="bar progressColor3" ><span className="b3 progressColor3"></span></span>
                    </li>
                </div>

                <div className="flex justify-around pt-5">
                    <div className="bg-green-500 rounded-full text-xl h-3 w-3 mt-2">

                    </div>
                    <h1 className="text-green-500">Successful</h1>
                    <li className="pt-3">
                        <span className="bar progressColor4" ><span className="b4 progressColor4"></span></span>
                    </li>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;