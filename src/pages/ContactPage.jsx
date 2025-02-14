import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <div className="max-w-[800px] w-full text-center">
                <h1 className="text-[40px] font-bold text-[#252B42] mb-4">
                    Get answers to all your questions.
                </h1>
                <p className="text-[#737373] text-base mb-10 max-w-[600px] mx-auto">
                    Problems trying to resolve the conflict between the two major realms of Classical physics:
                </p>
                <a 
                    href="#" 
                    className="inline-block bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-md hover:bg-[#1f95d8] transition-colors mb-12"
                >
                    CONTACT OUR COMPANY
                </a>

                {/* Social Media Links */}
                <div className="flex justify-center gap-8">
                    <a href="#" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
