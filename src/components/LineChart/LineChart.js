import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const data = {
        labels: [10, 20, 30, 40, 50, 60],

        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'none',
            borderWidth: 0,
            tension: 0.1,
            backgroundColor: 'rgb(75, 192, 192)',
        }]
    };
    return (
        <>
            <div className="px-5 pt-2 flex justify-between">
                <div>
                    <h1 className="text-2xl">Applications Received</h1>
                </div>
                <div className="flex">
                    <div className="px-4">
                        <h1>This Year</h1>
                    </div>
                    <div className="px-4">
                        <h1>This Month</h1>
                    </div>
                    <div className="px-4">
                        <h1>Today</h1>
                    </div>
                    <div className="px-4 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        <h1>Download Report</h1>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="px-5 pt-3 ">
                <Line
                    className="line"
                    data={data}

                    options={{ maintainAspectRatio: false }}

                />

            </div>

        </>
    );
};

export default LineChart;