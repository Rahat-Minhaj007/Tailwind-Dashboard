import React from 'react';
import ap1 from '../../image/Ellipse 2.png';
import ap2 from '../../image/Ellipse 1.png';
import ap3 from '../../image/Ellipse 3.png';
import ApplicationMain from '../ReuseableComponents/ApplicationMain';

const ApplicantsList = () => {
    return (
        <>
            <div className="px-5 pt-2">
                <div className="flex justify-between">
                    <h1 className="text-xl font-medium">New Applicants</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-gray-800 text-blue-600 rounded-full font-bold " viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>

               <ApplicationMain
                  title={"Hager Coppelman"}
                  email="haggercoppelman@gmail.com"
                  img={ap1}
               />
                 <ApplicationMain
                  title={"Asher Smeeth"}
                  email="ashersmeeth@gmail.com"
                  img={ap2}
               />
                 <ApplicationMain
                  title={"Rose Jhean"}
                  email="rose.jhean@gmail.com"
                  img={ap1}
               />
                 <ApplicationMain
                  title={"Adllen Elipshan"}
                  email="adllenelipshen@gmail.com"
                  img={ap2}
               />
                 <ApplicationMain
                  title={"Asher Smeeth"}
                  email="ashersmeeth@gmail.com"
                  img={ap3}
               />
            </div>
        </>
    );
};

export default ApplicantsList;