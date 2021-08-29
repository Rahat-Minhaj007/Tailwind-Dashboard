import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutBar = () => {
    const labels =[55,39,27]
    const data = {
        labels:labels,
           
        datasets: [{
           
            data: [250, 70, 100],
            backgroundColor: [
                "rgba(29, 78, 216)",
                'rgba(220, 38, 38)',
                'rgba(99, 102, 241)'
            ],
            
            borderWidth:0,
            hoverOffset: 4
        }]
    };
    return (
        <>
            <div className="flex justify-between px-5 pt-2">
                <div>
                    <h1 className="text-medium">Open Positions by Dept.</h1>
                </div>
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>
            </div>
            <div className="pt-2 ">
                <Doughnut
                    className="doughnut"
                    data={data}
                    options={{ maintainAspectRatio: false }}

                />
            </div>
        </>
    );
};

export default DoughnutBar;