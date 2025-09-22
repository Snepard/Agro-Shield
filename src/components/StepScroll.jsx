import React, { useState, useEffect, useRef } from 'react';

// Define the content for each step
const steps = [
  {
    title: 'Snap a Photo',
    description: 'Take a clear picture of the affected crop.',
    image: 'https://images.unsplash.com/photo-1587883988358-69a3857fb74e?q=80&w=2070&auto-format&fit-crop',
  },
  {
    title: 'Upload to Agro Shield',
    description: 'Use our simple interface to upload your image.',
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto-format&fit=crop',
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI model analyzes the image.',
    image: 'https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=2070&auto-format&fit=crop',
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
  const timeoutRef = useRef(null); // Use ref for timeout to persist across re-renders

  useEffect(() => {
    const handleScroll = () => {
      // Clear any existing timeout to reset the debounce timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout. The logic inside will only run after the user has stopped scrolling for 100ms.
      timeoutRef.current = setTimeout(() => {
        const container = containerRef.current;
        if (!container) return;

        const { top, height } = container.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;
        
        // Exit if we're not within the component's scrollable area
        if (top > window.innerHeight || top < -height) {
            return;
        }

        const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
        
        // Use Math.round to snap to the NEAREST step, creating the "hard scroll" effect
        const newStep = Math.round(progress * (steps.length - 1));

        if (newStep !== activeStep) {
          setActiveStep(newStep);
        }
      }, 50); // A short debounce period
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeStep]); // Rerun effect if activeStep changes to have the latest value in closure

  return (
    // Component height and padding reduced for a more compact feel
    <div ref={containerRef} className="relative h-[250vh] bg-white py-16">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Title is now outside the two-column flex container for proper alignment */}
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div className="flex items-center gap-16">
            {/* Left Side: Scaled down vertical steps design */}
            <div className="w-1/2 flex justify-end">
              <div className="relative">
                {/* Vertical dotted line, positioned for new circle size */}
                <div className="absolute left-6 top-0 h-full w-px border-l-2 border-dotted border-gray-300"></div>
                
                <div className="space-y-12">
                  {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    const isCompleted = activeStep > index;

                    return (
                      <div key={index} className="relative flex items-center transition-transform duration-300 transform hover:scale-105">
                        {/* Circle with number - smaller size */}
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
                        
                        {/* Text content - smaller but still bold */}
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

            {/* Right Side: Images with cross-fade effect (made smaller) */}
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

