import React from 'react';
import { Users, Target, Heart, Globe, Award, Lightbulb } from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Priyanshu Kumar",
      role: "Co-founder",
      bio: "IIT Madras graduate passionate about building ecosystems that empower Indian startups.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQF-vMEapaY9dA/profile-displayphoto-shrink_800_800/B4DZeMqU.HGUAc-/0/1750411598247?e=1756339200&v=beta&t=4s0chbUR8fjDxAj7kvRRkB9daeJWkn7PfyLeF0x8ZsY"
    },
    {
      name: "Abhijeet Kumar Shah",
      role: "CTO",
      bio: "NST Delhi technologist focused on scalable architecture, innovation platforms, and ecosystem development.",
      image: "AS"
    },
    {
      name: "Riya Mehta",
      role: "Head of Strategy",
      bio: "Startup mentor and ecosystem builder driving strategic initiatives and partnerships.",
      image: "RM"
    },
    {
      name: "Karan Singh",
      role: "Product & Community",
      bio: "Community builder with a vision to bridge the gap between product creators and early adopters.",
      image: "KS"
    }
  ];
  

  const milestones = [
    {
      year: "2025",
      title: "Founded",
      description: "Upfound was born from the vision to democratize innovation access in India"
    },
    {
      year: "2023",
      title: "First 100 Products",
      description: "Helped 100 innovative startups launch their products and raise working capital"
    },
    {
      year: "2024",
      title: "₹10Cr+ Raised",
      description: "Facilitated over ₹10 crores in pre-orders and early-stage funding"
    },
    {
      year: "2025",
      title: "Pan-India Expansion",
      description: "Expanding to serve startups and backers across all major Indian cities"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We believe in the power of innovative ideas to transform lives and industries."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Driven",
      description: "Building a supportive ecosystem where entrepreneurs, backers, and investors thrive together."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Transparency",
      description: "Complete transparency in transactions, progress updates, and platform operations."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Make in India",
      description: "Committed to supporting and promoting Indian innovation on the global stage."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Upfound</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building India's most comprehensive platform for innovation discovery, 
            connecting visionary startups with early adopters and strategic investors to 
            create a thriving ecosystem of innovation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize access to early-stage innovation by creating a transparent, 
              secure, and efficient marketplace where startups can validate ideas, raise 
              working capital, and build communities of supporters before traditional 
              funding rounds.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To position India as the global leader in innovation discovery, where every 
              groundbreaking product finds its early supporters and strategic investors, 
              creating a self-sustaining ecosystem of entrepreneurship and innovation.
            </p>
          </div>
        </div>

        {/* The Problem We Solve */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 mb-20 border border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Challenge We Address</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              The gap between innovation and market access in India is widening. 
              We're bridging this gap with a comprehensive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-red-300 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">For Startups</h3>
              <p className="text-gray-300">
                Difficulty in market validation, lack of working capital, and limited access 
                to early customers before expensive production runs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-300 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">For Backers</h3>
              <p className="text-gray-300">
                Limited discovery of innovative products, no platform to support early-stage 
                innovation, and missing out on exclusive early-bird opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-300 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">For Investors</h3>
              <p className="text-gray-300">
                Lack of validated traction data, difficulty in discovering promising startups 
                early, and limited visibility into real market demand.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Key milestones in building India's innovation ecosystem</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-indigo-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ml-12 md:ml-0 ${
                      index % 2 === 1 ? 'md:text-right' : ''
                    }`}>
                      <div className="text-2xl font-bold text-indigo-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Passionate individuals building the future of innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-800 rounded-xl p-12 mb-20 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Impact by Numbers</h2>
            <p className="text-xl text-gray-400">Our contribution to India's innovation ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-300">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">₹25Cr+</div>
              <div className="text-gray-300">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15K+</div>
              <div className="text-gray-300">Early Backers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-gray-300">Investors</div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-400">Acknowledged for our contribution to the startup ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Best Fintech Platform 2024</h3>
              <p className="text-gray-300 text-sm">Startup India Awards</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Innovation Excellence</h3>
              <p className="text-gray-300 text-sm">NASSCOM Tech Excellence Awards</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Top 50 Startups</h3>
              <p className="text-gray-300 text-sm">Economic Times Startup Awards</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Innovation Revolution</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you're a startup with the next big idea, an early adopter looking for 
            innovative products, or an investor seeking validated opportunities, 
            we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}