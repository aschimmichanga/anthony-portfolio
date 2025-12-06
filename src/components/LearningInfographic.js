import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, XCircle, ArrowRight, BookOpen, Lightbulb, RotateCcw } from 'lucide-react';

const LearningInfographic = () => {
  const [currentView, setCurrentView] = useState('problem'); // 'problem' or 'solution'

  const problemFlow = [
    {
      step: 1,
      title: 'Print Fails',
      description: 'Bed adhesion issue causes print to lift',
      icon: XCircle,
      color: 'red'
    },
    {
      step: 2,
      title: 'Leave Review',
      description: 'User rates 1 star: "Print failed. Model is bad."',
      icon: AlertCircle,
      color: 'yellow'
    },
    {
      step: 3,
      title: 'No Learning',
      description: 'No guidance or explanation provided',
      icon: XCircle,
      color: 'gray'
    },
    {
      step: 4,
      title: 'Repeat Mistake',
      description: 'Same failure happens again - cycle continues',
      icon: RotateCcw,
      color: 'red'
    }
  ];

  const solutionFlow = [
    {
      step: 1,
      title: 'Print Fails',
      description: 'Bed adhesion issue causes print to lift',
      icon: XCircle,
      color: 'red'
    },
    {
      step: 2,
      title: 'Attribution Prompt',
      description: 'System asks: "What went wrong?" User selects "Bed Adhesion" tag',
      icon: Lightbulb,
      color: 'yellow'
    },
    {
      step: 3,
      title: 'Learning Opportunity',
      description: 'Contextual help card: "Tips: Clean bed, check leveling, use brim"',
      icon: BookOpen,
      color: 'emerald'
    },
    {
      step: 4,
      title: 'Apply Learning',
      description: 'User fixes issue - next print succeeds!',
      icon: CheckCircle,
      color: 'emerald'
    }
  ];

  const currentFlow = currentView === 'problem' ? problemFlow : solutionFlow;

  const getColorClasses = (color) => {
    switch (color) {
      case 'red':
        return {
          bg: 'from-red-900/30 to-orange-900/30',
          border: 'border-red-800/50',
          text: 'text-red-300',
          icon: 'text-red-400'
        };
      case 'yellow':
        return {
          bg: 'from-yellow-900/30 to-amber-900/30',
          border: 'border-yellow-800/50',
          text: 'text-yellow-300',
          icon: 'text-yellow-400'
        };
      case 'emerald':
        return {
          bg: 'from-emerald-900/30 to-teal-900/30',
          border: 'border-emerald-800/50',
          text: 'text-emerald-300',
          icon: 'text-emerald-400'
        };
      default:
        return {
          bg: 'from-gray-900/30 to-gray-800/30',
          border: 'border-gray-700/50',
          text: 'text-gray-300',
          icon: 'text-gray-400'
        };
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-6 lg:p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 lg:mb-8 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
          The Learning Gap
        </h3>
        <p className="text-xs lg:text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Current system focuses on rating, not learning from failure
        </p>
      </motion.div>

      {/* Toggle View */}
      <div className="flex items-center gap-2 mb-8">
        <motion.button
          onClick={() => setCurrentView('problem')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            currentView === 'problem'
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-gray-800/50 text-gray-400 border border-gray-700/30'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Current: No Learning
        </motion.button>
        <motion.button
          onClick={() => setCurrentView('solution')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            currentView === 'solution'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-gray-800/50 text-gray-400 border border-gray-700/30'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          With Learning Support
        </motion.button>
      </div>

      {/* Flow Visualization */}
      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`bg-gradient-to-br ${
              currentView === 'problem'
                ? 'from-red-900/20 to-orange-900/20 border-red-800/30'
                : 'from-emerald-900/20 to-teal-900/20 border-emerald-800/30'
            } border-2 rounded-2xl p-6 lg:p-8 shadow-xl`}
          >
            {/* Flow Steps - Clean Horizontal Layout */}
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
              {currentFlow.map((item, index) => {
                const colors = getColorClasses(item.color);
                const Icon = item.icon;
                const isLast = index === currentFlow.length - 1;

                return (
                  <React.Fragment key={item.step}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      className="flex-1 min-w-0 w-full md:w-auto"
                    >
                      {/* Step Card */}
                      <motion.div
                        className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-5 h-full flex flex-col cursor-pointer`}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                          transition: { duration: 0.2 }
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Step Number & Icon */}
                        <div className="flex items-center gap-3 mb-3">
                          <div 
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              currentView === 'solution' && item.color === 'emerald'
                                ? 'bg-emerald-500/20 border-2 border-emerald-500/50'
                                : currentView === 'problem' && item.color === 'red'
                                ? 'bg-red-500/20 border-2 border-red-500/50'
                                : 'bg-gray-700/50 border-2 border-gray-600/50'
                            }`}
                          >
                            <span className={`text-sm font-bold ${
                              currentView === 'solution' && item.color === 'emerald'
                                ? 'text-emerald-400'
                                : currentView === 'problem' && item.color === 'red'
                                ? 'text-red-400'
                                : 'text-gray-400'
                            }`} style={{ fontFamily: "'Sora', sans-serif" }}>
                              {item.step}
                            </span>
                          </div>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>

                        {/* Title */}
                        <motion.h4 
                          className={`text-base font-bold mb-2 ${colors.text}`} 
                          style={{ fontFamily: "'Sora', sans-serif" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {item.title}
                        </motion.h4>

                        {/* Description */}
                        <motion.p 
                          className="text-xs text-gray-300 leading-relaxed" 
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>

                    {/* Arrow - Only show between steps */}
                    {!isLast && (
                      <motion.div 
                        className="hidden md:flex items-center justify-center px-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <motion.div
                          animate={{ 
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className={`w-6 h-6 ${
                            currentView === 'solution' ? 'text-emerald-400' : 'text-gray-600'
                          }`} />
                        </motion.div>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Comparison Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 grid grid-cols-2 gap-4 max-w-2xl w-full"
      >
        <motion.div 
          className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-800/30 rounded-xl p-4"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-400" />
            <h4 className="text-sm font-bold text-red-300" style={{ fontFamily: "'Sora', sans-serif" }}>
              Without Learning
            </h4>
          </div>
          <ul className="space-y-1 text-xs text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {['Users repeat same mistakes', 'No guidance provided', 'Frustration increases', 'Skills don\'t improve'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-800/30 rounded-xl p-4"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm font-bold text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>
              With Learning Support
            </h4>
          </div>
          <ul className="space-y-1 text-xs text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {['Users learn from failures', 'Contextual help provided', 'Skills improve over time', 'Better print success rate'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        className="mt-6 max-w-2xl text-center"
      >
        <motion.div 
          className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border border-yellow-800/30 rounded-xl p-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.p 
            className="text-sm text-yellow-200 text-left" 
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="font-bold mb-1">The Opportunity:</div> Convert failure moments into learning opportunities. 
            When users understand what went wrong, they can improve and succeed next time.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LearningInfographic;

