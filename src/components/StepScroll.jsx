import React, { useState, useEffect, useRef } from 'react';

// Assuming your image assets are correctly placed in the 'src/assets' folder
import snapImage from '../assets/SNAP.jpg';
import uploadImage from '../assets/UPLOAD.jpeg';
import aiCheckImage from '../assets/AICHECK.jpeg';

// Define the content for each step
const steps = [
  {
    title: 'Snap a Photo',
    description: 'Take a clear picture of the affected crop.',
    image: snapImage
  },
  {
    title: 'Upload to Agro Shield',
    description: 'Use our simple interface to upload your image.',
    image: uploadImage
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI model analyzes the image.',
    image: aiCheckImage
  },
  {
    title: 'Receive Your Diagnosis',
    description: 'Get an instant, easy-to-understand diagnosis.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2070&auto-format&fit=crop',
  },
];

const HowItWorksScroller = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      // Exit if the component is not in the viewport
      if (top > window.innerHeight || top < -height) {
        return;
      }

      // Calculate scroll progress from 0 to 1
      const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      // Determine the new step, snapping to the nearest one
      const newStep = Math.round(progress * (steps.length - 1));

      // Use the functional update to avoid stale state issues
      // This ensures we always have the most recent `prevStep` to compare against
      setActiveStep(prevStep => {
        if (newStep !== prevStep) {
          return newStep;
        }
        return prevStep; // No state change needed
      });
    };

    // Add the event listener once when the component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // <-- Empty dependency array ensures this effect runs only once

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-white py-16">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="flex items-center gap-16">
            
            {/* Left side: The text steps */}
            <div className="w-1/2 flex justify-end">
              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-px border-l-2 border-dotted border-gray-300"></div>
                
                <div className="space-y-12">
                  {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    const isCompleted = activeStep > index;

                    return (
                      <div key={index} className="relative flex items-center transition-transform duration-300 transform hover:scale-105">
                        <div
                          className={`z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 ease-in-out transform
                            ${isActive ? 'bg-green-600 ring-8 ring-green-200/50 scale-110' : ''}
                            ${isCompleted ? 'bg-green-500 scale-100' : ''}
                            ${!isActive && !isCompleted ? 'bg-gray-300 scale-100' : ''}
                          `}
                        >
                          <span className={`text-base font-bold transition-colors duration-300 ${isActive || isCompleted ? 'text-white' : 'text-gray-500'}`}>
                            {index + 1}
                          </span>
                        </div>
                        
                        <div className="ml-8">
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                            {step.title}
                          </h3>
                          <p className={`mt-1 text-sm font-medium transition-opacity duration-300 ${isActive ? 'opacity-100 text-gray-600' : 'opacity-50 text-gray-500'}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right side: The fading images */}
            <div className="w-1/2 h-[450px] relative flex items-center justify-start">
              {steps.map((step, index) => (
                <img
                  key={index}
                  src={step.image}
                  alt={step.title}
                  className={`absolute w-full h-full object-cover rounded-2xl shadow-2xl transition-opacity duration-700 ease-in-out ${
                    activeStep === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksScroller;