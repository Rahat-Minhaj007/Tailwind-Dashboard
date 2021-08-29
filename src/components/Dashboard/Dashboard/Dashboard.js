import React from 'react';
import CircularProgress from '../../CircularProgress/CircularProgress';
import Notification from '../../Notification/Notification';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className="flex flex-row">

            <Sidebar />

            <div className="h-screen w-screen    px-10" style={{ background: "rgba(10,10,10)" }}>
                <Header />

                <div className="main pt-4 text-white">

                    <div className="bg-black  p-3 rounded m1 ">
                        <CircularProgress title="Total Applications" percentage="76" num1={7897} num2={3.76} color={"green"} arrow={"M8 7l4-4m0 0l4 4m-4-4v18"} />
                    </div>
                    <div className="bg-black p-3 rounded m2">
                        <CircularProgress title="Short Listed Candidates" percentage="48" num1={5821} num2={1.76} color={"indigo"} arrow={"M8 7l4-4m0 0l4 4m-4-4v18"} />
                    </div>
                    <div className="bg-black p-3 rounded m3">
                        <CircularProgress title="Selected Candidates" percentage="37" num1={1891} num2={0.66} color={"red"} arrow={"M16 17l-4 4m0 0l-4-4m4 4V3"} />
                    </div>


                    <div className="bg-black p-3 rounded-xl  m4">
                        <Notification />
                    </div>
                    <div className="bg-black p-3 rounded-xl m5">5</div>
                    <div className="bg-black p-3 rounded-xl m6">6</div>
                    <div className="bg-black p-3 rounded-xl m7">7</div>
                    <div className="bg-black p-3 rounded-xl m8">8</div>
                    <div className="bg-black p-3 rounded-xl m9">9</div>
                    <div className="bg-black p-3 rounded-xl m10">
                        <div className="flex justify-between items-center pt-5 pl-5">
                            <a href="/" class="bg-blue-700 rounded text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 mr-6">
                                Start Campaign
                            </a>

                            <a href="/" class="bg-red-700 rounded text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 mr-6">
                                Cancel Campaign
                            </a>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Dashboard;