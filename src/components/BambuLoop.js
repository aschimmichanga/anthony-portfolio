import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  UploadCloud, 
  Printer, 
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const BambuLoop = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      id: 1, 
      text: 'Bambu Lab incentivizes creators', 
      icon: Gift,
      color: 'yellow'
    },
    { 
      id: 2, 
      text: 'Creators upload high-quality models to MakerWorld', 
      icon: UploadCloud,
      color: 'blue'
    },
    { 
      id: 3, 
      text: 'Users complete successful prints', 
      icon: Printer,
      color: 'red',
      isProblem: true
    },
    { 
      id: 4, 
      text: 'Users purchase printers, filament, & accessories', 
      icon: ShoppingCart,
      color: 'purple'
    },
    { 
      id: 5, 
      text: 'Bambu Lab grows revenue and reinvests', 
      icon: TrendingUp,
      color: 'emerald'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const getColorClasses = (color, isActive, isProblem) => {
    if (isProblem && isActive) {
      return {
        bg: 'from-red-900/30 to-orange-900/30',
        border: 'border-red-500/50',
        icon: 'text-red-400',
        text: 'text-red-200',
        glow: 'shadow-red-500/20'
      };
    }
    
    switch (color) {
      case 'yellow':
        return {
          bg: isActive ? 'from-yellow-900/40 to-amber-900/40' : 'from-yellow-900/20 to-amber-900/20',
          border: isActive ? 'border-yellow-500/50' : 'border-yellow-800/30',
          icon: isActive ? 'text-yellow-400' : 'text-yellow-500/50',
          text: isActive ? 'text-yellow-100' : 'text-gray-400',
          glow: isActive ? 'shadow-yellow-500/20' : ''
        };
      case 'blue':
        return {
          bg: isActive ? 'from-blue-900/40 to-cyan-900/40' : 'from-blue-900/20 to-cyan-900/20',
          border: isActive ? 'border-blue-500/50' : 'border-blue-800/30',
          icon: isActive ? 'text-blue-400' : 'text-blue-500/50',
          text: isActive ? 'text-blue-100' : 'text-gray-400',
          glow: isActive ? 'shadow-blue-500/20' : ''
        };
      case 'red':
        return {
          bg: isActive ? 'from-red-900/40 to-orange-900/40' : 'from-red-900/20 to-orange-900/20',
          border: isActive ? 'border-red-500/50' : 'border-red-800/30',
          icon: isActive ? 'text-red-400' : 'text-red-500/50',
          text: isActive ? 'text-red-100' : 'text-gray-400',
          glow: isActive ? 'shadow-red-500/20' : ''
        };
      case 'purple':
        return {
          bg: isActive ? 'from-purple-900/40 to-pink-900/40' : 'from-purple-900/20 to-pink-900/20',
          border: isActive ? 'border-purple-500/50' : 'border-purple-800/30',
          icon: isActive ? 'text-purple-400' : 'text-purple-500/50',
          text: isActive ? 'text-purple-100' : 'text-gray-400',
          glow: isActive ? 'shadow-purple-500/20' : ''
        };
      case 'emerald':
        return {
          bg: isActive ? 'from-emerald-900/40 to-teal-900/40' : 'from-emerald-900/20 to-teal-900/20',
          border: isActive ? 'border-emerald-500/50' : 'border-emerald-800/30',
          icon: isActive ? 'text-emerald-400' : 'text-emerald-500/50',
          text: isActive ? 'text-emerald-100' : 'text-gray-400',
          glow: isActive ? 'shadow-emerald-500/20' : ''
        };
      default:
        return {
          bg: 'from-gray-900/20 to-gray-800/20',
          border: 'border-gray-700/30',
          icon: 'text-gray-500/50',
          text: 'text-gray-400',
          glow: ''
        };
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-6 lg:p-8">
      {/* Title */}
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 lg:mb-10 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
          The Bambu Lab Ecosystem
        </h3>
        <p className="text-xs lg:text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          A healthy feedback loop drives growth
        </p>
      </motion.div>

      {/* Desktop: 3-2 Grid Layout */}
      <div className="hidden lg:block w-full max-w-5xl px-4">
        <div className="relative">
          {/* Grid Container */}
          <div className="relative" style={{ minHeight: '400px' }}>
            {/* Top Row: Steps 1, 2, 3 */}
            <div className="flex items-center justify-center gap-6 mb-8">
              {[0, 1, 2].map((index) => {
                const step = steps[index];
                const isActive = activeStep === index;
                const colors = getColorClasses(step.color, isActive, step.isProblem);
                const Icon = step.icon;

                return (
                  <React.Fragment key={step.id}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: isActive ? 1.05 : 1
                      }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center relative z-10"
                    >
                      {/* Step Card */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 w-[180px] cursor-pointer transition-all duration-300 ${colors.glow} ${isActive ? 'shadow-lg' : ''}`}
                      >
        {/* Icon */}
                        <div className={`w-12 h-12 rounded-full bg-gray-900/50 border border-gray-700/50 flex items-center justify-center mb-3 mx-auto`}>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>

        {/* Text */}
                        <p className={`text-xs font-medium text-center leading-tight ${colors.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {step.text}
        </p>
                      </motion.div>

                      {/* Problem Warning */}
                      {step.isProblem && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isActive ? 1 : 0.6, y: 0 }}
                          className="mt-3 bg-red-900/40 border border-red-500/50 rounded-lg px-2 py-1.5 flex items-center gap-1.5 shadow-lg shadow-red-500/20"
                        >
                          <AlertTriangle className="w-3 h-3 text-red-400" />
                          <span className="text-xs text-red-300 font-medium whitespace-nowrap" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Breaks here
                          </span>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Arrow to next */}
                    {index < 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive || activeStep > index ? 0.8 : 0.2 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ArrowRight 
                          className={`w-6 h-6 ${step.isProblem ? 'text-red-500' : 'text-emerald-500'}`}
                        />
    </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Vertical Arrow: Step 3 to Step 4 (connecting top right to bottom right) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeStep >= 2 ? 0.8 : 0.2 }}
              className="absolute"
              style={{ 
                left: 'calc(50% + 260px)',
                top: '200px',
                transform: 'translateX(-50%) rotate(135deg)'
              }}
            >
              <ArrowRight 
                className={`w-6 h-6 text-red-500`}
              />
            </motion.div>

            {/* Bottom Row: Steps 5, 4 (5 on left, 4 on right) */}
            <div className="flex items-center justify-center gap-6 mt-8">
              {/* Step 5 (left side) */}
              {(() => {
                const index = 4;
                const step = steps[index];
                const isActive = activeStep === index;
                const colors = getColorClasses(step.color, isActive, step.isProblem);
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: isActive ? 1.05 : 1
                    }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center relative z-10"
                  >
                    {/* Step Card */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 w-[180px] cursor-pointer transition-all duration-300 ${colors.glow} ${isActive ? 'shadow-lg' : ''}`}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gray-900/50 border border-gray-700/50 flex items-center justify-center mb-3 mx-auto`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      
                      {/* Text */}
                      <p className={`text-xs font-medium text-center leading-tight ${colors.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {step.text}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })()}

              {/* Arrow from Step 4 to Step 5 (left arrow, since 4 is right and 5 is left) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeStep >= 3 ? 0.8 : 0.2 }}
                transition={{ delay: 0.4 }}
                className="flex-shrink-0"
              >
                <ArrowRight 
                  className="w-6 h-6 text-emerald-500 rotate-180"
                />
              </motion.div>

              {/* Step 4 (right side) */}
              {(() => {
                const index = 3;
                const step = steps[index];
                const isActive = activeStep === index;
                const colors = getColorClasses(step.color, isActive, step.isProblem);
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: isActive ? 1.05 : 1
                    }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center relative z-10"
                  >
                    {/* Step Card */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 w-[180px] cursor-pointer transition-all duration-300 ${colors.glow} ${isActive ? 'shadow-lg' : ''}`}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gray-900/50 border border-gray-700/50 flex items-center justify-center mb-3 mx-auto`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      
                      {/* Text */}
                      <p className={`text-xs font-medium text-center leading-tight ${colors.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {step.text}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })()}
            </div>

            {/* Arrow: Step 5 back to Step 1 (up arrow on left side) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeStep === 4 ? 0.8 : 0.2 }}
              className="absolute"
              style={{
                left: 'calc(25% - 90px)',
                bottom: '180px',
                transform: 'rotate(-135deg)'
              }}
            >
              <ArrowRight 
                className="w-6 h-6 text-emerald-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="lg:hidden w-full max-w-md">
        <div className="space-y-6">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-blue-500/20 via-emerald-500/20 via-purple-500/20 to-emerald-500/20"></div>
          <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 via-blue-500 via-emerald-500 via-purple-500 to-emerald-500"
                initial={{ height: '0%' }}
            animate={{
                  height: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  background: activeStep === 2 
                    ? 'linear-gradient(to bottom, #10b981, #3b82f6, #ef4444, #a855f7, #10b981)'
                    : 'linear-gradient(to bottom, #10b981, #3b82f6, #10b981, #a855f7, #10b981)'
                }}
              />
            </div>
          </div>

          {steps.map((step, index) => {
            const isActive = activeStep === index;
            const colors = getColorClasses(step.color, isActive, step.isProblem);
            const Icon = step.icon;

            return (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 flex items-center gap-4 ml-12 ${colors.glow} ${isActive ? 'shadow-lg' : ''}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gray-900/50 border border-gray-700/50 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
            </div>

                  {/* Text */}
                  <p className={`text-sm font-medium flex-1 ${colors.text}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {step.text}
                  </p>

                  {/* Problem Warning */}
                  {step.isProblem && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      className="absolute -right-2 -top-2 bg-red-900/40 border border-red-500/50 rounded-full p-1.5 shadow-lg shadow-red-500/20"
                    >
                      <AlertTriangle className="w-4 h-4 text-red-400" />
          </motion.div>
                  )}
        </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BambuLoop;
