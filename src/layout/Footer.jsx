import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Top Section */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[1050px] mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
            {/* Brand */}
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-[#252B42] mb-4 md:mb-0">
                Kemart
              </h3>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-5">
              <Facebook className="w-6 h-6 text-[#23A6F0]" />
              <Instagram className="w-6 h-6 text-[#23A6F0]" />
              <Twitter className="w-6 h-6 text-[#23A6F0]" />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full h-0 border-t border-[#E6E6E6]" />

      {/* Main Content */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[1050px] mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="flex flex-col gap-5">
              <h5 className="font-montserrat font-bold text-base text-[#252B42]">
                Company Info
              </h5>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="font-montserrat text-sm text-[#737373]">About Us</Link>
                <Link to="/carrier" className="font-montserrat text-sm text-[#737373]">Carrier</Link>
                <Link to="/hiring" className="font-montserrat text-sm text-[#737373]">We are hiring</Link>
                <Link to="/blog" className="font-montserrat text-sm text-[#737373]">Blog</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-5">
              <h5 className="font-montserrat font-bold text-base text-[#252B42]">
                Legal
              </h5>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="font-montserrat text-sm text-[#737373]">About Us</Link>
                <Link to="/carrier" className="font-montserrat text-sm text-[#737373]">Carrier</Link>
                <Link to="/hiring" className="font-montserrat text-sm text-[#737373]">We are hiring</Link>
                <Link to="/blog" className="font-montserrat text-sm text-[#737373]">Blog</Link>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              <h5 className="font-montserrat font-bold text-base text-[#252B42]">
                Features
              </h5>
              <div className="flex flex-col gap-3">
                <Link to="/business" className="font-montserrat text-sm text-[#737373]">Business Marketing</Link>
                <Link to="/user" className="font-montserrat text-sm text-[#737373]">User Analytic</Link>
                <Link to="/live" className="font-montserrat text-sm text-[#737373]">Live Chat</Link>
                <Link to="/unlimited" className="font-montserrat text-sm text-[#737373]">Unlimited Support</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-5">
              <h5 className="font-montserrat font-bold text-base text-[#252B42]">
                Resources
              </h5>
              <div className="flex flex-col gap-3">
                <Link to="/ios" className="font-montserrat text-sm text-[#737373]">IOS & Android</Link>
                <Link to="/demo" className="font-montserrat text-sm text-[#737373]">Watch a Demo</Link>
                <Link to="/customers" className="font-montserrat text-sm text-[#737373]">Customers</Link>
                <Link to="/api" className="font-montserrat text-sm text-[#737373]">API</Link>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-5">
              <h5 className="font-montserrat font-bold text-base text-[#252B42]">
                Get In Touch
              </h5>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full h-[58px] bg-[#F9F9F9] border border-[#E6E6E6] rounded-[5px] pl-5 pr-[125px] font-montserrat text-sm text-[#737373]"
                  />
                  <button className="absolute right-0 top-0 h-full w-[117px] bg-[#23A6F0] rounded-r-[5px] font-montserrat text-sm text-white">
                    Subscribe
                  </button>
                </div>
                <p className="font-montserrat text-xs text-[#737373]">
                  Lorem impsum dolor amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="w-full max-w-[1050px] mx-auto px-4 py-6">
          <p className="font-montserrat text-sm text-center md:text-left text-[#737373]">
            Made With Love By Figmaland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
