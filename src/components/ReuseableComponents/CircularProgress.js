import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const CircularProgress = ({ title, percentage, num1, num2, color,arrow,pathClr }) => {

    return (
        <>
            <div className="flex justify-between px-5">
                <div>
                    <h1 className="text-3xl">{title}</h1>
                </div>
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between px-5 pt-6">
                <div>
                    <h1 className="text-4xl">{num1}</h1>
                    <div className="flex items-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${color}-600 `} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`${arrow}`} />
                        </svg>
                        <h1 className={`text-${color}-600 text-xl`}>{num2}</h1>
                    </div>
                </div>
                <div>
                    <CircularProgressbar 
                    className="circle"
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={buildStyles({
                        textSize: '18px',
                        pathColor: `${pathClr}`,
                        textColor: `${pathClr}`,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                    />
                </div>
            </div>
        </>
    );
};

export default CircularProgress;