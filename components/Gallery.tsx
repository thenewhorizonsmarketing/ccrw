import React from 'react';

const Gallery: React.FC = () => {
    // Using specific picsum IDs to ensure consistency across re-renders for the demo
    const images = [
        "https://picsum.photos/id/64/800/600",
        "https://picsum.photos/id/177/800/800",
        "https://picsum.photos/id/338/800/600",
        "https://picsum.photos/id/433/800/800",
        "https://picsum.photos/id/250/800/600",
        "https://picsum.photos/id/452/800/600"
    ];

    return (
        <section className="py-16 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Member Gallery</h2>
                        <p className="text-slate-400">Snapshots from our recent meetings and events.</p>
                    </div>
                    <a href="#gallery" className="hidden md:inline-block bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full transition-colors">
                        View All Photos
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <div 
                            key={idx} 
                            className={`relative overflow-hidden rounded-lg group ${idx === 1 ? 'row-span-2' : ''}`}
                        >
                            <img 
                                src={src} 
                                alt={`Gallery item ${idx}`} 
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold border border-white px-4 py-1 rounded">View</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center md:hidden">
                    <a href="#gallery" className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors w-full">
                        View All Photos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;