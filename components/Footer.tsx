
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-80" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Techgen</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Leading the transition to a sustainable future through innovative solar technology and renewable energy solutions.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              {['Residential Solar', 'Commercial Energy', 'Industrial Storage', 'Grid Services', 'Solar Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Techgen', 'Our Team', 'Sustainability', 'Projects', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-6">Join our newsletter to receive latest updates and offers.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-none rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Techgen Solar Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
