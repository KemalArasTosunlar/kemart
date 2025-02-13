import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-[1440px] h-[488px] bg-white relative left-1/2 -translate-x-1/2">
      {/* Top Section */}
      <div className="w-[1440px] h-[142px] absolute left-1/2 -translate-x-1/2 top-0 bg-[#FAFAFA]">
        <div className="w-[1050px] h-[138px] absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-start py-[40px]">
          <div className="w-[1049.5px] h-[58px] flex flex-row items-center justify-between">
            {/* Brand */}
            <div className="w-[236px] h-[58px] flex flex-col items-start">
              <div className="w-[187px] h-[58px] relative">
                <h3 className="absolute w-[108px] h-[32px] left-0 top-[13px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                  Kemart
                </h3>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="w-[236px] h-[24px] flex justify-center">
              <div className="w-[112px] h-[24px] flex flex-row justify-center items-center gap-[20px]">
                <Facebook className="w-[24px] h-[24px] text-[#23A6F0]" />
                <Instagram className="w-[24px] h-[24px] text-[#23A6F0]" />
                <Twitter className="w-[24px] h-[24px] text-[#23A6F0]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="absolute w-[1057px] h-0 left-1/2 -translate-x-1/2 top-[138px] border-t border-[#E6E6E6]" />

      {/* Main Content */}
      <div className="w-[1440px] h-[272px] absolute left-0 top-[142px] bg-white">
        <div className="w-[1050px] h-[270px] absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-start py-[50px]">
          <div className="w-[1041px] h-[170px] flex flex-row items-start gap-[30px]">
            {/* Company Info */}
            <div className="w-[148px] h-[170px] flex flex-col items-start gap-[20px]">
              <h5 className="w-[119px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                Company Info
              </h5>
              <div className="w-[97px] h-[126px] flex flex-col items-start gap-[10px]">
                <Link to="/about" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About Us</Link>
                <Link to="/carrier" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Carrier</Link>
                <Link to="/hiring" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">We are hiring</Link>
                <Link to="/blog" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="w-[152px] h-[170px] flex flex-col items-start gap-[20px]">
              <h5 className="w-[45px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                Legal
              </h5>
              <div className="w-[97px] h-[126px] flex flex-col items-start gap-[10px]">
                <Link to="/about" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About Us</Link>
                <Link to="/carrier" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Carrier</Link>
                <Link to="/hiring" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">We are hiring</Link>
                <Link to="/blog" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</Link>
              </div>
            </div>

            {/* Features */}
            <div className="w-[148px] h-[170px] flex flex-col items-start gap-[20px]">
              <h5 className="w-[72px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                Features
              </h5>
              <div className="w-[142px] h-[126px] flex flex-col items-start gap-[10px]">
                <Link to="/business" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Business Marketing</Link>
                <Link to="/user" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">User Analytic</Link>
                <Link to="/live" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Live Chat</Link>
                <Link to="/unlimited" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Unlimited Support</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="w-[152px] h-[170px] flex flex-col items-start gap-[20px]">
              <h5 className="w-[86px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                Resources
              </h5>
              <div className="w-[106px] h-[126px] flex flex-col items-start gap-[10px]">
                <Link to="/ios" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">IOS & Android</Link>
                <Link to="/demo" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Watch a Demo</Link>
                <Link to="/customers" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Customers</Link>
                <Link to="/api" className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">API</Link>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="w-[321px] h-[131px] flex flex-col items-start gap-[20px]">
              <h5 className="w-[103px] h-[24px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                Get In Touch
              </h5>
              <div className="w-[321px] h-[87px] relative">
                <div className="absolute h-[58px] left-0 right-0 top-0">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="absolute left-0 right-0 top-0 bottom-0 bg-[#F9F9F9] border border-[#E6E6E6] rounded-[5px] pl-[20px] font-montserrat text-[14px] leading-[28px] tracking-[0.2px] text-[#737373]"
                  />
                  <button className="absolute w-[117px] right-0 top-0 bottom-0 bg-[#23A6F0] border border-[#E6E6E6] rounded-r-[5px] font-montserrat text-[14px] leading-[28px] tracking-[0.2px] text-white">
                    Subscribe
                  </button>
                </div>
                <p className="absolute w-[155px] h-[28px] left-[2px] bottom-0 font-montserrat text-[12px] leading-[28px] tracking-[0.2px] text-[#737373]">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[1440px] h-[74px] absolute left-1/2 -translate-x-1/2 top-[414px] bg-[#FAFAFA]">
        <div className="w-[1050px] h-[74px] absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-start py-[25px]">
          <div className="w-[600px] h-[24px] flex flex-row items-center">
            <p className="w-[336px] h-[24px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
