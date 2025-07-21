import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  Clock, 
  Users, 
  TrendingUp, 
  Play, 
  MessageSquare, 
  ThumbsUp,
  Calendar,
  MapPin,
  Shield,
  Truck,
  Star
} from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: "Smart Air Purifier Pro",
    category: "IoT & Smart Home",
    tagline: "Breathe clean, live healthy with AI-powered air purification",
    images: [
      "https://images.pexels.com/photos/8960452/pexels-photo-8960452.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6069134/pexels-photo-6069134.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    video: "https://www.example.com/demo-video",
    progress: 65,
    raised: "32.5L",
    target: "50L",
    backers: 127,
    daysLeft: 23,
    description: `Our Smart Air Purifier Pro combines cutting-edge HEPA filtration technology with AI-powered smart features to deliver the cleanest indoor air possible. 

**Key Features:**
- 99.97% filtration efficiency for particles as small as 0.3 microns
- Smart connectivity with mobile app control
- Real-time air quality monitoring and reporting
- Whisper-quiet operation with sleep mode
- Energy-efficient design with auto-scheduling
- Filter replacement indicators and notifications

**Technical Specifications:**
- Coverage Area: Up to 500 sq ft
- CADR Rating: 350 m³/h
- Noise Level: <25dB in sleep mode
- Power Consumption: 45W maximum
- Dimensions: 35cm (H) × 25cm (W) × 25cm (D)
- Weight: 4.2kg

**What Makes It Special:**
Our proprietary AI algorithm learns your usage patterns and automatically optimizes performance for maximum efficiency while minimizing energy consumption. The integrated sensors continuously monitor air quality and adjust filtration intensity in real-time.`,
    
    tiers: [
      {
        name: "Early Bird Special",
        price: "₹12,999",
        originalPrice: "₹16,999",
        perks: [
          "Smart Air Purifier Pro (1 unit)",
          "2 HEPA filters (6 months supply)",
          "Premium mobile app access",
          "Free shipping",
          "2-year warranty"
        ],
        estimated: "March 2025",
        available: 45,
        claimed: 82
      },
      {
        name: "Family Pack",
        price: "₹24,999",
        originalPrice: "₹32,999",
        perks: [
          "Smart Air Purifier Pro (2 units)",
          "4 HEPA filters (1 year supply)",
          "Premium mobile app access",
          "Free shipping",
          "3-year warranty",
          "Priority customer support"
        ],
        estimated: "March 2025",
        available: 28,
        claimed: 45
      }
    ],
    
    startup: {
      name: "AirTech Innovations",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100",
      mission: "Making clean air accessible to everyone through innovative technology",
      location: "Bangalore, India",
      founded: "2022",
      team: [
        { name: "Rahul Sharma", role: "CEO & Co-founder", image: "RS" },
        { name: "Priya Patel", role: "CTO & Co-founder", image: "PP" },
        { name: "Amit Singh", role: "Head of Engineering", image: "AS" }
      ]
    },
    
    updates: [
      {
        id: 1,
        title: "Manufacturing Progress Update - Week 3",
        content: "Great progress this week! We've completed the initial prototype testing and the results are promising. The air purification efficiency is exceeding our expectations at 99.7% for particles as small as 0.3 microns. Our team has also finalized the smart connectivity features, and beta testing with our early supporters will begin next week.",
        date: "3 days ago",
        likes: 45,
        comments: 12,
        image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        id: 2,
        title: "Supply Chain Update & Timeline Adjustment",
        content: "We've secured partnerships with premium component suppliers which will ensure the highest quality for our final product. Due to quality commitments, delivery timeline is adjusted by 2 weeks. We believe this small delay will result in a significantly better product for our backers.",
        date: "1 week ago",
        likes: 32,
        comments: 8
      }
    ],
    
    faqs: [
      {
        question: "What's the difference between this and regular air purifiers?",
        answer: "Our Smart Air Purifier Pro features AI-powered optimization, real-time air quality monitoring, and smart connectivity that adapts to your lifestyle and usage patterns."
      },
      {
        question: "How often do I need to replace the filters?",
        answer: "HEPA filters typically last 6-8 months depending on usage and air quality. The app will notify you when it's time for replacement."
      },
      {
        question: "Is there a warranty?",
        answer: "Yes, we provide a comprehensive 2-3 year warranty (depending on your tier) covering all manufacturing defects and performance issues."
      }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTier, setSelectedTier] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/explore" className="hover:text-white transition-colors">Explore</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Media */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="bg-gray-800 rounded-xl overflow-hidden mb-6">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-full transition-colors ${
                    isWishlisted ? 'bg-red-600 text-white' : 'bg-gray-800 bg-opacity-75 text-white hover:bg-red-600'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <button className="p-2 bg-gray-800 bg-opacity-75 rounded-full text-white hover:bg-gray-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-indigo-600 bg-opacity-90 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </button>
            </div>

            {/* Image Thumbnails */}
            <div className="flex space-x-4 mb-8">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-indigo-500' : 'border-gray-700'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-700 mb-6">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'updates', label: 'Updates' },
                  { id: 'comments', label: 'Comments' },
                  { id: 'faq', label: 'FAQ' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-white'
                        : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-gray-800 rounded-xl p-8">
              {activeTab === 'description' && (
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 whitespace-pre-line">{product.description}</div>
                </div>
              )}

              {activeTab === 'updates' && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Progress Updates</h3>
                    <p className="text-gray-400">Stay updated on our development journey</p>
                  </div>
                  
                  {product.updates.map((update) => (
                    <div key={update.id} className="border-b border-gray-700 pb-8 last:border-b-0">
                      <h4 className="text-lg font-semibold text-white mb-3">{update.title}</h4>
                      {update.image && (
                        <img
                          src={update.image}
                          alt={update.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      <p className="text-gray-300 mb-4 whitespace-pre-line">{update.content}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {update.date}
                        </span>
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {update.likes} likes
                          </span>
                          <span className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {update.comments} comments
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'comments' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Questions & Answers</h3>
                    <p className="text-gray-400">Ask questions and engage with the founders</p>
                  </div>
                  
                  {/* Comment Form */}
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-4">Ask a Question</h4>
                    <textarea
                      placeholder="What would you like to know about this product?"
                      className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none resize-none"
                      rows={4}
                    ></textarea>
                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Post Question
                    </button>
                  </div>

                  {/* Sample Comments */}
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                          A
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-white">Ananya Gupta</span>
                            <span className="text-gray-400 text-sm">2 days ago</span>
                          </div>
                          <p className="text-gray-300 mb-3">How quiet is this air purifier during sleep mode? I'm a light sleeper.</p>
                          <div className="bg-gray-600 rounded-lg p-4 ml-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-semibold">R</span>
                              </div>
                              <span className="font-semibold text-white text-sm">Rahul Sharma</span>
                              <span className="text-gray-400 text-xs">Founder</span>
                            </div>
                            <p className="text-gray-300 text-sm">Great question! In sleep mode, it operates at less than 25dB, which is quieter than a whisper. Perfect for light sleepers!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Frequently Asked Questions</h3>
                    <p className="text-gray-400">Common questions about this product</p>
                  </div>
                  
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0">
                      <h4 className="font-semibold text-white mb-3">{faq.question}</h4>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Funding & Actions */}
          <div className="space-y-6">
            {/* Product Info */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h1 className="text-2xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-gray-400 mb-4">{product.tagline}</p>
              
              {/* Funding Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-green-400">₹{product.raised}</span>
                  <span className="text-gray-400">raised of ₹{product.target} goal</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${product.progress}%` }}
                  ></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-white">{product.progress}%</div>
                    <div className="text-gray-400 text-sm">funded</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{product.backers}</div>
                    <div className="text-gray-400 text-sm">backers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{product.daysLeft}</div>
                    <div className="text-gray-400 text-sm">days left</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  2-3 Year Warranty
                </div>
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-blue-400" />
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Premium Quality
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  Made in India
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Choose Your Reward</h3>
              
              <div className="space-y-4">
                {product.tiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedTier === index
                        ? 'border-indigo-500 bg-indigo-900 bg-opacity-20'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedTier(index)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-white">{tier.name}</h4>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{tier.price}</div>
                        {tier.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">{tier.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <ul className="text-sm text-gray-300 space-y-1 mb-3">
                      {tier.perks.map((perk, perkIndex) => (
                        <li key={perkIndex} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Est. delivery: {tier.estimated}</span>
                      <span>{tier.available} of {tier.available + tier.claimed} left</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-lg mt-6 transition-colors">
                Pre-order Now - {product.tiers[selectedTier].price}
              </button>
              
              <div className="text-center mt-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
            </div>

            {/* Startup Info */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">About the Team</h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={product.startup.logo}
                  alt={product.startup.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{product.startup.name}</h4>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {product.startup.location}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{product.startup.mission}</p>
              
              <div className="space-y-2 mb-4">
                {product.startup.team.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {member.image}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{member.name}</div>
                      <div className="text-gray-400 text-xs">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Contact Team
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">What Backers Say</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    P
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white text-sm font-medium">Priya S.</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">"Excited to get this! The features look amazing."</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    M
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white text-sm font-medium">Mohit K.</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">"Perfect timing! Needed this for my home office."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}