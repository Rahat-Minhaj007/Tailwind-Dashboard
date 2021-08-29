import React from 'react';
import img from "../../image/pic.svg";
import './Notification.css';

const Notification = () => {
    return (
        <div className="text-center pt-2">
            <h1 className="text-medium font-semibold">Hello, Rahat Minhaj</h1>
            <h1 >You have <span className="text-blue-700 font-medium">8</span> new applications today</h1>
            <div className="flex justify-center pt-3">
                <img className="h-36 w-full " src={img} alt="" />
            </div>

        </div>
    );
};

export default Notification;