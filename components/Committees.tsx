import React from 'react';
import { Committee } from '../types';

const committees: Committee[] = [
    { title: 'Americanism', description: 'Promoting patriotism and understanding of government.' },
    { title: 'Campaign Activities', description: 'Coordinating volunteer hours for candidates.' },
    { title: 'Caring for America', description: 'Community service projects and outreach.' },
    { title: 'Legislation', description: 'Monitoring bills and informing members.' },
    { title: 'Literacy', description: 'Supporting educational initiatives in local schools.' },
    { title: 'Membership', description: 'Recruiting and retaining active members.' },
];

const Committees: React.FC = () => {
    return (
        <section id="committees" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Committees</h2>
                    <p className="text-slate-600">
                        Get involved! Our committees are the heartbeat of our organization. Find a place where your talents can shine.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {committees.map((committee, index) => (
                        <div key={index} className="p-6 border border-slate-100 rounded-xl hover:border-gop-red/30 hover:shadow-lg transition-all bg-slate-50 group">
                            <h3 className="text-lg font-bold text-gop-blue mb-2 group-hover:text-gop-red transition-colors">
                                {committee.title}
                            </h3>
                            <p className="text-sm text-slate-600">
                                {committee.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <a href="#volunteer" className="text-gop-red font-bold border-b-2 border-gop-red pb-1 hover:text-gop-blue hover:border-gop-blue transition-colors">
                        View All Committees & Sign Up
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Committees;