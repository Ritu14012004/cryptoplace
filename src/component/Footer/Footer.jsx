import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'API', path: '/api' },
      { name: 'Documentation', path: '/docs' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Help Center', path: '/help' },
      { name: 'Community', path: '/community' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: '⌨', url: 'https://github.com' },
    { name: 'Discord', icon: '🎮', url: 'https://discord.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[rgba(84,3,255,0.1)] to-[rgba(105,2,153,0.15)] border-t border-[#3c3c3c]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={logo} alt="CryptoTracer" className="w-40 mb-4" />
            </Link>
            <p className="text-[#e3e3e3] mb-6 max-w-md">
              Your trusted platform for cryptocurrency tracking, analysis, and trading. Stay informed with real-time data and expert insights.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[rgba(84,3,255,0.1)] flex items-center justify-center text-[#e3e3e3] hover:bg-[#7927ff] hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#e3e3e3] hover:text-[#7927ff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#e3e3e3] hover:text-[#7927ff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#e3e3e3] hover:text-[#7927ff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-[#3c3c3c]">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-[#e3e3e3] mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-[rgba(84,3,255,0.1)] border border-[#3c3c3c] text-white placeholder-[#e3e3e3] focus:outline-none focus:border-[#7927ff] flex-grow max-w-md"
              />
              <button className="px-8 py-3 bg-[#7927ff] text-white rounded-lg hover:bg-[#6a1fe0] transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3c3c3c]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#e3e3e3] text-sm">
              © {currentYear} CryptoTracer. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-[#e3e3e3] text-sm hover:text-[#7927ff] transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-[#e3e3e3] text-sm hover:text-[#7927ff] transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-[#e3e3e3] text-sm hover:text-[#7927ff] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;