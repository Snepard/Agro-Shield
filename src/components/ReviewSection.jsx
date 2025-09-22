import React, { useMemo } from 'react';

// --- SVG Star Icon Component ---
const StarIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Testimonial Card Component ---
const TestimonialCard = ({ name, title, quote, image, rating, rotation }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700/50 mx-4 group">
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <p className="text-gray-300 italic text-lg leading-relaxed">"{quote}"</p>
      </div>
      <div className="flex items-center mt-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-gray-700 shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div className="ml-4">
          <h4 className="text-xl font-bold text-white">{name}</h4>
          <p className="text-gray-400">{title}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --- Main App Component ---
export default function App() {
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: 'Sarah Mitchell',
      title: 'Lead Developer, TechCorp',
      quote: 'This is a game-changer. The seamless integration and modern design have significantly improved our workflow and client satisfaction. Truly impressive!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      rotation: (Math.random() - 0.5) * 8,
    },
    {
      id: 2,
      name: 'David Chen',
      title: 'Marketing Director, InnovateX',
      quote: 'The user experience is incredibly intuitive. Our team was able to adopt it overnight, and the results have been phenomenal. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      rotation: (Math.random() - 0.5) * 8,
    },
    {
      id: 3,
      name: 'Emily Carter',
      title: 'Founder, Creative Solutions',
      quote: "An absolutely essential tool for any modern business. The attention to detail in the animations and overall polish is second to none.",
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      rotation: (Math.random() - 0.5) * 8,
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      title: 'Project Manager, BuildIt',
      quote: "Our productivity has skyrocketed. The features are powerful yet easy to use, and the support team is always responsive and helpful.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      rotation: (Math.random() - 0.5) * 8,
    },
     {
      id: 5,
      name: 'Jessica Lee',
      title: 'UX/UI Designer, PixelPerfect',
      quote: "From a design perspective, this is flawless. The aesthetics are clean, modern, and engaging. It makes my work so much more enjoyable.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      rotation: (Math.random() - 0.5) * 8,
    },
    {
      id: 6,
      name: 'James Taylor',
      title: 'CEO, Visionary Inc.',
      quote: "We've seen a tangible return on investment. The efficiency gains and positive feedback from our users speak for themselves. A stellar product.",
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=250&auto=format&fit=crop',
      rating: 5,
      rotation: (Math.random() - 0.5) * 8,
    },
  ], []);

  // Duplicate the testimonials array for a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      {/* We need some global styles for the animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
         .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-gray-900 font-sans text-white min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] z-0"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[150px] rounded-full z-0"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-500/10 blur-[150px] rounded-full z-0"></div>
        
        <div className="z-10 text-center mb-12 px-4">
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Loved by Teams Everywhere
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Hear what our amazing users have to say about their experience. We're proud to power success stories across the globe.
            </p>
        </div>

        {/* The marquee container */}
        <div className="relative w-full max-w-full overflow-hidden mask-image-linear-gradient-to-r from-transparent via-white to-transparent">
          <div className="flex w-max animate-marquee">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
