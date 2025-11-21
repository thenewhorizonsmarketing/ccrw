import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Contact Info */}
                    <div className="lg:w-5/12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Get In Touch</h2>
                        <p className="text-slate-600 mb-8">
                            Have questions about membership, upcoming events, or how to get involved? We'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-3 rounded-lg text-gop-red">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Mailing Address</h4>
                                    <p className="text-slate-600">P.O. Box 4425<br/>Covington, MS 39429</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-3 rounded-lg text-gop-red">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Email Us</h4>
                                    <a href="mailto:info@covingtonrepublicanwomen.org" className="text-slate-600 hover:text-gop-red transition-colors">
                                        info@covingtonrepublicanwomen.org
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-3 rounded-lg text-gop-red">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Phone</h4>
                                    <a href="tel:6011234567" className="text-slate-600 hover:text-gop-red transition-colors">
                                        (601) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="bg-slate-100 p-3 rounded-full text-slate-600 hover:bg-gop-blue hover:text-white transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="bg-slate-100 p-3 rounded-full text-slate-600 hover:bg-gop-blue hover:text-white transition-all">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="bg-slate-100 p-3 rounded-full text-slate-600 hover:bg-gop-blue hover:text-white transition-all">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-7/12 bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gop-red focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gop-red focus:border-transparent outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gop-red focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gop-red focus:border-transparent outline-none"></textarea>
                            </div>
                            <button type="button" className="w-full bg-gop-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;