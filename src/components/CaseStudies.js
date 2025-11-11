import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const CaseStudies = () => {
  const projects = [
    {
      title: 'Houseform',
      subtitle: 'How do we connect renters with rental agents?',
      description: 'Introducing your new Renting Passport',
      bgGradient: 'from-orange-500 via-pink-400 to-yellow-300',
      category: 'Real Estate Tech',
    },
    {
      title: 'Onchain Pets',
      subtitle: 'How do we connect pet lovers in the web3 community?',
      description: 'Tokenize your dog',
      bgGradient: 'from-teal-600 to-emerald-700',
      category: 'Web3 & Blockchain',
    },
    {
      title: 'Klativa',
      subtitle: 'How can we automate social media marketing for rental agents?',
      description: 'Automated Social Media Marketing',
      bgGradient: 'from-indigo-100 to-purple-100',
      category: 'Marketing Automation',
      isDark: false,
    },
  ];

  const otherProjects = [
    {
      title: 'Fenway CDC Non-Profit iOS App',
      description: 'Assists Fenway residents with accessing essential services and programs while also promoting local businesses in the Boston Fenway area',
      tags: ['iOS', 'Non-Profit', 'Community'],
    },
    {
      title: 'Impact Networks Book Redesign',
      description: 'Led a team of three to redesign the Greenpill Network\'s book, revamping the layout and visual identity for V2 print and digital editions',
      link: '(PDF)',
      tags: ['Design', 'Publishing', 'Web3'],
    },
    {
      title: 'Multi-chain EVM gwei Tracker',
      description: 'A real-time multi-chain Ethereum gas tracker that helps users monitor and compare transaction fees across different networks',
      tags: ['Web3', 'Tools', 'Dashboard'],
    },
    {
      title: 'The First Mainnet Optimism Faucet',
      description: 'An on-chain faucet for the Optimism ecosystem, designed to onboard early users by distributing free OP tokens funded through OP DAO grants.',
      tags: ['Web3', 'DeFi', 'Optimism'],
    },
    {
      title: 'No-code Solidity ERC Contract Creator',
      description: 'Allows users to create and deploy ERC-standard tokens without writing Solidity code, making Web3 development more accessible since 2021',
      tags: ['Web3', 'No-Code', 'Developer Tools'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] p-6 lg:p-16">
      {/* Main Case Studies */}
      <div className="space-y-6 lg:space-y-8 mb-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="group cursor-pointer"
          >
            <div className="bg-[#13131a] rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20">
              {/* Category Badge */}
              <div className="p-4 lg:p-6 border-b border-gray-800/50">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.category}
                </span>
              </div>
              
              {/* Project Visual */}
              <div className={`h-[400px] lg:h-[500px] bg-gradient-to-br ${project.bgGradient} flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="relative z-10 text-center p-8 lg:p-12 w-full max-w-4xl">
                  {index === 0 && (
                    <motion.div 
                      className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-16 shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Introducing your<br />
                        <span className="outlined-text" style={{ WebkitTextStroke: '1px #1f2937' }}>new Renting</span> Passport
                      </h3>
                      <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                        So we've created an easy-to-use service to find you a place fast and keep your renter information secure.
                      </p>
                      <div className="flex gap-4 justify-center flex-wrap">
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                          Find an agency
                        </button>
                        <button className="px-6 py-3 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors flex items-center gap-2">
                          Learn More <FiArrowUpRight />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {index === 1 && (
                    <div className="text-white">
                      <h3 className="text-5xl lg:text-7xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Tokenize your <span className="text-cyan-300">dog</span>
                      </h3>
                      <p className="text-gray-200 mb-12 text-lg">
                        Trade, create, share<br />
                        digital memories of your beloved pets
                      </p>
                      <div className="grid grid-cols-4 gap-3 lg:gap-4 max-w-3xl mx-auto">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div 
                            key={i} 
                            className="aspect-square bg-teal-900/40 backdrop-blur-sm rounded-2xl border border-white/10"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <motion.div 
                      className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Automated Social Media Marketing
                      </h3>
                      <p className="text-2xl lg:text-3xl font-semibold mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        for Real Estate Agents
                      </p>
                      <p className="text-gray-600 mb-10 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                        Boost your social media reach with automated listing posts and engaging content, 
                        tailored specifically for the real estate market.
                      </p>
                      <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                        Get started now
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6 lg:p-8 flex justify-between items-center bg-gradient-to-br from-[#13131a] to-[#0a0a0f]">
                <div>
                  <h3 className="text-white text-lg lg:text-xl font-semibold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.subtitle}</p>
                </div>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group/link"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium hidden sm:inline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>View</span>
                  <FiArrowUpRight className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Notable Projects */}
      <motion.div
        id="other-projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="border-t border-gray-800/50 pt-16"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-white text-2xl lg:text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
            Other Notable Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
        </div>
        
        <div className="grid gap-6 lg:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#13131a] border border-gray-800/50 rounded-2xl p-6 lg:p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-white text-lg lg:text-xl group-hover:text-purple-400 transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {project.title}
                  </h3>
                  <FiArrowUpRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  {project.description}
                  {project.link && (
                    <a href="#" className="text-purple-400 ml-2 hover:text-purple-300 transition-colors font-medium">
                      {project.link}
                    </a>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-700/50"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudies;