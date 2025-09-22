import React, { useState, useEffect } from 'react';

// ICONS: Using inline SVGs for a crisp, pixelated look without external dependencies.
const UpvoteIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 10 10" fill="currentColor">
        <path d="M0 6h2v4h6V6h2L5 1z" />
    </svg>
);

const DownvoteIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 10 10" fill="currentColor">
        <path d="M0 4h2V0h6v4h2L5 9z" />
    </svg>
);

const CommentIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M0 0v8h2v2h1v1h4v-1h1V8h2V0H0zm1 1h10v6H1V1zm3 8v1h2v-1H4z" />
    </svg>
);

const CreatePostIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M5 0v5H0v2h5v5h2V7h5V5H7V0H5z" />
    </svg>
);

const HotIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M4 0v1H2v2h1v1h1v1h2V4h1V3h1V1h-2V0H4zm2 6c-2 0-2 2-2 2v1h1v2h2v1h2v-1h2V9h1V8s0-2-2-2H6z" />
    </svg>
);

const NewIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
         <path d="M5.21 0l-3.5 3.5 1.42 1.42L5 3.83V12h2V3.83l1.87 1.09 1.42-1.42L6.79 0H5.21z" />
    </svg>
);

const TopIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor">
        <path d="M0 3l6-3 6 3v6l-6 3-6-3V3zm1 0v6l5 2.5V5.5L1 3zm10 0l-5 2.5v7L11 9V3zM6 1.5L2 3.5l4 2 4-2L6 1.5z" />
    </svg>
);


// MOCK DATA: Simulating real forum posts.
const initialPosts = [
    { id: 1, votes: 137, title: "My corn leaves are yellowing, any ideas?", author: "pixel_farmer_82", time: "4 hours ago", comments: 12, flair: { text: "Help", color: "bg-red-700" } },
    { id: 2, votes: 98, title: "Success! My hydroponic lettuce is thriving.", author: "hydro_guru", time: "8 hours ago", comments: 23, flair: { text: "Success!", color: "bg-green-700" } },
    { id: 3, votes: 76, title: "Best practices for organic pest control?", author: "earth_worm_jim", time: "1 day ago", comments: 45, flair: { text: "Discussion", color: "bg-blue-700" } },
    { id: 4, votes: 54, title: "Sharing my automated irrigation system setup", author: "agri_tech_pro", time: "2 days ago", comments: 33, flair: { text: "DIY", color: "bg-yellow-700" } },
    { id: 5, votes: 23, title: "PSA: Check for late blight after the recent rains.", author: "crop_protector", time: "3 days ago", comments: 19, flair: { text: "Warning", color: "bg-purple-700" } },
];


// --- COMPONENTS ---

// Custom hook for a retro typing animation
const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayedText(''); // Reset on text change
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return displayedText;
};


// 1. Navigation Bar Component
const AgroShieldNavbar = () => {
    const navItems = ['Home', 'Diagnose Crop', 'Resources', 'Community', 'About Us'];
    const [activeItem, setActiveItem] = useState('Community');

    return (
        <nav className="bg-[#0a0a0a] border-b-2 border-t-2 border-[#333] p-2 flex justify-center items-center text-sm md:text-base">
            <div className="flex items-center space-x-2 md:space-x-4">
                {navItems.map(item => (
                    <a
                        key={item}
                        href="#"
                        onClick={() => setActiveItem(item)}
                        className={`px-3 py-1 relative transition-all duration-200 ${activeItem === item ? 'text-[#00ff00]' : 'text-[#aaa] hover:text-[#fff]'}`}
                    >
                        {activeItem === item && <span className="absolute -left-1 top-1.5 animate-flicker text-[#00ff00]">&gt;</span>}
                        {item}
                        {activeItem === item && <span className="absolute -right-1 top-1.5 animate-flicker text-[#00ff00]">&lt;</span>}
                        <div className={`absolute bottom-0 left-0 w-full h-[2px] ${activeItem === item ? 'bg-[#00ff00]' : 'bg-transparent'}`}></div>
                    </a>
                ))}
            </div>
        </nav>
    );
};

// 2. Main Post Card Component
const PostCard = ({ post }) => (
    <div className="flex bg-[#111] p-2 border-2 border-[#222] hover:border-[#444] transition-colors duration-300">
        {/* Vote Section */}
        <div className="flex flex-col items-center w-10 text-[#777] pr-2">
            <button className="hover:text-green-500 transition-colors"><UpvoteIcon className="w-4 h-4" /></button>
            <span className="font-bold text-sm my-1 text-white">{post.votes}</span>
            <button className="hover:text-red-500 transition-colors"><DownvoteIcon className="w-4 h-4" /></button>
        </div>
        
        {/* Post Content Section */}
        <div className="flex-1">
            <div className="flex items-center mb-1">
                {post.flair && <span className={`text-[10px] ${post.flair.color} text-white px-1.5 py-0.5 mr-2 font-bold`}>{post.flair.text}</span>}
                <h3 className="text-white text-base md:text-lg font-bold hover:text-green-400 cursor-pointer">{post.title}</h3>
            </div>
            <p className="text-xs text-[#777]">
                submitted {post.time} by <a href="#" className="text-blue-400 hover:underline">{post.author}</a>
            </p>
            <div className="flex items-center mt-2 text-xs text-[#777] hover:text-white cursor-pointer">
                <CommentIcon className="w-3 h-3 mr-1" />
                <span>{post.comments} comments</span>
            </div>
        </div>
    </div>
);

// 3. Sidebar Component
const Sidebar = () => {
    const rules = [
        "1. Be respectful & constructive.",
        "2. No spam or off-topic content.",
        "3. Share knowledge, ask questions.",
        "4. Follow community guidelines."
    ];
    const topContributors = ["pixel_farmer_82", "hydro_guru", "agri_tech_pro"];

    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
            <div className="border-2 border-[#333] bg-[#0a0a0a] p-3">
                <h3 className="text-[#00ff00] font-bold mb-2 border-b-2 border-[#333] pb-1">ABOUT AGROSHIELD_COMM</h3>
                <p className="text-xs text-[#ccc]">A community for modern farmers, agronomists, and tech enthusiasts to discuss crop health, sustainable practices, and innovative solutions.</p>
                <div className="text-xs text-[#ccc] mt-3">
                    <p><span className="font-bold text-white">1.2k</span> Members</p>
                    <p><span className="font-bold text-white">42</span> Online</p>
                </div>
            </div>
            <div className="border-2 border-[#333] bg-[#0a0a0a] p-3">
                <h3 className="text-[#00ff00] font-bold mb-2 border-b-2 border-[#333] pb-1">RULES</h3>
                <ul className="space-y-2 text-xs text-[#ccc]">
                    {rules.map(rule => <li key={rule}>{rule}</li>)}
                </ul>
            </div>
             <div className="border-2 border-[#333] bg-[#0a0a0a] p-3">
                <h3 className="text-[#00ff00] font-bold mb-2 border-b-2 border-[#333] pb-1">TOP CONTRIBUTORS</h3>
                <ul className="space-y-2 text-xs text-blue-400">
                    {topContributors.map(user => <li key={user} className="hover:underline cursor-pointer">{user}</li>)}
                </ul>
            </div>
        </aside>
    );
};

// 4. Main Community Page Component (App)
export default function CommunityPage() {
    const [posts, setPosts] = useState(initialPosts);
    const [activeSort, setActiveSort] = useState('Hot');
    const headerText = useTypingEffect("AgroShield Community Hub");
    
    const sortOptions = [
        { name: 'Hot', icon: HotIcon },
        { name: 'New', icon: NewIcon },
        { name: 'Top', icon: TopIcon }
    ];

    return (
        <>
            {/* Injecting styles directly for custom fonts and animations */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
                    body {
                        background-color: #000;
                    }
                    .font-pixel {
                        font-family: 'VT323', monospace;
                    }
                    .crt-background {
                        background-color: #000;
                        background-image: linear-gradient(rgba(0, 255, 0, 0.05) 50%, transparent 50%);
                        background-size: 100% 4px;
                    }
                    @keyframes flicker {
                        0%, 100% { opacity: 1; text-shadow: 0 0 2px #00ff00, 0 0 4px #00ff00; }
                        50% { opacity: 0.9; text-shadow: 0 0 2px #00ff00; }
                    }
                    .animate-flicker {
                        animation: flicker 3s linear infinite;
                    }
                    .blinking-cursor::after {
                        content: '_';
                        animation: blink 1s step-end infinite;
                    }
                    @keyframes blink {
                        50% { opacity: 0; }
                    }
                `}
            </style>

            <div className="font-pixel min-h-screen crt-background">
                <AgroShieldNavbar />
                
                <main className="p-4 md:p-8 max-w-7xl mx-auto text-white">
                    {/* Header */}
                    <header className="mb-6 text-center">
                        <h1 className="text-3xl md:text-5xl text-[#00ff00] animate-flicker blinking-cursor inline-block">
                           {headerText}
                        </h1>
                        <p className="text-[#aaa] text-sm md:text-base mt-1">Your daily terminal for agricultural intel.</p>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Main Content */}
                        <div className="flex-1 space-y-4">
                            {/* Create Post Bar */}
                            <div className="bg-[#111] p-3 border-2 border-[#333] flex items-center gap-4">
                               <div className="w-8 h-8 bg-gray-700 border-2 border-gray-500"></div>
                               <input 
                                   type="text"
                                   placeholder="Create a new post..."
                                   className="bg-[#0a0a0a] border-2 border-[#333] text-white placeholder-[#555] p-2 w-full focus:outline-none focus:border-green-500"
                                />
                                <button className="p-2 bg-[#111] border-2 border-[#333] hover:border-green-500 hover:text-green-500 transition-colors">
                                    <CreatePostIcon className="w-5 h-5" />
                                </button>
                            </div>
                            
                            {/* Sort Options */}
                            <div className="bg-[#111] p-2 border-2 border-[#333] flex items-center gap-2">
                                {sortOptions.map(opt => {
                                    const Icon = opt.icon;
                                    const isActive = activeSort === opt.name;
                                    return (
                                        <button 
                                            key={opt.name}
                                            onClick={() => setActiveSort(opt.name)}
                                            className={`flex items-center gap-1.5 px-3 py-1 text-sm border-2 transition-colors ${isActive ? 'bg-green-900 border-green-500 text-white' : 'bg-[#222] border-transparent text-[#999] hover:border-[#555]'}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {opt.name}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Posts List */}
                            <div className="space-y-2">
                                {posts.map(post => <PostCard key={post.id} post={post} />)}
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <Sidebar />
                    </div>
                </main>
            </div>
        </>
    );
}
