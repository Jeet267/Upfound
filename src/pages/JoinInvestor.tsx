import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Target,
  BarChart3,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

export default function JoinInvestor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    interests: [],
    experience: '',
    linkedIn: '',
    reason: ''
  });

  const benefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Discover Before Others",
      description: "Get early access to promising startups before they become mainstream and expensive"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real Traction Data",
      description: "Make informed decisions with comprehensive market validation metrics and user engagement data"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduced Investment Risk",
      description: "Invest in pre-validated products with proven market demand and customer interest"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Founder Access",
      description: "Connect directly with founders and co-invest with other experienced angels"
    }
  ];

  const portfolioHighlights = [
    {
      company: "EcoWave",
      description: "Sustainable water purification technology",
      investment: "₹15L",
      currentValue: "₹52L",
      growth: "+340%",
      status: "Unicorn Track"
    },
    {
      company: "AirTech",
      description: "Smart air quality management systems",
      investment: "₹25L",
      currentValue: "₹45L",
      growth: "+80%",
      status: "Series A"
    },
    {
      company: "HealthTrack",
      description: "AI-powered health monitoring devices",
      investment: "₹20L",
      currentValue: "₹35L",
      growth: "+75%",
      status: "Growing"
    }
  ];

  const investmentCategories = [
    {
      name: "Healthcare",
      opportunities: 12,
      avgTicket: "₹25L",
      success: "85%"
    },
    {
      name: "FinTech",
      opportunities: 8,
      avgTicket: "₹35L",
      success: "78%"
    },
    {
      name: "IoT & Smart Home",
      opportunities: 15,
      avgTicket: "₹20L",
      success: "82%"
    },
    {
      name: "Sustainable Tech",
      opportunities: 10,
      avgTicket: "₹18L",
      success: "88%"
    },
    {
      name: "FMCG",
      opportunities: 6,
      avgTicket: "₹15L",
      success: "90%"
    },
    {
      name: "Education Tech",
      opportunities: 9,
      avgTicket: "₹22L",
      success: "75%"
    }
  ];

  const metrics = [
    {
      label: "Active Investors",
      value: "200+",
      icon: <Users className="w-6 h-6" />
    },
    {
      label: "Total Invested",
      value: "₹85Cr+",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      label: "Success Rate",
      value: "85%",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      label: "Avg ROI",
      value: "3.2x",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Investor application submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Validated Startups</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Join India's most exclusive investor network. Access curated deal flow with real traction data, 
            reduced investment risk, and direct connections to promising founders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('investor-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Join Investor Network</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              View Deal Flow Demo
            </button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Invest Through Upfound?</h2>
            <p className="text-xl text-gray-400">Access to validated startups with proven market traction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Performance */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Portfolio Performance</h2>
            <p className="text-xl text-gray-400">Success stories from our investor network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((company, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{company.company}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    company.status === 'Unicorn Track' ? 'bg-purple-900 text-purple-300' :
                    company.status === 'Series A' ? 'bg-blue-900 text-blue-300' :
                    'bg-green-900 text-green-300'
                  }`}>
                    {company.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{company.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Investment</div>
                    <div className="text-white font-semibold">{company.investment}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Current Value</div>
                    <div className="text-green-400 font-semibold">{company.currentValue}</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400 font-bold text-lg">{company.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Investment Opportunities</h2>
            <p className="text-xl text-gray-400">Diversified portfolio across high-growth sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Deals</span>
                    <span className="text-white font-semibold">{category.opportunities}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg. Ticket</span>
                    <span className="text-indigo-400 font-semibold">{category.avgTicket}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Success Rate</span>
                    <span className="text-green-400 font-semibold">{category.success}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  View Opportunities
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Deal Flow Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How Our Deal Flow Works</h2>
            <p className="text-xl text-gray-400">Streamlined process from discovery to investment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Curated Deal Flow</h3>
              <p className="text-gray-400 text-sm">We source and vet startups with proven traction on our platform</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Traction Analysis</h3>
              <p className="text-gray-400 text-sm">Access detailed metrics on user engagement, revenue, and market validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Due Diligence</h3>
              <p className="text-gray-400 text-sm">Comprehensive data rooms and founder interactions for informed decisions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Investment & Support</h3>
              <p className="text-gray-400 text-sm">Invest and provide ongoing support through our network and platform</p>
            </div>
          </div>
        </div>

        {/* Investor Application Form */}
        <div id="investor-form" className="mb-16">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Join Our Investor Network</h2>
              <p className="text-indigo-100">Apply to access exclusive deal flow and investment opportunities</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Fund Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                    placeholder="Your investment firm or fund"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Range *
                  </label>
                  <select
                    name="investmentRange"
                    required
                    value={formData.investmentRange}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">Select investment range</option>
                    <option value="5-25L">₹5L - ₹25L</option>
                    <option value="25-50L">₹25L - ₹50L</option>
                    <option value="50L-1Cr">₹50L - ₹1Cr</option>
                    <option value="1Cr+">₹1Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Investment Interests * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {investmentCategories.map((category) => (
                    <label key={category.name} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(category.name)}
                        onChange={() => handleInterestChange(category.name)}
                        className="rounded border-gray-600 bg-gray-700 text-indigo-600 focus:ring-indigo-500 mr-2"
                      />
                      <span className="text-gray-300 text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Investment Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">Select experience level</option>
                    <option value="new">New to angel investing</option>
                    <option value="1-5">1-5 investments</option>
                    <option value="5-20">5-20 investments</option>
                    <option value="20+">20+ investments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join Upfound's investor network? *
                </label>
                <textarea
                  name="reason"
                  required
                  rows={4}
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none resize-none"
                  placeholder="Tell us about your investment thesis and what you're looking for..."
                ></textarea>
              </div>

              <div className="bg-blue-900 border border-blue-700 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold mb-2">Application Process</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Our team will review your application within 3-5 business days</li>
                  <li>• Qualified applicants will be invited for a brief interview</li>
                  <li>• Approved investors get immediate access to our deal flow platform</li>
                  <li>• Start reviewing and investing in validated startups right away</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <CheckCircle className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Trusted by Leading Investors</h2>
            <p className="text-gray-400">Join successful investors who trust Upfound for deal flow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SEBI Registered</h3>
              <p className="text-gray-300 text-sm">Fully compliant with Indian investment regulations</p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Secure Platform</h3>
              <p className="text-gray-300 text-sm">Bank-grade security for all transactions and data</p>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Dedicated support for all investor needs</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Investing?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our exclusive investor network and get access to the most promising 
            startups with validated market traction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('investor-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}