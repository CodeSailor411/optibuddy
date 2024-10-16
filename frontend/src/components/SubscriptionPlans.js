import React from 'react';

const SubscriptionPlans = () => {
    return (
        <div id="subscription" className="bg-gray-100 py-12">
            <div className="my-4 py-4">
                <h2 className="text-center text-3xl text-blue-900 uppercase font-bold">Subscription Plans</h2>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                    Choose the right plan for your business needs.
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-center px-4">
                {/* Basic Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-center text-blue-900">Basic</h3>
                    <p className="text-center text-gray-600 font-semibold mt-2">$19/month</p>
                    <ul className="mt-4">
                        <li className="py-2">✔️ Access to Basic Analytics</li>
                        <li className="py-2">✔️ Monthly Reports</li>
                        <li className="py-2">✔️ Email Support</li>
                    </ul>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
                        Choose Basic
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-center text-blue-900">Pro</h3>
                    <p className="text-center text-gray-600 font-semibold mt-2">$49/month</p>
                    <ul className="mt-4">
                        <li className="py-2">✔️ All Basic Features</li>
                        <li className="py-2">✔️ Advanced Analytics</li>
                        <li className="py-2">✔️ Real-time Performance Tracking</li>
                        <li className="py-2">✔️ Priority Email Support</li>
                    </ul>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
                        Choose Pro
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-center text-blue-900">Enterprise</h3>
                    <p className="text-center text-gray-600 font-semibold mt-2">$99/month</p>
                    <ul className="mt-4">
                        <li className="py-2">✔️ All Pro Features</li>
                        <li className="py-2">✔️ Customized Solutions</li>
                        <li className="py-2">✔️ Dedicated Account Manager</li>
                        <li className="py-2">✔️ 24/7 Support</li>
                    </ul>
                    <button className="bg-blue-900 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
                        Choose Enterprise
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;
