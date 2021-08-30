import React from 'react';
import ApplicantsList from '../../ApplicantsList/ApplicantsList';
import CampaignButton from '../../CampaignButton/CampaignButton';
import CampaignStats from '../../CampaignStats/CampaignStats';
import CircularProgress from '../../CircularProgress/CircularProgress';
import DoughnutBar from '../../DoughnutBar/DoughnutBar';
import LineChart from '../../LineChart/LineChart';
import Notification from '../../Notification/Notification';
import ProgressBar from '../../ProgressBar/ProgressBar';
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

                    <div className="bg-black  p-3 rounded m1">
                        <CircularProgress title="Total Applications" percentage="76" num1={7897} num2={3.76} color={"green"} arrow={"M8 7l4-4m0 0l4 4m-4-4v18"} pathClr={"rgba(5, 150, 105)"} />
                    </div>
                    <div className="bg-black p-3 rounded m2">
                        <CircularProgress title="Short Listed Candidates" percentage="48" num1={5821} num2={1.76} color={"indigo"} arrow={"M8 7l4-4m0 0l4 4m-4-4v18"} pathClr={"rgba(79, 70, 229)"} />
                    </div>
                    <div className="bg-black p-3 rounded m3">
                        <CircularProgress title="Selected Candidates" percentage="37" num1={1891} num2={0.66} color={"red"} arrow={"M16 17l-4 4m0 0l-4-4m4 4V3"} pathClr={"rgba(220, 38, 38)"} />
                    </div>


                    <div className="bg-black p-3 rounded-xl  m4">
                        <Notification />
                    </div>

                    <div className="bg-black p-3 rounded-xl m5">
                        <LineChart />
                    </div>
                    <div className="bg-black p-3 rounded-xl m6">
                        <ProgressBar />
                    </div>
                    <div className="bg-black p-3 rounded-xl m7">
                        <ApplicantsList />
                    </div>
                    <div className="bg-black p-3 rounded-xl m8">
                        <CampaignStats />
                    </div>
                    <div className="bg-black p-3 rounded-xl m9">
                        <DoughnutBar />
                    </div>

                    <div className="bg-black p-3 rounded-xl m10">
                        <CampaignButton />
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Dashboard;