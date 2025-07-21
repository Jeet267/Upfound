import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Eye, 
  TrendingUp, 
  Plus, 
  Edit, 
  Share, 
  Trash2, 
  MessageSquare,
  Mail,
  Calendar,
  DollarSign,
  FileText,
  Settings
} from 'lucide-react';
import StartupSidebar from '../components/StartupSidebar';

export default function StartupDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const campaignData = {
    name: "Smart Air Purifier Pro",
    status: "live",
    goal: "50L",
    raised: "32.5L",
    progress: 65,
    backers: 127,
    daysLeft: 23,
    visitors: 2840,
    conversionRate: 4.5
  };

  const recentActivity = [
    {
      type: "order",
      message: "New pre-order from Priya S.",
      time: "2 min ago",
      icon: <DollarSign className="w-5 h-5 text-green-400" />
    },
    {
      type: "question",
      message: "Question about delivery timeline",
      time: "15 min ago",
      icon: <MessageSquare className="w-5 h-5 text-blue-400" />
    },
    {
      type: "milestone",
      message: "Reached 125 backers milestone",
      time: "2 hours ago",
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />
    }
  ];

  const posts = [
    {
      id: 1,
      title: "Manufacturing Progress Update - Week 3",
      content: "Great progress this week! We've completed the initial prototype testing and the results are promising. The air purification efficiency is exceeding our expectations at 99.7% for particles as small as 0.3 microns.",
      status: "published",
      views: 234,
      likes: 45,
      comments: 12,
      date: "15/1/2024"
    },
    {
      id: 2,
      title: "Supply Chain Update & Timeline Adjustment",
      content: "We've secured partnerships with premium component suppliers which will ensure the highest quality for our final product. Due to quality commitments, delivery timeline is adjusted by 2 weeks.",
      status: "published",
      views: 189,
      likes: 32,
      comments: 8,
      date: "10/1/2024"
    }
  ];

  const metrics = [
    {
      label: "Total Funds Raised",
      value: "₹32.5L",
      change: "+12% from last week",
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      positive: true
    },
    {
      label: "Total Backers",
      value: "127",
      change: "+8 from last week",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      positive: true
    },
    {
      label: "Page Visitors",
      value: "2,840",
      change: "+156 from last week",
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      positive: true
    },
    {
      label: "Conversion Rate",
      value: "4.5%",
      change: "+0.3% from last week",
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      positive: true
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-900">
      <StartupSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center">
                Welcome back, Founder! 
                <span className="text-2xl ml-2">👋</span>
              </h1>
              <p className="text-gray-400 mt-2">Here's how your campaign is performing today</p>
            </div>
            <Link
              to="#"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Campaign</span>
            </Link>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Campaign Overview */}
              <div className="bg-gray-800 rounded-xl p-8 mb-8 border border-gray-700">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{campaignData.name}</h2>
                    <p className="text-gray-400">Your active campaign</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Goal</div>
                    <div className="text-2xl font-bold text-white">₹{campaignData.goal}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Raised</div>
                    <div className="text-2xl font-bold text-green-400">₹{campaignData.raised}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Days Left</div>
                    <div className="text-2xl font-bold text-yellow-400">{campaignData.daysLeft}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm text-indigo-400">{campaignData.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${campaignData.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit Campaign</span>
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View Public Page</span>
                  </button>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                    <div className={`text-sm flex items-center ${
                      metric.positive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                  <p className="text-gray-400 text-sm mb-6">Latest updates on your campaign</p>
                  
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                        <div className="flex-shrink-0 mt-1">
                          {activity.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm">{activity.message}</p>
                          <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <p className="text-gray-400 text-sm mb-6">Common tasks and shortcuts</p>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg text-left transition-colors flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-indigo-400" />
                      <div>
                        <div className="font-medium">Send Newsletter to Wishlist</div>
                        <div className="text-gray-400 text-sm">Update your supporters</div>
                      </div>
                    </button>
                    
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg text-left transition-colors flex items-center space-x-3">
                      <Plus className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-medium">Create Progress Update</div>
                        <div className="text-gray-400 text-sm">Share your latest progress</div>
                      </div>
                    </button>
                    
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg text-left transition-colors flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="font-medium">View Backer Details</div>
                        <div className="text-gray-400 text-sm">Manage your supporters</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'posts' && (
            <div className="space-y-8">
              {/* Posts Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">Progress Posts</h2>
                  <p className="text-gray-400 mt-1">Share updates with your backers and build community</p>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                  <Plus className="w-5 h-5" />
                  <span>Create New Post</span>
                </button>
              </div>

              {/* Posts Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-400 text-sm">Total Posts</div>
                    <FileText className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">8</div>
                  <div className="text-green-400 text-sm">+3 this month</div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-400 text-sm">Total Views</div>
                    <Eye className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">1,456</div>
                  <div className="text-green-400 text-sm">+12% this week</div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-400 text-sm">Avg Engagement</div>
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">18.5%</div>
                  <div className="text-yellow-400 text-sm">Above average</div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-400 text-sm">Subscriber Growth</div>
                    <Users className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">+23</div>
                  <div className="text-green-400 text-sm">From posts</div>
                </div>
              </div>

              {/* Posts List */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-700">
                  <div className="flex space-x-8">
                    <button className="text-white font-medium border-b-2 border-indigo-500 pb-2">
                      All Posts
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors pb-2">
                      Published Posts
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors pb-2">
                      Drafts
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">All Posts</h3>
                  <p className="text-gray-400 text-sm mb-6">4 posts in this category</p>
                  
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <div key={post.id} className="border border-gray-700 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{post.title}</h4>
                            <p className="text-gray-300 mb-4 line-clamp-2">{post.content}</p>
                            
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {post.views} views
                              </div>
                              <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {post.likes} likes
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                {post.comments} comments
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {post.date}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 ml-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              post.status === 'published' 
                                ? 'bg-green-900 text-green-300' 
                                : 'bg-yellow-900 text-yellow-300'
                            }`}>
                              {post.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>Preview</span>
                          </button>
                          <button className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                            <Edit className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                          <button className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                            <Share className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                          <button className="text-red-400 hover:text-red-300 transition-colors flex items-center space-x-1">
                            <Trash2 className="w-4 h-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}