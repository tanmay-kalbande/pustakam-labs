import React, { useState, useEffect } from 'react';
import { Zap, Binary, Cpu, HardDriveDownload, ChevronRight, MoveRight, Send, X, Github, Twitter, BookOpen, Linkedin, Book, Flame, Atom } from 'lucide-react';
import NebulaBackground from './NebulaBackground';

interface LandingPageProps {
    onLogin: () => void;
    onGetStarted: () => void;
    onShowAbout?: () => void;
    onShowTerms?: () => void;
    onShowPrivacy?: () => void;
}

const LandingPage = ({ onLogin, onGetStarted, onShowAbout, onShowTerms, onShowPrivacy }: LandingPageProps) => {
    const [activeTab, setActiveTab] = useState<'home' | 'street' | 'stellar'>('home');
    const [showPromo, setShowPromo] = useState(true);

    useEffect(() => {
        const promoDismissed = localStorage.getItem('promo_dismissed');
        if (promoDismissed) {
            setShowPromo(false);
        }
    }, []);

    const handleDismissPromo = () => {
        setShowPromo(false);
        localStorage.setItem('promo_dismissed', 'true');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'street':
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                            <Flame className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                            Street Mode
                        </h1>
                        <p className="text-xl md:text-2xl text-cyan-400 font-medium tracking-wide mb-6">Action Oriented • Raw • Direct</p>
                        <p className="text-white/40 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
                            Raw, direct, and aggressive. Cuts through the noise to give you actionable steps. Best for motivation and "how-to" guides.
                            Generates content that pushes you to execute immediately.
                        </p>
                        <button
                            onClick={onGetStarted}
                            className="px-8 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 rounded-full text-sm font-medium tracking-wide text-cyan-400 hover:text-cyan-300 transition-all group flex items-center gap-2"
                        >
                            <span>Start Street Mode</span>
                            <MoveRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                );
            case 'stellar':
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                            <Atom className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                            Stellar Mode
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-400 font-medium tracking-wide mb-6">Deep Learning • Academic • Structured</p>
                        <p className="text-white/40 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
                            Academic, structured, and thorough. Builds a complete mental model with theory and examples. Best for deep understanding and mastering complex topics.
                        </p>
                        <button
                            onClick={onGetStarted}
                            className="px-8 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 rounded-full text-sm font-medium tracking-wide text-purple-400 hover:text-purple-300 transition-all group flex items-center gap-2"
                        >
                            <span>Start Stellar Mode</span>
                            <MoveRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                );
            case 'home':
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-in fade-in zoom-in duration-500">
                        <div className="relative z-10 max-w-4xl mb-8">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white mb-2">
                                Your Infinite
                            </h1>
                            <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/40 block">Knowledge Engine</span>
                        </div>

                        <p className="text-white/40 text-sm md:text-base max-w-xl leading-relaxed mb-10">
                            Generate personalized learning guides with AI. From vision to ethereal archive in four neural steps.
                        </p>

                        <button
                            onClick={onGetStarted}
                            className="relative z-10 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-sm font-medium tracking-wide text-white/90 hover:text-white transition-all group flex items-center gap-2"
                        >
                            <span>Start Learning Now</span>
                            <MoveRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                );
        }
    };

    return (
        <div className="h-screen w-screen bg-black text-white selection:bg-white/20 selection:text-white overflow-hidden font-sans flex flex-col relative">
            <NebulaBackground />

            {/* Promo Banner - Fixed absolute */}
            {showPromo && (
                <div className="absolute top-24 right-6 z-50 animate-in slide-in-from-right fade-in duration-500">
                    <div className="flex items-center gap-3 pl-4 pr-10 py-3 bg-cyan-950/40 backdrop-blur-md border border-cyan-500/20 rounded-xl shadow-2xl relative group">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <div className="flex flex-col">
                            <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">Limited Offer</span>
                            <span className="text-white text-xs font-medium">1 Year Free Membership</span>
                        </div>
                        <button
                            onClick={handleDismissPromo}
                            className="absolute top-2 right-2 p-1 text-white/20 hover:text-white/80 hover:bg-white/10 rounded-full transition-all"
                        >
                            <X size={12} />
                        </button>
                    </div>
                </div>
            )}


            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
                        <img src="/white-logo.png" alt="Pustakam AI Logo" className="w-6 h-6 opacity-90" />
                        <span className="text-white/90 font-semibold text-sm tracking-tight">Pustakam<span className="text-white/40">AI</span></span>
                    </div>

                    {/* Navigation Tabs */}
                    <nav className="hidden md:flex items-center p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`px-6 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === 'home' ? 'bg-white/10 text-white shadow-lg' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setActiveTab('street')}
                            className={`px-6 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === 'street' ? 'bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-900/20' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Street Mode
                        </button>
                        <button
                            onClick={() => setActiveTab('stellar')}
                            className={`px-6 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${activeTab === 'stellar' ? 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-900/20' : 'text-white/40 hover:text-white/70'}`}
                        >
                            Stellar Mode
                        </button>
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <button onClick={onLogin} className="text-[11px] font-medium tracking-wide opacity-50 hover:opacity-100 transition-opacity uppercase hidden sm:block">Login</button>
                    <button
                        onClick={onGetStarted}
                        className="bg-white text-black px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        Try Pustakam
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative z-10 pt-20 pb-20">
                {renderContent()}
            </main>

            {/* Fixed Footer */}
            <footer className="absolute bottom-0 left-0 right-0 z-50 px-6 py-6 border-t border-white/5 bg-black/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-[10px] md:text-[11px] font-medium tracking-wider text-white/30 uppercase">
                        <span>© {new Date().getFullYear()} PustakamAI</span>
                        <span className="hidden md:inline">•</span>
                        <span>Made by Tanmay</span>
                    </div>

                    <div className="flex items-center gap-8">
                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <a href="https://x.com/404NotTelling" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                                <Twitter size={14} />
                            </a>
                            <a href="https://github.com/tanmay-kalbande" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                                <Github size={14} />
                            </a>
                            <a href="https://linkedin.com/in/tanmay-kalbande" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                                <Linkedin size={14} />
                            </a>
                        </div>

                        <div className="h-3 w-px bg-white/10 hidden md:block" />

                        {/* Links */}
                        <div className="flex items-center gap-6">
                            <button onClick={onShowAbout} className="text-[10px] md:text-[11px] font-medium tracking-wider text-white/30 hover:text-white uppercase transition-colors">About</button>
                            <button onClick={onShowPrivacy} className="text-[10px] md:text-[11px] font-medium tracking-wider text-white/30 hover:text-white uppercase transition-colors">Privacy</button>
                            <button onClick={onShowTerms} className="text-[10px] md:text-[11px] font-medium tracking-wider text-white/30 hover:text-white uppercase transition-colors">Terms</button>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;