import React, { useState } from 'react';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      title: "Understanding Cryptocurrency Market Trends",
      excerpt: "Learn how to analyze and understand the latest trends in the cryptocurrency market.",
      date: "January 15, 2025",
      category: "Market Analysis",
      readTime: "5 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000"
    },
    {
      title: "The Future of Blockchain Technology",
      excerpt: "Exploring the potential impact of blockchain technology on various industries.",
      date: "February 12, 2025",
      category: "Technology",
      readTime: "7 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000"
    },
    {
      title: "Top Cryptocurrencies to Watch in 2025",
      excerpt: "Discover the most promising cryptocurrencies that could shape the market this year.",
      date: "March 10, 2025",
      category: "Investing",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000"
    },
    {
      title: "Crypto Trading Strategies for Beginners",
      excerpt: "Essential trading strategies and tips for those new to cryptocurrency trading.",
      date: "April 8, 2025",
      category: "Trading",
      readTime: "8 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000"
    },
    {
      title: "Security Best Practices for Crypto Holders",
      excerpt: "Important security measures to protect your cryptocurrency investments.",
      date: "May 5, 2025",
      category: "Security",
      readTime: "4 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000"
    },
    {
      title: "The Impact of Regulation on Crypto Markets",
      excerpt: "How regulatory changes are shaping the future of cryptocurrency markets.",
      date: "June 3, 2025",
      category: "Regulation",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000"
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const featuredPosts = blogPosts.filter(post => post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Latest from Our Blog</h1>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[rgba(84,3,255,0.1)] border border-[#3c3c3c] text-white placeholder-[#e3e3e3] focus:outline-none focus:border-[#7927ff]"
            />
          </div>
          <div className="w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[rgba(84,3,255,0.1)] border border-[#3c3c3c] text-white focus:outline-none focus:border-[#7927ff]"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={index} className="bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-lg border border-[#3c3c3c] overflow-hidden hover:border-[#7927ff] transition-colors">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#7927ff] text-sm font-medium">{post.category}</span>
                      <span className="text-[#e3e3e3] text-sm">{post.date}</span>
                      <span className="text-[#e3e3e3] text-sm">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-white">{post.title}</h2>
                    <p className="text-[#e3e3e3] mb-4">{post.excerpt}</p>
                    <button className="text-[#7927ff] font-medium hover:text-[#6a1fe0] transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-lg border border-[#3c3c3c] overflow-hidden hover:border-[#7927ff] transition-colors">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#7927ff] text-sm font-medium">{post.category}</span>
                  <span className="text-[#e3e3e3] text-sm">{post.date}</span>
                  <span className="text-[#e3e3e3] text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-white">{post.title}</h2>
                <p className="text-[#e3e3e3] mb-4">{post.excerpt}</p>
                <button className="text-[#7927ff] font-medium hover:text-[#6a1fe0] transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#e3e3e3] text-lg">No articles found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog; 