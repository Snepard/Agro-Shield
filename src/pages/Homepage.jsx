import React from 'react';
import LossBarGraph from '../components/LossBarGraph'; // Import the new component

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-green-50/50 pt-24"> {/* Added pt-24 to give space for fixed navbar */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Smart Solutions for <span className="text-green-600">Healthy Crops</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Leverage AI to diagnose crop diseases, access vital resources, and connect with a community of experts. Protect your harvest with Agro Shield.
            </p>
            <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-300">
              Get Started
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            
            <img 
              src="https://images.unsplash.com/photo-1622383798335-326a0958434f?q=80&w=2070&auto=format&fit=crop" 
              alt="Healthy crop field" 
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

        </div>
      </div>

      {/* --- New: Bar Graph Section --- */}
      <div className="w-full">
        <LossBarGraph />
      </div>
      {/* --- End New --- */}

    </div>
  );
};

export default LandingPage;