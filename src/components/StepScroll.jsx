import React, { useState, useEffect, useRef } from 'react';

// Define the content for each step
const steps = [
  {
    title: 'Step 1: Snap a Photo',
    description: 'Take a clear, high-resolution picture of the affected part of your crop. Ensure good lighting for the best results.',
    image: 'https://images.unsplash.com/photo-1587883988358-69a3857fb74e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Step 2: Upload to Agro Shield',
    description: 'Use our simple interface to upload your image. You can drag and drop or browse from your device in seconds.',
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Step 3: AI-Powered Analysis',
    description: 'Our advanced AI model analyzes the image against a vast database of crop diseases to identify patterns and symptoms.',
    image: 'https://images.unsplash.com/photo-1620712943543-2858200f7426?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Step 4: Receive Your Diagnosis',
    description: 'Get an instant, easy-to-understand diagnosis along with actionable advice and treatment recommendations.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2070&auto=format&fit=crop',
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
      
      // Calculate scroll progress within the container (from 0 to 1)
      const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      // Determine the current step based on scroll progress
      const newStep = Math.floor(progress * steps.length);

      // Clamp the step to the last index to avoid out-of-bounds
      if (newStep !== activeStep && newStep < steps.length) {
        setActiveStep(newStep);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]); // Dependency array includes activeStep to avoid stale state

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-green-50/50 py-16">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 flex items-center gap-16">
          
          {/* Left Side: Step descriptions */}
          <div className="w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">How It Works</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`border-l-4 pl-6 transition-all duration-300 ${
                    activeStep === index
                      ? 'border-green-600'
                      : 'border-gray-300'
                  }`}
                >
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                    activeStep === index
                      ? 'text-gray-800'
                      : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`mt-2 transition-opacity duration-300 ${
                    activeStep === index
                      ? 'opacity-100 text-gray-600'
                      : 'opacity-50 text-gray-500'
                  }`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Images with cross-fade effect */}
          <div className="w-1/2 h-[600px] relative flex items-center justify-center">
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
  );
};

export default HowItWorksScroller;