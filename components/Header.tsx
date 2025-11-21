import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Committees', href: '#committees' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gop-red rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm overflow-hidden border-2 border-white">
                            <img 
                                src="https://perch-saffron-9lfh.squarespace.com/s/486793110_1041042168055107_7223404460070916160_n.jpg" // Replace with your local image file named ccrw-group.jpg
                                onError={(e) => {
                                    e.currentTarget.src = "https://perch-saffron-9lfh.squarespace.com/s/486793110_1041042168055107_7223404460070916160_n.jpg";
                                }}
                                alt="CCRW Logo" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`flex flex-col ${scrolled || isOpen ? 'text-slate-900' : 'text-white'} transition-colors`}>
                            <span className="font-serif font-bold text-lg md:text-xl leading-none tracking-tight">Covington County</span>
                            <span className="text-xs font-medium uppercase tracking-widest opacity-90">Republican Women</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a 
                                key={item.label} 
                                href={item.href}
                                className={`text-sm font-semibold uppercase tracking-wide hover:text-gop-red transition-colors ${
                                    scrolled ? 'text-slate-600' : 'text-white'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a 
                            href="#donate" 
                            className="bg-gop-red text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gop-redDark transition-transform hover:scale-105 shadow-lg flex items-center gap-2"
                        >
                            <Heart size={16} fill="currentColor" />
                            Donate
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-8 h-8 text-slate-800" />
                        ) : (
                            <Menu className={`w-8 h-8 ${scrolled ? 'text-slate-800' : 'text-white'}`} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col p-6 gap-4">
                    {navItems.map((item) => (
                        <a 
                            key={item.label} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-3 active:text-gop-red"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a 
                        href="#donate"
                        onClick={() => setIsOpen(false)}
                        className="bg-gop-red text-white text-center py-3 rounded-lg font-bold mt-2 shadow-md flex justify-center items-center gap-2"
                    >
                        <Heart size={18} fill="currentColor" />
                        Donate Today
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;