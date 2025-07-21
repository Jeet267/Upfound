import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Shield, Star, Play, Heart, Clock, DollarSign, Search } from 'lucide-react';

export default function Homepage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Smart Air Purifier Pro",
      category: "IoT & Smart Home",
      image: "https://images.pexels.com/photos/8960452/pexels-photo-8960452.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 85,
      raised: "32.5L",
      target: "50L",
      backers: 127,
      daysLeft: 23,
      badge: "Trending"
    },
    {
      id: 2,
      name: "EcoWave Water Bottle",
      category: "Sustainable Tech",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 67,
      raised: "18.3L",
      target: "25L",
      backers: 89,
      daysLeft: 15,
      badge: "Hot"
    },
    {
      id: 3,
      name: "FitTrack Smart Band",
      category: "Health & Fitness",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 92,
      raised: "41.2L",
      target: "45L",
      backers: 234,
      daysLeft: 8,
      badge: "25% OFF"
    },
    {
      id: 4,
      name: "GreenTech Solar Panel",
      category: "Clean Energy",
      image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 43,
      raised: "12.8L",
      target: "30L",
      backers: 67,
      daysLeft: 35,
      badge: "New"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Early Backer",
      content: "I discovered amazing products before they hit the market. The community here is incredible!",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      content: "Upfound helped us validate our idea and raise ₹25L in pre-orders. Game changer!",
      avatar: "RK"
    },
    {
      name: "Anita Patel",
      role: "Angel Investor",
      content: "The traction data here is invaluable for making informed investment decisions.",
      avatar: "AP"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover India's next big thing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              before the rest of the world does
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with innovative startups, pre-order cutting-edge products, and be part of India's innovation ecosystem.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400">500+</div>
              <div className="text-gray-300">Products Launched</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-green-400">₹2.5Cr</div>
              <div className="text-gray-300">Funds Raised</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">10K+</div>
              <div className="text-gray-300">Early Backers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">150+</div>
              <div className="text-gray-300">Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-xl text-gray-400">Discover the most exciting innovation projects happening right now</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Trending' ? 'bg-orange-500 text-white' :
                      product.badge === 'Hot' ? 'bg-red-500 text-white' :
                      product.badge === '25% OFF' ? 'bg-green-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <button className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.category}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">{product.progress}% funded</span>
                      <span className="text-sm text-green-400">₹{product.raised} raised</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${product.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {product.backers} backers
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {product.daysLeft} days left
                    </div>
                  </div>
                  
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                  >
                    Pre-order Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold text-lg transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Startups */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Turn your innovative idea into reality
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Launch your product campaign, validate your market, and raise working capital while building a community of early supporters.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Validate Your Idea</h3>
                    <p className="text-gray-400">Test market demand before full-scale production with real customer pre-orders.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Raise Working Capital</h3>
                    <p className="text-gray-400">Generate revenue through pre-orders to fund manufacturing and operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Build Community</h3>
                    <p className="text-gray-400">Create a loyal customer base and gather valuable feedback from early adopters.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Attract Investors</h3>
                    <p className="text-gray-400">Demonstrate traction and market validation to secure investment funding.</p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/apply"
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Launch Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-3">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Campaign Performance</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Goal</span>
                      <span className="font-semibold text-gray-900">₹50L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Raised</span>
                      <span className="font-semibold text-green-600">₹32.5L</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>127 backers</span>
                      <span>23 days left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">150+</div>
                    <div className="text-gray-400 text-sm">Active Investors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">₹50Cr+</div>
                    <div className="text-gray-400 text-sm">Invested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">85%</div>
                    <div className="text-gray-400 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">+340%</div>
                    <div className="text-gray-400 text-sm">Avg Growth</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="font-semibold text-white mb-3">Recent Success Story</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg"></div>
                    <div>
                      <div className="text-white font-medium">EcoWave</div>
                      <div className="text-green-400 text-sm">+340% growth in 12 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Invest in startups with validated traction
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Access exclusive deal flow with real market validation data, reduced investment risk, and direct connections to promising founders.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Discover Before Others</h3>
                    <p className="text-gray-400">Get early access to promising startups before they become mainstream.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Real Traction Data</h3>
                    <p className="text-gray-400">Make informed decisions with comprehensive market validation metrics.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Reduced Risk</h3>
                    <p className="text-gray-400">Invest in pre-validated products with proven market demand.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Direct Connections</h3>
                    <p className="text-gray-400">Connect directly with founders and co-invest with other angels.</p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/join-investor"
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join Investor Network
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Simple steps to discover and support innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Discover</h3>
              <p className="text-gray-400 text-lg">
                Browse innovative products from verified startups. Use filters to find projects that match your interests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. Pre-order</h3>
              <p className="text-gray-400 text-lg">
                Support promising projects by pre-ordering products at early-bird prices. Help bring ideas to life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Track & Support</h3>
              <p className="text-gray-400 text-lg">
                Follow progress updates, engage with founders, and be part of the innovation journey from idea to reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-400">Hear from backers, founders, and investors who are part of our ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted By Leading Investors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['Sequoia', 'Accel', 'Matrix', 'Blume'].map((investor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-700 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-white font-semibold">{investor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <span className="text-xl font-bold text-white">Upfound</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting innovative startups with early adopters and strategic investors to build India's innovation ecosystem.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <span className="text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <span className="text-white">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                  <span className="text-white">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">For Backers</h4>
              <ul className="space-y-2">
                <li><Link to="/explore" className="text-gray-400 hover:text-white transition-colors">Explore Products</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Create Account</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Safety & Trust</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 Upfound. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}