import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Heart, 
  Bell, 
  User, 
  CreditCard, 
  MapPin, 
  Settings, 
  Eye, 
  Truck,
  Star,
  Calendar,
  Filter,
  Search
} from 'lucide-react';

export default function BackerDashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  const preOrders = [
    {
      id: 1,
      productName: "Smart Air Purifier Pro",
      startup: "AirTech Innovations",
      orderDate: "2024-12-15",
      amount: "₹12,999",
      status: "confirmed",
      estimatedDelivery: "March 2025",
      trackingNumber: "UPF123456789",
      image: "https://images.pexels.com/photos/8960452/pexels-photo-8960452.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      productName: "FitTrack Smart Band",
      startup: "HealthTech Solutions",
      orderDate: "2024-12-10",
      amount: "₹8,999",
      status: "shipped",
      estimatedDelivery: "February 2025",
      trackingNumber: "UPF987654321",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      productName: "EcoWave Water Bottle",
      startup: "GreenTech Innovations",
      orderDate: "2024-11-28",
      amount: "₹2,499",
      status: "delivered",
      estimatedDelivery: "January 2025",
      trackingNumber: "UPF555444333",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const wishlistItems = [
    {
      id: 4,
      productName: "Smart Home Security Kit",
      startup: "SecureTech",
      progress: 76,
      raised: "28.4L",
      target: "35L",
      daysLeft: 19,
      image: "https://images.pexels.com/photos/8293759/pexels-photo-8293759.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 5,
      productName: "Plant-Based Protein Bars",
      startup: "NutriLife",
      progress: 58,
      raised: "15.7L",
      target: "20L",
      daysLeft: 27,
      image: "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "update",
      message: "Smart Air Purifier Pro: Manufacturing update posted",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "shipping",
      message: "Your FitTrack Smart Band has been shipped!",
      time: "1 day ago",
      read: false
    },
    {
      id: 3,
      type: "wishlist",
      message: "Plant-Based Protein Bars campaign is ending in 3 days",
      time: "2 days ago",
      read: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-900 text-blue-300';
      case 'shipped': return 'bg-yellow-900 text-yellow-300';
      case 'delivered': return 'bg-green-900 text-green-300';
      case 'refunded': return 'bg-red-900 text-red-300';
      default: return 'bg-gray-900 text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <Package className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'delivered': return <Star className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 bg-gray-800 rounded-xl p-6 h-fit border border-gray-700">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">My Account</h2>
              <p className="text-gray-400 text-sm">Manage your orders and preferences</p>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'orders'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Package className="w-5 h-5" />
                <span>My Pre-orders</span>
              </button>
              
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'wishlist'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>My Wishlist</span>
              </button>
              
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'notifications'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
              </button>
              
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile Settings</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'orders' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-white">My Pre-orders</h1>
                    <p className="text-gray-400 mt-1">Track your orders and delivery status</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search orders..."
                        className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                    <button className="bg-gray-800 text-gray-300 p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
                      <Filter className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {preOrders.map((order) => (
                    <div key={order.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-start space-x-4">
                        <img
                          src={order.image}
                          alt={order.productName}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-1">{order.productName}</h3>
                              <p className="text-gray-400 text-sm">by {order.startup}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-white">{order.amount}</div>
                              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {getStatusIcon(order.status)}
                                <span className="capitalize">{order.status}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Order Date:</span>
                              <div className="text-white font-medium">{new Date(order.orderDate).toLocaleDateString()}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Est. Delivery:</span>
                              <div className="text-white font-medium">{order.estimatedDelivery}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Tracking:</span>
                              <div className="text-indigo-400 font-medium">{order.trackingNumber}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mt-4">
                            <Link
                              to={`/product/${order.id}`}
                              className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center space-x-1"
                            >
                              <Eye className="w-4 h-4" />
                              <span>View Product</span>
                            </Link>
                            {order.status === 'shipped' && (
                              <button className="text-green-400 hover:text-green-300 transition-colors flex items-center space-x-1">
                                <Truck className="w-4 h-4" />
                                <span>Track Package</span>
                              </button>
                            )}
                            {order.status === 'delivered' && (
                              <button className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1">
                                <Star className="w-4 h-4" />
                                <span>Rate Product</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-white">My Wishlist</h1>
                    <p className="text-gray-400 mt-1">Products you're interested in supporting</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.productName}</h3>
                        <p className="text-gray-400 text-sm mb-4">by {item.startup}</p>
                        
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400">{item.progress}% funded</span>
                            <span className="text-sm text-green-400">₹{item.raised} raised</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                            <span>Goal: ₹{item.target}</span>
                            <span>{item.daysLeft} days left</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link
                            to={`/product/${item.id}`}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors"
                          >
                            Pre-order Now
                          </Link>
                          <button className="text-red-400 hover:text-red-300 p-2 transition-colors">
                            <Heart className="w-5 h-5 fill-current" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-white">Notifications</h1>
                    <p className="text-gray-400 mt-1">Stay updated on your orders and campaigns</p>
                  </div>
                  <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    Mark all as read
                  </button>
                </div>

                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`bg-gray-800 rounded-lg p-4 border border-gray-700 ${
                        !notification.read ? 'border-l-4 border-l-indigo-500' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          notification.type === 'update' ? 'bg-blue-900 text-blue-300' :
                          notification.type === 'shipping' ? 'bg-green-900 text-green-300' :
                          'bg-purple-900 text-purple-300'
                        }`}>
                          {notification.type === 'update' && <Bell className="w-5 h-5" />}
                          {notification.type === 'shipping' && <Truck className="w-5 h-5" />}
                          {notification.type === 'wishlist' && <Heart className="w-5 h-5" />}
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-white">{notification.message}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-sm">{notification.time}</span>
                          </div>
                        </div>
                        
                        {!notification.read && (
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h1 className="text-3xl font-bold text-white mb-6">Profile Settings</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+91 9876543210"
                          className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Shipping Address
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Address Line 1</label>
                        <input
                          type="text"
                          placeholder="Street address"
                          className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                          <input
                            type="text"
                            placeholder="City"
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">PIN Code</label>
                          <input
                            type="text"
                            placeholder="PIN Code"
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Payment Methods
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-600 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CreditCard className="w-8 h-8 text-indigo-400" />
                            <div>
                              <div className="text-white font-medium">•••• •••• •••• 1234</div>
                              <div className="text-gray-400 text-sm">Expires 12/25</div>
                            </div>
                          </div>
                          <button className="text-red-400 hover:text-red-300 transition-colors">Remove</button>
                        </div>
                      </div>
                      <button className="w-full border-2 border-dashed border-gray-600 rounded-lg p-4 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors">
                        + Add New Payment Method
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Preferences
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">Email Notifications</div>
                          <div className="text-gray-400 text-sm">Receive updates about your orders</div>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">Campaign Updates</div>
                          <div className="text-gray-400 text-sm">Get notified about campaign progress</div>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">Marketing Emails</div>
                          <div className="text-gray-400 text-sm">Receive promotional content</div>
                        </div>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex space-x-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Save Changes
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}