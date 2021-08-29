import React from 'react';

const CampaignButton = () => {
    return (
        <div className="flex justify-between items-center pt-5 pl-5">
            <a href="/" class="bg-blue-700 rounded text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 mr-6">
                Start Campaign
            </a>

            <a href="/" class="bg-red-700 rounded text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 mr-6">
                Cancel Campaign
            </a>
        </div>
    );
};

export default CampaignButton;