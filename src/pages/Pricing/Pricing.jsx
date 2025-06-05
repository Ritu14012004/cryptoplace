import React, { useState } from 'react';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    basic: {
      name: 'Basic',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for individuals and small projects',
      features: [
        'Real-time price tracking',
        'Basic market analysis',
        'Portfolio tracking',
        'Email support',
        'Basic API access',
        'Up to 5 watchlists'
      ],
      limitations: [
        'Limited historical data',
        'Basic charts only',
        'No custom alerts'
      ]
    },
    pro: {
      name: 'Pro',
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: 'Ideal for active traders and professionals',
      features: [
        'Everything in Basic',
        'Advanced market analysis',
        'Custom alerts',
        'Priority support',
        'Full API access',
        'Unlimited watchlists',
        'Advanced charts',
        'Portfolio analytics'
      ],
      limitations: [
        'No team collaboration',
        'Limited custom reports'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'For businesses and large teams',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom reports',
        'Dedicated support',
        'White-label solutions',
        'Advanced security',
        'Custom integrations',
        'SLA guarantees'
      ],
      limitations: []
    }
  };

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required to start.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time from your account settings. No questions asked.'
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Scroll to FAQ section
    document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartTrial = () => {
    // Add your trial signup logic here
 
  };

  const handleContactSales = () => {
    // Add your contact sales logic here
  
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-white">Simple, Transparent Pricing</h1>
          <p className="text-[#e3e3e3] text-base sm:text-lg max-w-2xl mx-auto px-4">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-[rgba(84,3,255,0.1)] p-1 rounded-lg inline-flex w-full sm:w-auto max-w-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                billingCycle === 'monthly'
                  ? 'bg-[#7927ff] text-white'
                  : 'text-[#e3e3e3] hover:bg-[rgba(84,3,255,0.2)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                billingCycle === 'yearly'
                  ? 'bg-[#7927ff] text-white'
                  : 'text-[#e3e3e3] hover:bg-[rgba(84,3,255,0.2)]'
              }`}
            >
              Yearly <span className="text-xs sm:text-sm text-[#7927ff]">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`bg-gradient-to-b from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] rounded-xl border border-[#3c3c3c] p-4 sm:p-8 transition-all duration-300 hover:transform hover:scale-105 hover:border-[#7927ff] ${
                selectedPlan === key ? 'ring-2 ring-[#7927ff]' : ''
              }`}
            >
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h2>
                <p className="text-[#e3e3e3] text-sm sm:text-base mb-4">{plan.description}</p>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  <span className="text-base sm:text-lg text-[#e3e3e3]">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#e3e3e3] text-sm sm:text-base">
                    <span className="text-[#7927ff] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-center text-[#e3e3e3] opacity-50 text-sm sm:text-base">
                    <span className="text-[#e3e3e3] mr-2">×</span>
                    {limitation}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(key)}
                className={`w-full py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  selectedPlan === key
                    ? 'bg-[#7927ff] text-white'
                    : 'bg-[rgba(84,3,255,0.1)] text-[#e3e3e3] hover:bg-[#7927ff] hover:text-white'
                }`}
              >
                {selectedPlan === key ? 'Selected Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faq-section" className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[rgba(84,3,255,0.1)] rounded-lg p-4 sm:p-6 border border-[#3c3c3c] hover:border-[#7927ff] transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-[#e3e3e3] text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-[#e3e3e3] mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Join thousands of traders and investors who trust CryptoTracer for their cryptocurrency needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-[#7927ff] text-white rounded-lg hover:bg-[#6a1fe0] transition-colors text-sm sm:text-base"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleContactSales}
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-[rgba(84,3,255,0.1)] text-[#e3e3e3] rounded-lg hover:bg-[rgba(84,3,255,0.2)] transition-colors text-sm sm:text-base"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing; 