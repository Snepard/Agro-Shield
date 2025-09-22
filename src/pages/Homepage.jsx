import React, { useState } from 'react';
import LossBarGraph from '../components/LossBarGraph';
import StepScroll from '../components/StepScroll'; // You can keep this or replace with the new HowItWorksSection
import landingImage from '../assets/landing.png';
import Footer from '../components/Footer';
import Review from '../components/ReviewSection';

// --- SVG Icons for Features ---
const FeatureIcon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const FeatureIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const FeatureIcon3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// --- New Components ---

const HeroSection = () => (
  <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-green-100/50 to-gray-50 overflow-hidden">
    <div className="container mx-auto px-6 py-12 z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Smart Solutions for a <span className="text-green-600">Thriving Harvest</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Leverage AI to diagnose crop diseases, access vital resources, and connect with a community of experts.
          </p>
          <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
            Get Started Free
          </button>
        </div>
        <div className="flex justify-center">
          <img 
            src={landingImage}
            alt="Healthy crop field" 
          />
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
    const features = [
        { icon: <FeatureIcon1 />, title: 'AI-Powered Diagnosis', description: 'Instantly identify crop diseases with our advanced AI. Just upload a photo and get an accurate diagnosis in seconds.' },
        { icon: <FeatureIcon2 />, title: 'Resource Library', description: 'Access a comprehensive database of articles, guides, and best practices for crop management and disease prevention.' },
        { icon: <FeatureIcon3 />, title: 'Expert Community', description: 'Connect with agronomists and experienced farmers. Ask questions, share insights, and grow together as a community.' },
    ];
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Everything You Need, All in One Place</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Agro Shield combines cutting-edge technology with community knowledge to give you a powerful advantage in the field.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-green-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-700">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => (
    <section className="bg-green-50/50 py-20 sm:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Simple Steps to a Healthier Harvest</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Get started in minutes and take control of your crop health.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="text-4xl font-bold text-green-600 bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">1</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Upload Image</h3>
                    <p className="text-gray-600">Snap a clear picture of the affected plant or leaf using your smartphone.</p>
                </div>
                <div className="p-6">
                    <div className="text-4xl font-bold text-green-600 bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">2</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Get Instant Analysis</h3>
                    <p className="text-gray-600">Our AI analyzes the image against a vast database to identify the disease or pest.</p>
                </div>
                <div className="p-6">
                    <div className="text-4xl font-bold text-green-600 bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">3</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Receive Actionable Advice</h3>
                    <p className="text-gray-600">Get detailed information about the issue and recommended treatment solutions.</p>
                </div>
            </div>
        </div>
    </section>
);

const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const faqs = [
        { q: "Is Agro Shield suitable for small-scale farmers?", a: "Absolutely! Agro Shield is designed to be scalable and affordable for everyone, from hobbyist gardeners to large agricultural operations." },
        { q: "How accurate is the AI diagnosis?", a: "Our AI model is continuously trained on millions of images and achieves over 95% accuracy for common crop diseases. We always recommend consulting a local expert for confirmation." },
        { q: "What crops does the app support?", a: "We support a wide range of crops including tomatoes, potatoes, corn, wheat, and many more. Our database is constantly expanding to include new plant types." },
        { q: "Is my data private and secure?", a: "Yes, we take data privacy very seriously. All uploaded images and personal information are encrypted and stored securely. We do not share your data without your consent." }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left p-5 font-semibold text-gray-800 focus:outline-none">
                                <span>{faq.q}</span>
                                <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="p-5 pt-0 text-gray-600">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="bg-green-600">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Protect Your Harvest?</h2>
            <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">Join thousands of farmers who trust Agro Shield. Get started today for free and see the difference technology can make.</p>
            <button className="mt-8 bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-50 transition-transform transform hover:scale-105 duration-300">
                Sign Up Now
            </button>
        </div>
    </section>
);


// --- Main Landing Page Component ---

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      
      {/* --- Existing components are now wrapped in sections for proper spacing and layout --- */}
      
      <section className="py-20 sm:py-24 bg-white">
        <LossBarGraph />
      </section>
      
      <section className="py-20 sm:py-24 bg-green-50/50">
        <StepScroll />
      </section>
      
      <section className="py-20 sm:py-24 bg-white">
        <Review />
      </section>
      
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;