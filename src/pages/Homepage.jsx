import React from 'react';

// --- SVG Icons ---
// Using SVG components for icons is a modern practice.
// They are lightweight, scalable, and can be easily styled with CSS.

const LeafIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M11 19c1.5-3.5-.5-5.5-1-6" />
    <path d="M14 10c-5.5 2.5-.8 6.4-3 10" />
    <path d="M13 19c-1.5-3.5.5-5.5 1-6" />
    <path d="M10 10a2.5 2.5 0 0 0-5 0c0 1.4 1.1 2.5 2.5 2.5S10 11.4 10 10z" />
    <path d="M14 4a2.5 2.5 0 0 0 5 0c0-1.4-1.1-2.5-2.5-2.5S14 2.6 14 4z" />
  </svg>
);

const BrainCircuitIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.993.142" />
    <path d="M18 13a3 3 0 1 0-4.42 2.495" />
    <path d="M5 13a3 3 0 1 0-2.99 3.142" />
    <path d="M12 21a3 3 0 1 0 5.993-.142" />
    <path d="M20 5a3 3 0 1 0-2.58 4.505" />
    <path d="M4 18a3 3 0 1 0 5.993-.142" />
    <path d="M14.61 3.41a3.023 3.023 0 0 0-2.613-.27" />
    <path d="m2.11 9.11-.223.13" />
    <path d="M10.15 3.23 9.88 3.36" />
    <path d="M21.89 9.11 22.11 9" />
    <path d="m14 20.7-.27.13" />
    <path d="m9.9 20.77.27.13" />
    <path d="M5.5 15.5h.01" />
    <path d="M18.5 15.5h.01" />
    <path d="M12 15.5h.01" />
    <path d="M12 8.5h.01" />
    <path d="M15.5 5.5h.01" />
    <path d="M8.5 5.5h.01" />
    <path d="m6.41 11.61.13.22" />
    <path d="m3.41 6.39.13.22" />
    <path d="m20.59 6.39-.13.22" />
    <path d="M17.41 11.41.13.22" />
    <path d="m11.87 18.68.13.22" />
    <path d="m8.13 18.68-.13.22" />
  </svg>
);

const LibraryIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </svg>
);

const UsersIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);


// --- Placeholder Components (as they were imported before) ---

const LossBarGraph = () => (
    <section id="statistics" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Understand the Impact</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
                Crop diseases can lead to significant losses. Our platform helps you mitigate these risks effectively.
            </p>
        </div>
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             <div className="flex justify-between items-end h-64 space-x-2 sm:space-x-4">
                <div className="text-center flex-1">
                    <div className="bg-green-200 rounded-t-lg w-full" style={{height: '40%'}} />
                    <p className="text-sm mt-2 font-medium text-gray-600">Corn</p>
                </div>
                <div className="text-center flex-1">
                    <div className="bg-green-300 rounded-t-lg w-full" style={{height: '75%'}} />
                    <p className="text-sm mt-2 font-medium text-gray-600">Tomato</p>
                </div>
                <div className="text-center flex-1">
                    <div className="bg-green-200 rounded-t-lg w-full" style={{height: '60%'}} />
                    <p className="text-sm mt-2 font-medium text-gray-600">Potato</p>
                </div>
                <div className="text-center flex-1">
                    <div className="bg-green-400 rounded-t-lg w-full" style={{height: '90%'}} />
                    <p className="text-sm mt-2 font-medium text-gray-600">Grapes</p>
                </div>
                <div className="text-center flex-1">
                    <div className="bg-green-200 rounded-t-lg w-full" style={{height: '55%'}} />
                    <p className="text-sm mt-2 font-medium text-gray-600">Apple</p>
                </div>
            </div>
            <p className="text-center mt-6 text-gray-500 text-sm">Illustrative data showing potential crop loss reduction.</p>
        </div>
      </div>
    </section>
);

const StepScroll = () => (
    <section id="how-it-works" className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple Steps to a Healthier Harvest</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Follow our streamlined process to protect your crops.
                </p>
            </div>
            <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                 {/* Step 1 */}
                <div className="text-center">
                    <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16 mx-auto mb-6 border-2 border-green-200">
                        <span className="text-2xl font-bold text-green-700">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Upload Image</h3>
                    <p className="mt-2 text-gray-600">Snap a photo of the affected plant and upload it to our platform.</p>
                </div>
                 {/* Step 2 */}
                <div className="text-center">
                    <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16 mx-auto mb-6 border-2 border-green-200">
                        <span className="text-2xl font-bold text-green-700">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">AI Analysis</h3>
                    <p className="mt-2 text-gray-600">Our AI model instantly analyzes the image to identify potential diseases.</p>
                </div>
                 {/* Step 3 */}
                <div className="text-center">
                    <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16 mx-auto mb-6 border-2 border-green-200">
                        <span className="text-2xl font-bold text-green-700">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Get Solutions</h3>
                    <p className="mt-2 text-gray-600">Receive a detailed diagnosis along with treatment and prevention tips.</p>
                </div>
            </div>
        </div>
    </section>
);


const ReviewSection = () => (
  <section id="reviews" className="py-20 sm:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Farmers Worldwide</h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          See what our community is saying about Agro Shield.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Review 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-600">"Agro Shield is a game-changer. The AI diagnosis saved my tomato crop this season. Highly recommended!"</p>
          <div className="mt-6 flex items-center">
            <img className="h-12 w-12 rounded-full object-cover" src="https://placehold.co/100x100/E2E8F0/4A5568?text=JS" alt="John Smith"/>
            <div className="ml-4">
              <p className="font-semibold text-gray-800">John Smith</p>
              <p className="text-sm text-gray-500">Tomato Farmer</p>
            </div>
          </div>
        </div>
        {/* Review 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-600">"The resource library is fantastic. I've learned so much about sustainable farming practices."</p>
          <div className="mt-6 flex items-center">
            <img className="h-12 w-12 rounded-full object-cover" src="https://placehold.co/100x100/E2E8F0/4A5568?text=AW" alt="Aisha Wong"/>
            <div className="ml-4">
              <p className="font-semibold text-gray-800">Aisha Wong</p>
              <p className="text-sm text-gray-500">Organic Farmer</p>
            </div>
          </div>
        </div>
        {/* Review 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-600">"Connecting with other experts in the community has been invaluable for my vineyard."</p>
          <div className="mt-6 flex items-center">
            <img className="h-12 w-12 rounded-full object-cover" src="https://placehold.co/100x100/E2E8F0/4A5568?text=RC" alt="Carlos Rodriguez"/>
            <div className="ml-4">
              <p className="font-semibold text-gray-800">Carlos Rodriguez</p>
              <p className="text-sm text-gray-500">Vineyard Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">Agro Shield</h3>
                    <p className="mt-2 text-gray-400">Smart solutions for healthy crops.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                        <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold">Support</h4>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                     <h4 className="font-semibold">Follow Us</h4>
                     {/* Placeholder for social media icons */}
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Agro Shield. All rights reserved.
            </div>
        </div>
    </footer>
);

// --- New "Features" Component ---
const FeaturesSection = () => (
    <section id="features" className="py-20 sm:py-32 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Complete Toolkit for Crop Protection</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Agro Shield provides everything you need to diagnose issues, access knowledge, and get help from a thriving community.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200/80">
                    <div className="flex items-center justify-center bg-green-100 rounded-xl w-16 h-16 mx-auto mb-6">
                        <BrainCircuitIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">AI-Powered Diagnosis</h3>
                    <p className="mt-2 text-gray-600">Get instant, accurate disease identification from a single image.</p>
                </div>
                 {/* Feature 2 */}
                <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200/80">
                    <div className="flex items-center justify-center bg-green-100 rounded-xl w-16 h-16 mx-auto mb-6">
                        <LibraryIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Vast Resource Library</h3>
                    <p className="mt-2 text-gray-600">Access articles, guides, and best practices for crop management.</p>
                </div>
                 {/* Feature 3 */}
                <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200/80">
                    <div className="flex items-center justify-center bg-green-100 rounded-xl w-16 h-16 mx-auto mb-6">
                        <UsersIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Expert Community</h3>
                    <p className="mt-2 text-gray-600">Connect with agronomists and experienced farmers for advice.</p>
                </div>
            </div>
        </div>
    </section>
)


// --- Main App Component ---
const App = () => {
  return (
    <div className="bg-green-50/50">
      
      {/* Hero Section */}
      <main className="overflow-hidden">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                Smart Solutions for <span className="text-green-600">Healthy Crops</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Leverage AI to diagnose crop diseases, access vital resources, and connect with a community of experts. Protect your harvest with Agro Shield.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                 <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                </button>
                 <button className="bg-white text-gray-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 border border-gray-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column: SVG Illustration */}
            <div className="flex justify-center items-center p-4">
               <LeafIcon className="w-full h-auto max-w-md text-green-400" />
            </div>

          </div>
        </div>

        {/* --- All other sections --- */}
        <FeaturesSection />
        <LossBarGraph />
        <StepScroll />
        <ReviewSection />
        <Footer />
        
      </main>
    </div>
  );
};

export default App;
