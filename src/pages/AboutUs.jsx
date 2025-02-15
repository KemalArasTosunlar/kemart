import React from 'react';
const heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // New image URL

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex items-center justify-between p-8 bg-white">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
          <p className="mt-4 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">Get Quote Now</button>
        </div>
        <div className="w-1/2">
          <img src={heroImage} alt="Hero" className="w-full h-auto" />
        </div>
      </section>

      {/* New Section */}
      <section className="flex items-center justify-between px-8 py-4 bg-white mobile-content-9">
        <div className="w-1/2">
          <h2 className="text-red-500 text-1xl font-light">Problems trying</h2>
          <p className="mt-4 text-[#252B42] font-bold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="flex justify-between px-8 py-4 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">15K</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">150K</h2>
          <p className="text-gray-600">Monthly Visitors</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">15</h2>
          <p className="text-gray-600">Countries Worldwide</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-gray-600">Top Partners</p>
        </div>
      </section>

      {/* Video Section */}
      
      <section className="flex justify-center items-center py-8 bg-white desktop-video-3">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1739382445469-9b86a88a2fb2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Video" className="w-full h-auto rounded-lg" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-4">
            Play
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

