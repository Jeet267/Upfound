import React, { useState } from 'react';
import { 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield,
  Lightbulb,
  Target,
  DollarSign,
  Globe
} from 'lucide-react';

export default function ApplyToList() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Basic Info
    startupName: '',
    founderName: '',
    email: '',
    phone: '',
    website: '',
    
    // Product Info
    productName: '',
    category: '',
    description: '',
    stage: '',
    
    // Additional Info
    pitchDeck: null,
    demoVideo: '',
    teamSize: '',
    experience: ''
  });

  const steps = [
    {
      title: 'Basic Information',
      description: 'Tell us about your startup and contact details'
    },
    {
      title: 'Product Details',
      description: 'Describe your innovative product or service'
    },
    {
      title: 'Additional Information',
      description: 'Share more about your team and vision'
    },
    {
      title: 'Review & Submit',
      description: 'Review your application before submission'
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Validation",
      description: "Test your product with real customers before mass production"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Working Capital",
      description: "Raise funds through pre-orders to finance manufacturing"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Build a loyal customer base and gather valuable feedback"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investor Attraction",
      description: "Demonstrate traction to attract strategic investors"
    }
  ];

  const successStories = [
    {
      company: "AirTech Innovations",
      product: "Smart Air Purifier Pro",
      raised: "₹32.5L",
      backers: 127,
      growth: "+80%"
    },
    {
      company: "GreenTech Solutions",
      product: "EcoWave Water Bottle",
      raised: "₹18.3L",
      backers: 89,
      growth: "+240%"
    },
    {
      company: "HealthTech Labs",
      product: "FitTrack Smart Band",
      raised: "₹41.2L",
      backers: 234,
      growth: "+75%"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Innovation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of successful startups who have validated their ideas, raised working capital, 
            and built communities of supporters on Upfound.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Application</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Upfound?</h2>
            <p className="text-xl text-gray-400">Turn your innovative idea into a thriving business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Startups that transformed their ideas into reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-semibold">Success Story</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{story.company}</h3>
                <p className="text-gray-400 text-sm mb-4">{story.product}</p>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-green-400 font-bold text-lg">{story.raised}</div>
                    <div className="text-gray-400 text-xs">Raised</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-lg">{story.backers}</div>
                    <div className="text-gray-400 text-xs">Backers</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-lg">{story.growth}</div>
                    <div className="text-gray-400 text-xs">Growth</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Simple steps to get your product on Upfound</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Apply</h3>
              <p className="text-gray-400 text-sm">Submit your application with product details and pitch</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
              <p className="text-gray-400 text-sm">Our team reviews your application within 5 business days</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Setup</h3>
              <p className="text-gray-400 text-sm">Create your campaign page with our guided builder</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
              <p className="text-gray-400 text-sm">Go live and start accepting pre-orders from day one</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="mb-16">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Application Form</h2>
              <p className="text-indigo-100">Tell us about your innovative product and join our platform</p>
            </div>

            {/* Progress Bar */}
            <div className="px-8 py-4 bg-gray-700 border-b border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <span className="text-sm text-gray-400">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
                </span>
              </div>
              
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-4">
                {steps.map((step, index) => (
                  <div key={index} className={`text-center flex-1 ${index <= currentStep ? 'text-indigo-400' : 'text-gray-500'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-600 text-gray-400'
                    }`}>
                      {index < currentStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    <p className="text-xs font-medium">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
                    <p className="text-gray-400 mb-6">Let's start with some basic details about you and your startup</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Startup Name *
                      </label>
                      <input
                        type="text"
                        name="startupName"
                        required
                        value={formData.startupName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        placeholder="Your startup name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Founder Name *
                      </label>
                      <input
                        type="text"
                        name="founderName"
                        required
                        value={formData.founderName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        placeholder="Primary founder name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="founder@startup.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Website (if available)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Product Details</h3>
                    <p className="text-gray-400 mb-6">Tell us about your innovative product or service</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        name="productName"
                        required
                        value={formData.productName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        placeholder="Your product name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                      >
                        <option value="">Select a category</option>
                        <option value="iot">IoT & Smart Home</option>
                        <option value="health">Health & Fitness</option>
                        <option value="sustainable">Sustainable Tech</option>
                        <option value="fmcg">FMCG</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="edtech">Education Tech</option>
                        <option value="fintech">FinTech</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Product Description *
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none resize-none"
                      placeholder="Describe your product, its features, benefits, and what makes it innovative..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Current Stage *
                    </label>
                    <select
                      name="stage"
                      required
                      value={formData.stage}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                    >
                      <option value="">Select current stage</option>
                      <option value="concept">Concept/Idea</option>
                      <option value="prototype">Prototype</option>
                      <option value="mvp">MVP Ready</option>
                      <option value="testing">Beta Testing</option>
                      <option value="production">Ready for Production</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                    <p className="text-gray-400 mb-6">Help us understand your team and vision better</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Pitch Deck (PDF)
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm mb-2">Upload your pitch deck (PDF, max 10MB)</p>
                      <button type="button" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        Choose File
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Demo Video URL
                    </label>
                    <input
                      type="url"
                      name="demoVideo"
                      value={formData.demoVideo}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                      placeholder="https://youtube.com/watch?v=..."
                    />
                    <p className="text-gray-400 text-sm mt-1">Optional: Link to product demo or pitch video</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Team Size *
                      </label>
                      <select
                        name="teamSize"
                        required
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                      >
                        <option value="">Select team size</option>
                        <option value="1">Solo founder</option>
                        <option value="2-3">2-3 people</option>
                        <option value="4-10">4-10 people</option>
                        <option value="10+">10+ people</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Industry Experience *
                      </label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                      >
                        <option value="">Select experience</option>
                        <option value="first-time">First-time entrepreneur</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Review & Submit</h3>
                    <p className="text-gray-400 mb-6">Please review your application before submitting</p>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 text-sm">Startup Name:</span>
                        <p className="text-white font-medium">{formData.startupName || 'Not provided'}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Founder:</span>
                        <p className="text-white font-medium">{formData.founderName || 'Not provided'}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Email:</span>
                        <p className="text-white font-medium">{formData.email || 'Not provided'}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Product:</span>
                        <p className="text-white font-medium">{formData.productName || 'Not provided'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900 border border-blue-700 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">What happens next?</h4>
                    <ul className="text-blue-200 text-sm space-y-1">
                      <li>• Our team will review your application within 5 business days</li>
                      <li>• You'll receive an email with the decision and next steps</li>
                      <li>• If approved, we'll guide you through the campaign setup process</li>
                      <li>• You can start building your community and taking pre-orders</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-700">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    currentStep === 0
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Previous
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>Submit Application</span>
                    <CheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Trusted by Leading Startups</h2>
            <p className="text-gray-400">Join successful founders who chose Upfound to launch their innovations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Products Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">₹25Cr+</div>
              <div className="text-gray-300 text-sm">Funds Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">30 Days</div>
              <div className="text-gray-300 text-sm">Avg. Launch Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}