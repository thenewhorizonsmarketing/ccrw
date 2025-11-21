import React from 'react';
import { Users, Calendar, Vote } from 'lucide-react';

const Features: React.FC = () => {
    return (
        <section className="py-16 bg-white -mt-10 relative z-20 rounded-t-3xl md:rounded-none">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center md:text-left">
                        <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Connect Locally</h3>
                        <p className="text-slate-600 mb-6">
                            Network with like-minded women in Covington County who share your values and vision for America.
                        </p>
                        <a href="#connect" className="text-gop-red font-bold hover:underline">Get Connected &rarr;</a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center md:text-left">
                        <div className="w-14 h-14 bg-red-100 text-red-800 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Vote size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Legislative Action</h3>
                        <p className="text-slate-600 mb-6">
                            Stay informed on House and Senate bills affecting our community and learn how to make your voice heard.
                        </p>
                        <a href="#legislative" className="text-gop-red font-bold hover:underline">View Legislation &rarr;</a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center md:text-left">
                        <div className="w-14 h-14 bg-slate-200 text-slate-800 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Calendar size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Events & Meetings</h3>
                        <p className="text-slate-600 mb-6">
                            Join us for monthly luncheons, guest speakers, and community outreach programs throughout the year.
                        </p>
                        <a href="#events" className="text-gop-red font-bold hover:underline">See Calendar &rarr;</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;