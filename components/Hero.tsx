import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/ccrw-group.jpg" // Replace with your local image file named ccrw-group.jpg
                    onError={(e) => {
                        e.currentTarget.src = "https://perch-saffron-9lfh.squarespace.com/s/486793110_1041042168055107_7223404460070916160_n.jpg";
                    }}
                    alt="Covington County Republican Women Group" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/60 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
                <div className="max-w-3xl mx-auto md:mx-0">
                    <div className="inline-block mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                        <span className="text-white text-xs md:text-sm font-bold tracking-wider uppercase">
                            Empowering Women • Strengthening Mississippi
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
                        The Conservative Powerhouse of <br/>
                        <span className="text-red-400">Covington County.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-sm">
                        Join a vibrant community dedicated to promoting conservative principles, educating the electorate, and empowering women in the political process.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a 
                            href="#join" 
                            className="px-8 py-4 bg-gop-red hover:bg-gop-redDark text-white text-base font-bold rounded-md shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Join Our Club <ArrowRight size={20} />
                        </a>
                        <a 
                            href="#about" 
                            className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 text-base font-bold rounded-md shadow-lg transition-all"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;