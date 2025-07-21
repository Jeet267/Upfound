import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Heart, Clock, Users, TrendingUp, Grid3X3, List } from 'lucide-react';

export default function ExploreProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    fundingProgress: 'all',
    daysLeft: 'all',
    trending: false,
    newArrivals: false
  });

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'iot', name: 'IoT & Smart Home' },
    { id: 'health', name: 'Health & Fitness' },
    { id: 'sustainable', name: 'Sustainable Tech' },
    { id: 'commerce', name: 'Quick Commerce' },
    { id: 'fmcg', name: 'FMCG' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'edtech', name: 'Education Tech' },
    { id: 'energy', name: 'Clean Energy' }
  ];

  const products = [
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
      badge: "Trending",
      description: "Advanced HEPA filtration with smart connectivity for cleaner indoor air."
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
      badge: "Hot",
      description: "Self-purifying water bottle with UV-C technology and eco-friendly materials."
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
      badge: "25% OFF",
      description: "Advanced health monitoring with 24/7 heart rate and sleep tracking."
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
      badge: "New",
      description: "Portable solar panels with 95% efficiency for sustainable energy solutions."
    },
    {
      id: 5,
      name: "Smart Home Security Kit",
      category: "IoT & Smart Home",
      image: "https://images.pexels.com/photos/8293759/pexels-photo-8293759.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 76,
      raised: "28.4L",
      target: "35L",
      backers: 156,
      daysLeft: 19,
      badge: "Featured",
      description: "Complete security system with AI-powered threat detection and alerts."
    },
    {
      id: 6,
      name: "Plant-Based Protein Bars",
      category: "FMCG",
      image: "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 58,
      raised: "15.7L",
      target: "20L",
      backers: 98,
      daysLeft: 27,
      badge: "Organic",
      description: "100% natural protein bars made from locally sourced plant ingredients."
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover innovative products from verified startups and be the first to support groundbreaking ideas
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="newest">Newest</option>
                <option value="ending-soon">Ending Soon</option>
                <option value="most-funded">Most Funded</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-700">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Funding Progress</label>
              <select
                value={filters.fundingProgress}
                onChange={(e) => setFilters(prev => ({ ...prev, fundingProgress: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none text-sm"
              >
                <option value="all">All</option>
                <option value="0-25">0-25%</option>
                <option value="25-50">25-50%</option>
                <option value="50-75">50-75%</option>
                <option value="75-100">75-100%</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Days Left</label>
              <select
                value={filters.daysLeft}
                onChange={(e) => setFilters(prev => ({ ...prev, daysLeft: e.target.value }))}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none text-sm"
              >
                <option value="all">All</option>
                <option value="1-7">1-7 days</option>
                <option value="8-14">8-14 days</option>
                <option value="15-30">15-30 days</option>
                <option value="30+">30+ days</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.trending}
                  onChange={(e) => setFilters(prev => ({ ...prev, trending: e.target.checked }))}
                  className="rounded border-gray-600 bg-gray-700 text-indigo-600 focus:ring-indigo-500 mr-2"
                />
                <span className="text-sm text-gray-300">Trending</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.newArrivals}
                  onChange={(e) => setFilters(prev => ({ ...prev, newArrivals: e.target.checked }))}
                  className="rounded border-gray-600 bg-gray-700 text-indigo-600 focus:ring-indigo-500 mr-2"
                />
                <span className="text-sm text-gray-300">New</span>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">
            Showing {filteredProducts.length} of {products.length} products
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Show:</span>
            <select className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-700 focus:border-indigo-500 focus:outline-none text-sm">
              <option>12 per page</option>
              <option>24 per page</option>
              <option>48 per page</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 ${
                viewMode === 'list' ? 'flex items-center' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    product.badge === 'Trending' ? 'bg-orange-500 text-white' :
                    product.badge === 'Hot' ? 'bg-red-500 text-white' :
                    product.badge === '25% OFF' ? 'bg-green-500 text-white' :
                    product.badge === 'Featured' ? 'bg-purple-500 text-white' :
                    product.badge === 'Organic' ? 'bg-emerald-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                </div>
                <button className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white mb-1 hover:text-indigo-300 transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{product.category}</p>
                  {viewMode === 'list' && (
                    <p className="text-sm text-gray-300 mb-3 line-clamp-2">{product.description}</p>
                  )}
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
                
                <div className={`flex justify-between items-center mb-4 text-sm text-gray-400 ${
                  viewMode === 'list' ? 'flex-wrap gap-2' : ''
                }`}>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {product.backers} backers
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {product.daysLeft} days left
                  </div>
                  {viewMode === 'list' && (
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Goal: ₹{product.target}
                    </div>
                  )}
                </div>
                
                <Link
                  to={`/product/${product.id}`}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  Pre-order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-gray-600">
            Load More Products
          </button>
        </div>

        {/* Categories Section */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-gray-700 hover:bg-indigo-600 text-gray-300 hover:text-white p-4 rounded-lg text-center transition-all duration-300 border border-gray-600 hover:border-indigo-500"
              >
                <div className="text-sm font-medium">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}