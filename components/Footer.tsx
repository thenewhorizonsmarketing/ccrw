import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gop-dark text-white border-t border-slate-700">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gop-red rounded-full"></div>
                            <span className="font-serif font-bold text-lg">CCRW</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Empowering Conservative women to lead and advocate for a stronger Mississippi.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-gop-red transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-gop-red transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-gop-red transition-colors">Events</a></li>
                            <li><a href="#membership" className="hover:text-gop-red transition-colors">Membership</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-gop-red transition-colors">Members Only</a></li>
                            <li><a href="#" className="hover:text-gop-red transition-colors">MFRW Bylaws</a></li>
                            <li><a href="#" className="hover:text-gop-red transition-colors">Find Your Legislator</a></li>
                            <li><a href="#" className="hover:text-gop-red transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Stay Updated</h4>
                        <div className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded text-sm focus:outline-none focus:border-gop-red"
                            />
                            <button className="bg-gop-red text-white text-sm font-bold py-2 rounded hover:bg-red-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Covington County Republican Women. All Rights Reserved.</p>
                    <p className="mt-2">Website designed for the community.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;