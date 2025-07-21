import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Eye, 
  MessageSquare, 
  FileText, 
  Calendar,
  Filter,
  Search,
  BarChart3,
  PieChart,
  Target,
  Briefcase,
  Star,
  Download
} from 'lucide-react';

export default function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState('portfolio');

  const portfolioData = [
    {
      id: 1,
      companyName: "AirTech Innovations",
      productName: "Smart Air Purifier Pro",
      investmentAmount: "₹25L",
      currentValuation: "₹45L",
      growth: "+80%",
      category: "IoT & Smart Home",
      investmentDate: "2023-08-15",
      status: "active",
      image: "https://images.pexels.com/photos/8960452/pexels-photo-8960452.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      companyName: "GreenTech Innovations",
      productName: "EcoWave Water Bottle",
      investmentAmount: "₹15L",
      currentValuation: "₹52L",
      growth: "+240%",
      category: "Sustainable Tech",
      investmentDate: "2023-06-20",
      status: "active",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      companyName: "HealthTech Solutions",
      productName: "FitTrack Smart Band",
      investmentAmount: "₹20L",
      currentValuation: "₹35L",
      growth: "+75%",
      category: "Health & Fitness",
      investmentDate: "2023-10-10",
      status: "active",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const dealFlow = [
    {
      id: 4,
      companyName: "SecureTech",
      productName: "Smart Home Security Kit",
      fundingGoal: "₹50L",
      traction: {
        preOrders: 156,
        conversionRate: "4.2%",
        wishlistSubscribers: 340
      },
      category: "IoT & Smart Home",
      stage: "Series A",
      valuation: "₹8Cr",
      seeking: "₹2Cr",
      image: "https://images.pexels.com/photos/8293759/pexels-photo-8293759.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 5,
      companyName: "NutriLife",
      productName: "Plant-Based Protein Bars",
      fundingGoal: "₹20L",
      traction: {
        preOrders: 98,
        conversionRate: "3.8%",
        wishlistSubscribers: 280
      },
      category: "FMCG",
      stage: "Seed",
      valuation: "₹3Cr",
      seeking: "₹75L",
      image: "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const performanceMetrics = {
    totalInvested: "₹60L",
    currentValue: "₹132L",
    totalGrowth: "+120%",
    activeInvestments: 3,
    avgGrowth: "+98%",
    bestPerformer: "EcoWave Water Bottle"
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 bg-gray-800 rounded-xl p-6 h-fit border border-gray-700">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Investor Portal</h2>
              <p className="text-gray-400 text-sm">Manage your investments and discover deals</p>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'portfolio'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Portfolio</span>
              </button>
              
              <button
                onClick={() => setActiveTab('dealflow')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'dealflow'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Target className="w-5 h-5" />
                <span>Deal Flow</span>
                <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">2</span>
              </button>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'analytics'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span>Analytics</span>
              </button>
              
              <button
                onClick={() => setActiveTab('reports')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'reports'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Reports</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'portfolio' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-white">Investment Portfolio</h1>
                    <p className="text-gray-400 mt-1">Track your investments and performance</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Export Report</span>
                  </button>
                </div>

                {/* Performance Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-400 text-sm">Total Invested</div>
                      <DollarSign className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{performanceMetrics.totalInvested}</div>
                    <div className="text-blue-400 text-sm">Across {performanceMetrics.activeInvestments} companies</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-400 text-sm">Current Value</div>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{performanceMetrics.currentValue}</div>
                    <div className="text-green-400 text-sm flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {performanceMetrics.totalGrowth}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-400 text-sm">Avg Growth</div>
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{performanceMetrics.avgGrowth}</div>
                    <div className="text-purple-400 text-sm">Portfolio average</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-400 text-sm">Best Performer</div>
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="text-lg font-bold text-white mb-2">{performanceMetrics.bestPerformer}</div>
                    <div className="text-yellow-400 text-sm">+240% growth</div>
                  </div>
                </div>

                {/* Portfolio Holdings */}
                <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-700">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold text-white">Portfolio Holdings</h2>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Search companies..."
                            className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none text-sm"
                          />
                        </div>
                        <button className="bg-gray-700 text-gray-300 p-2 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors">
                          <Filter className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      {portfolioData.map((investment) => (
                        <div key={investment.id} className="border border-gray-700 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <img
                              src={investment.image}
                              alt={investment.productName}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h3 className="text-lg font-semibold text-white mb-1">{investment.companyName}</h3>
                                  <p className="text-gray-400 text-sm">{investment.productName} • {investment.category}</p>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-white">{investment.currentValuation}</div>
                                  <div className="text-green-400 text-sm font-medium">{investment.growth}</div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                                <div>
                                  <span className="text-gray-400">Investment:</span>
                                  <div className="text-white font-medium">{investment.investmentAmount}</div>
                                </div>
                                <div>
                                  <span className="text-gray-400">Date:</span>
                                  <div className="text-white font-medium">{new Date(investment.investmentDate).toLocaleDateString()}</div>
                                </div>
                                <div>
                                  <span className="text-gray-400">Status:</span>
                                  <div className="text-green-400 font-medium capitalize">{investment.status}</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-4">
                                <button className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center space-x-1">
                                  <Eye className="w-4 h-4" />
                                  <span>View Details</span>
                                </button>
                                <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1">
                                  <MessageSquare className="w-4 h-4" />
                                  <span>Message Founders</span>
                                </button>
                                <button className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                                  <FileText className="w-4 h-4" />
                                  <span>Documents</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dealflow' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-white">Deal Flow</h1>
                    <p className="text-gray-400 mt-1">Discover validated investment opportunities</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none">
                      <option>All Categories</option>
                      <option>IoT & Smart Home</option>
                      <option>Health & Fitness</option>
                      <option>FMCG</option>
                      <option>Sustainable Tech</option>
                    </select>
                    <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none">
                      <option>All Stages</option>
                      <option>Seed</option>
                      <option>Series A</option>
                      <option>Series B</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-8">
                  {dealFlow.map((deal) => (
                    <div key={deal.id} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                      <div className="flex items-start space-x-6">
                        <img
                          src={deal.image}
                          alt={deal.productName}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">{deal.companyName}</h3>
                              <p className="text-gray-400 mb-2">{deal.productName}</p>
                              <div className="flex items-center space-x-4 text-sm">
                                <span className="bg-indigo-900 text-indigo-300 px-2 py-1 rounded-full">{deal.category}</span>
                                <span className="bg-green-900 text-green-300 px-2 py-1 rounded-full">{deal.stage}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-white mb-1">Seeking: {deal.seeking}</div>
                              <div className="text-gray-400 text-sm">Valuation: {deal.valuation}</div>
                            </div>
                          </div>
                          
                          {/* Traction Metrics */}
                          <div className="bg-gray-700 rounded-lg p-4 mb-4">
                            <h4 className="text-white font-semibold mb-3">Traction Data</h4>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <div className="text-gray-400">Pre-orders</div>
                                <div className="text-white font-bold text-lg">{deal.traction.preOrders}</div>
                              </div>
                              <div>
                                <div className="text-gray-400">Conversion Rate</div>
                                <div className="text-green-400 font-bold text-lg">{deal.traction.conversionRate}</div>
                              </div>
                              <div>
                                <div className="text-gray-400">Wishlist Subscribers</div>
                                <div className="text-blue-400 font-bold text-lg">{deal.traction.wishlistSubscribers}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                              Request Introduction
                            </button>
                            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                              <FileText className="w-4 h-4" />
                              <span>View Pitch Deck</span>
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>Message Founders</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h1 className="text-3xl font-bold text-white mb-8">Investment Analytics</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <PieChart className="w-5 h-5 mr-2" />
                      Portfolio Allocation
                    </h2>
                    <div className="h-64 flex items-center justify-center text-gray-400">
                      Portfolio allocation chart will be displayed here
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Performance Over Time
                    </h2>
                    <div className="h-64 flex items-center justify-center text-gray-400">
                      Performance chart will be displayed here
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4">Category Breakdown</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">IoT & Smart Home</span>
                        <span className="text-white font-semibold">₹25L (42%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Health & Fitness</span>
                        <span className="text-white font-semibold">₹20L (33%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sustainable Tech</span>
                        <span className="text-white font-semibold">₹15L (25%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white text-sm">EcoWave reached ₹50L valuation</div>
                          <div className="text-gray-400 text-xs">2 days ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white text-sm">AirTech launched new product line</div>
                          <div className="text-gray-400 text-xs">1 week ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white text-sm">New deal added to pipeline</div>
                          <div className="text-gray-400 text-xs">2 weeks ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h1 className="text-3xl font-bold text-white mb-8">Investment Reports</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Quarterly Report</h3>
                      <FileText className="w-5 h-5 text-indigo-400" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">Q4 2024 portfolio performance and analytics</p>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Tax Summary</h3>
                      <FileText className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">Annual tax summary for investment gains</p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Portfolio Summary</h3>
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">Complete overview of all investments</p>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}