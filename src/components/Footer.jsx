import React from 'react';

// Social Media Icons (re-using the pixel art style)
const TwitterIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M12 2.5a4.83 4.83 0 0 1-1.38.38 2.41 2.41 0 0 0 1.05-.28 4.87 4.87 0 0 1-1.52.58 2.41 2.41 0 0 0-1.87-.85 2.46 2.46 0 0 0-2.43 2.53 6.84 6.84 0 0 1-5-2.54 2.42 2.42 0 0 0-.3 1.25 2.45 2.45 0 0 0 1.08 2.05 2.41 2.41 0 0 1-1.1-.3l0 .03a2.45 2.45 0 0 0 1.95 2.4 2.43 2.43 0 0 1-.65.08 2.43 2.43 0 0 1-.46-.04 2.46 2.46 0 0 0 2.27 1.7 4.9 4.9 0 0 1-3.02 1.04 4.88 4.88 0 0 1-.58 0 6.83 6.83 0 0 0 3.69 1.08c4.43 0 6.85-3.8 6.85-7.1 0-.11 0-.21-.01-.32a4.9 4.9 0 0 0 1.2-1.25z" />
    </svg>
);

const FacebookIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0a6 6 0 1 0 6 6A6 6 0 0 0 6 0zm1.5 5.25h1.1l.16-1.25H7.5V3c0-.3.1-.5.5-.5h.62V1.4c-.1-.02-.45-.04-.84-.04-1 0-1.68.6-1.68 1.73v1.2H4.5v1.25h1.5v3.06H4.5V11H7.5V6.75h1.5z" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0a6 6 0 1 0 6 6A6 6 0 0 0 6 0zm3.8 2.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zM6 3.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zM6 4.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
    </svg>
);

const GithubIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0a6 6 0 1 0 6 6A6 6 0 0 0 6 0zM2.8 9.3c-.2.2-.5.3-.8.2-.3 0-.5-.2-.5-.5-.1-.3 0-.6.2-.8.2-.2.5-.3.8-.2.3 0 .5.2.5.5.1.3 0 .6-.2.8zM4.6 9.6c-.2.2-.4.4-.7.4-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.2-.7.2-.2.4-.4.7-.4.3 0 .5.1.7.3.2.2.3.5.2.7zM6.5 9.7c-.2.1-.4.3-.6.4-.3.1-.5 0-.7-.2-.2-.2-.3-.5-.1-.7.2-.1.4-.3.6-.4.3-.1.5 0 .7.2.2.2.3.5.1.7zM8.4 9.4c-.2.1-.4.2-.6.2-.3 0-.5-.1-.6-.3-.2-.2-.3-.4-.2-.6.2-.2.4-.3.6-.2.3 0 .5.1.6.3.2.2.3.4.2.6zM9.7 8.6c-.2.1-.3.2-.5.2-.2 0-.4-.1-.5-.2-.2-.2-.2-.4-.1-.6.2-.1.3-.2.5-.2.2 0 .4.1.5.2.2.2.2.4.1.6zM2.5 8c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5.1-.2.3-.3.5-.2.2.1.3.3.2.5zM3.4 7c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5.1-.2.3-.3.5-.2.2.1.3.3.2.5zM5.2 6.9c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5.1-.2.3-.3.5-.2.2.1.3.3.2.5zM7.2 7.1c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5.1-.2.3-.3.5-.2.2.1.3.3.2.5zM9.1 8c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.2-.5.1-.2.3-.3.5-.2.2.1.3.3.2.5z"/>
    </svg>
);


const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t-2 border-b-2 border-[#333] p-8 text-[#aaa] font-pixel text-sm mt-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-[#00ff00] font-bold text-lg mb-4 border-b-2 border-[#333] pb-2">AgroShield</h3>
                    <p className="text-xs">
                        Your digital terminal for agricultural intelligence. We provide modern farmers with tools, resources, and a community to grow healthier crops and a better future.
                    </p>
                    <div className="flex space-x-4 mt-4 text-[#ccc]">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors"><FacebookIcon className="w-5 h-5" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors"><GithubIcon className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-[#00ff00] font-bold text-lg mb-4 border-b-2 border-[#333] pb-2">Quick Links</h3>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#" className="hover:text-white transition-colors">Diagnose Crop</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community Hub</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Resources & Guides</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                    </ul>
                </div>

                {/* Legal & Newsletter Section */}
                <div>
                    <h3 className="text-[#00ff00] font-bold text-lg mb-4 border-b-2 border-[#333] pb-2">Legal</h3>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
                    </ul>
                    <div className="mt-6">
                        <h3 className="text-[#00ff00] font-bold text-lg mb-2">Stay Updated</h3>
                        <p className="text-xs">Subscribe to our newsletter for the latest agro-tech news.</p>
                        <form className="mt-2 flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-[#111] border-2 border-[#333] text-white text-xs p-2 w-full focus:outline-none focus:border-green-500"
                            />
                            <button 
                                type="submit" 
                                className="bg-[#00ff00] text-black text-xs font-bold px-4 py-2 hover:bg-green-500 transition-colors"
                            >
                                GO
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-xs text-[#555] border-t-2 border-[#333] pt-4">
                &copy; 2025 AgroShield. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;