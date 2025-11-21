import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gop-light">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute top-4 -left-4 w-full h-full border-4 border-gop-red rounded-lg hidden md:block"></div>
                        <img 
                            src="/ccrw-group.jpg" // Replace with your local image file named ccrw-group.jpg
                            onError={(e) => {
                                e.currentTarget.src = "https://perch-saffron-9lfh.squarespace.com/s/486793110_1041042168055107_7223404460070916160_n.jpg";
                            }}
                            alt="Covington County Republican Women Group Gathering" 
                            className="rounded-lg shadow-xl w-full relative z-10 aspect-[4/3] object-cover object-center"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <h4 className="text-gop-red font-bold tracking-widest uppercase mb-2">Our Purpose</h4>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                            Building a Stronger Future Together
                        </h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            The Covington County Republican Women (CCRW) is a proud member of the Mississippi Federation of Republican Women (MFRW) and the National Federation of Republican Women (NFRW).
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Founded on the principles of effective government and community service, we work to recruit, train, and elect Republican candidates. We advocate for the Party's philosophy and initiatives while empowering women of all ages, ethnicities, and backgrounds in the political process.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-slate-700 font-medium">
                                <span className="w-2 h-2 bg-gop-red rounded-full"></span>
                                Promoting Political Education
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-medium">
                                <span className="w-2 h-2 bg-gop-red rounded-full"></span>
                                Fostering Loyalty to the Republican Party
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 font-medium">
                                <span className="w-2 h-2 bg-gop-red rounded-full"></span>
                                Supporting Community Service
                            </li>
                        </ul>
                        <a 
                            href="#join" 
                            className="inline-block border-2 border-gop-dark text-gop-dark hover:bg-gop-dark hover:text-white font-bold py-3 px-8 rounded transition-colors"
                        >
                            Read Our Bylaws
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;