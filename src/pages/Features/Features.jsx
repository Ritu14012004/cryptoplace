import React, { useState } from 'react';

function Features() {
  const [activeTab, setActiveTab] = useState('all');

  const features = {
    trading: [
      {
        title: "Real-time Trading",
        description: "Execute trades instantly with our advanced trading engine. Monitor market movements in real-time and make informed decisions.",
        icon: "📈",
        benefits: ["Instant order execution", "Real-time price updates", "Advanced order types"]
      },
      {
        title: "Portfolio Analytics",
        description: "Track your portfolio performance with detailed analytics and insights. Monitor your investments and make data-driven decisions.",
        icon: "📊",
        benefits: ["Performance tracking", "Risk analysis", "Portfolio optimization"]
      }
    ],
    security: [
      {
        title: "Advanced Security",
        description: "Your assets are protected with state-of-the-art security measures. Multi-layer encryption and cold storage solutions.",
        icon: "🔒",
        benefits: ["2FA authentication", "Cold storage", "Regular security audits"]
      },
      {
        title: "Secure Transactions",
        description: "Every transaction is secured with advanced encryption and verification processes.",
        icon: "🛡️",
        benefits: ["Encrypted transactions", "Fraud prevention", "Secure API access"]
      }
    ],
    analysis: [
      {
        title: "Market Analysis",
        description: "Access comprehensive market analysis tools and real-time data to make informed trading decisions.",
        icon: "📉",
        benefits: ["Technical analysis", "Market trends", "Price predictions"]
      },
      {
        title: "Trading Signals",
        description: "Receive automated trading signals based on advanced algorithms and market indicators.",
        icon: "🎯",
        benefits: ["Automated alerts", "Custom indicators", "Signal accuracy"]
      }
    ]
  };

  const comparisonData = [
    {
      feature: "Real-time Data",
      basic: "✓",
      pro: "✓",
      enterprise: "✓"
    },
    {
      feature: "Advanced Analytics",
      basic: "Limited",
      pro: "✓",
      enterprise: "✓"
    },
    {
      feature: "API Access",
      basic: "✗",
      pro: "Limited",
      enterprise: "✓"
    },
    {
      feature: "Custom Indicators",
      basic: "✗",
      pro: "✓",
      enterprise: "✓"
    },
    {
      feature: "Priority Support",
      basic: "✗",
      pro: "✓",
      enterprise: "24/7"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Powerful Features for Modern Trading</h1>
          <p className="text-[#e3e3e3] text-lg max-w-2xl mx-auto">
            Discover our comprehensive suite of tools designed to enhance your cryptocurrency trading experience
          </p>
        </div>

        {/* Feature Categories */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === 'all'
                ? 'bg-[#7927ff] text-white'
                : 'bg-[rgba(84,3,255,0.1)] text-[#e3e3e3] hover:bg-[rgba(84,3,255,0.2)]'
            }`}
          >
            All Features
          </button>
          <button
            onClick={() => setActiveTab('trading')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === 'trading'
                ? 'bg-[#7927ff] text-white'
                : 'bg-[rgba(84,3,255,0.1)] text-[#e3e3e3] hover:bg-[rgba(84,3,255,0.2)]'
            }`}
          >
            Trading Tools
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === 'security'
                ? 'bg-[#7927ff] text-white'
                : 'bg-[rgba(84,3,255,0.1)] text-[#e3e3e3] hover:bg-[rgba(84,3,255,0.2)]'
            }`}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === 'analysis'
                ? 'bg-[#7927ff] text-white'
                : 'bg-[rgba(84,3,255,0.1)] text-[#e3e3e3] hover:bg-[rgba(84,3,255,0.2)]'
            }`}
          >
            Analysis
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(features).map(([category, categoryFeatures]) => (
            activeTab === 'all' || activeTab === category ? (
              categoryFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] p-6 rounded-lg border border-[#3c3c3c] hover:border-[#7927ff] transition-all hover:transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h2 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h2>
                  <p className="text-[#e3e3e3] mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-[#e3e3e3]">
                        <span className="text-[#7927ff] mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : null
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Feature Comparison</h2>
          <div className="bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-lg border border-[#3c3c3c] overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-[rgba(84,3,255,0.1)]">
              <div className="font-semibold text-white">Feature</div>
              <div className="text-center font-semibold text-white">Basic</div>
              <div className="text-center font-semibold text-white">Pro</div>
              <div className="text-center font-semibold text-white">Enterprise</div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 border-t border-[#3c3c3c]">
                <div className="text-[#e3e3e3]">{row.feature}</div>
                <div className="text-center text-[#e3e3e3]">{row.basic}</div>
                <div className="text-center text-[#e3e3e3]">{row.pro}</div>
                <div className="text-center text-[#e3e3e3]">{row.enterprise}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-[#e3e3e3] mb-8">Choose the plan that best fits your needs and start trading today.</p>
          <button className="bg-[#7927ff] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6a1fe0] transition-colors">
            View Pricing Plans
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features; 