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

// --- SVG Quote Icon Component ---
const QuoteIcon = ({ className }) => (
  <svg
    className={className}
    width="42"
    height="34"
    viewBox="0 0 42 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4 34H0L10.5 0H21L15.4 34ZM36.4 34H21L31.5 0H42L36.4 34Z"
      fill="currentColor"
    />
  </svg>
);


// --- Testimonial Card Component ---
const TestimonialCard = ({ name, title, quote, image, rating, rotation }) => (
    <div className="flex-shrink-0 w-[350px] md:w-[450px] mx-4 group relative">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-green-800/40 rounded-2xl transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 -inset-1 blur-md"></div>
        
        {/* Gradient Border */}
        <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-green-400/30 via-gray-800/50 to-green-800/30 h-full">
            <div className="flex flex-col h-full bg-gray-900/90 backdrop-blur-xl p-8 rounded-[14px]">
                <QuoteIcon className="absolute top-6 left-6 text-green-800/80 w-8 h-8" />
                <div className="flex-grow pt-8">
                    <p className="text-gray-300 text-lg leading-relaxed">"{quote}"</p>
                </div>
                <div className="flex items-center mt-6">
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-green-400 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    <div className="ml-4">
                        <h4 className="text-xl font-semibold text-white">{name}</h4>
                        <p className="text-green-400 text-sm">{title}</p>
                        <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon
                                    key={i}
                                    className={`w-5 h-5 ${
                                    i < rating ? 'text-yellow-400' : 'text-gray-700'
                                    }`}
                                />
                            ))}
                        </div>
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

      <div className="font-sans w-full flex flex-col items-center justify-center relative overflow-hidden py-20">
        {/* The marquee container */}
        <div className="relative w-full max-w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}>
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

