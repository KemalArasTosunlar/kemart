import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { teamMembers } from './TeamPage';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Previous sections remain the same */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-[#252B42]">About Us</h1>
          <p className="text-xl text-[#737373]">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="px-8 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Get Quote Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Team collaboration" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start gap-12 bg-white">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-red-500 text-lg font-normal">Problems trying</h2>
          <p className="text-2xl font-bold text-[#252B42]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-[#737373] leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15K", label: "Happy Customers" },
            { number: "150K", label: "Monthly Visitors" },
            { number: "15", label: "Countries Worldwide" },
            { number: "100+", label: "Top Partners" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h2 className="text-4xl font-bold text-[#252B42]">{stat.number}</h2>
              <p className="text-lg text-[#737373]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative w-full max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Video thumbnail" 
            className="w-full h-auto rounded-2xl shadow-xl"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
              <svg 
                className="w-8 h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#252B42] mb-2">{member.name}</h3>
              <p className="text-[#737373] mb-4">{member.title}</p>
              <div className="flex justify-center space-x-4">
                <Facebook className="w-5 h-5 text-blue-500" />
                <Instagram className="w-5 h-5 text-blue-500" />
                <Twitter className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Companies Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">Big Companies Are Here</h2>
          <p className="text-[#737373] max-w-2xl mx-auto">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {[1, 2, 3, 4, 5, 6].map((company) => (
            <div key={company} className="flex justify-center">
              <img 
                src={`/api/placeholder/120/60`} 
                alt={`Company logo ${company}`}
                className="h-8 w-auto grayscale opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="bg-blue-500">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white pr-8">
              <p className="text-sm font-bold mb-4">WORK WITH US</p>
              <h2 className="text-4xl font-bold mb-6">Now Let's grow Yours</h2>
              <p className="mb-8">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <button className="px-8 py-4 bg-white text-blue-500 rounded-md hover:bg-gray-100 transition-colors">
                Button
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Work with us"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;