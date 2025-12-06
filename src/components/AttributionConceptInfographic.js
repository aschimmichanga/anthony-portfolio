import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Tag, 
  Lightbulb, 
  Filter, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare,
  Brain,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const AttributionConceptInfographic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef(null);
  const stepRefs = useRef([]);

  const userFlow = [
    {
      step: 1,
      title: 'User Writes Review',
      description: 'After a failed print, user starts writing their review as usual',
      icon: MessageSquare,
      color: 'blue',
      highlight: 'No changes - they can follow their usual process'
    },
    {
      step: 2,
      title: 'AI Analyzes Text',
      description: 'AI analyzes review text in real-time as user types',
      icon: Brain,
      color: 'purple',
      highlight: 'Smart detection - happens automatically'
    },
    {
      step: 3,
      title: 'Tags Suggested',
      description: 'Relevant attribution tags appear based on content',
      icon: Tag,
      color: 'emerald',
      highlight: 'Prompts reflection without forcing it'
    },
    {
      step: 4,
      title: 'User Selects Tags',
      description: 'User selects tags that match their experience',
      icon: CheckCircle,
      color: 'emerald',
      highlight: 'Structured but flexible - multiple tags allowed'
    },
    {
      step: 5,
      title: 'Help Cards Appear',
      description: 'If "user error" tags selected, troubleshooting tips appear',
      icon: BookOpen,
      color: 'yellow',
      highlight: 'Learning opportunity at the right moment'
    },
    {
      step: 6,
      title: 'Review Submitted',
      description: 'Review is tagged and can be filtered/searched by type',
      icon: TrendingUp,
      color: 'emerald',
      highlight: 'Actionable feedback for everyone'
    }
  ];

  const components = [
    {
      name: 'AI-Powered Tag Suggestions',
      description: 'Real-time analysis suggests relevant tags as users type',
      icon: Sparkles,
      color: 'purple',
      benefit: 'Low friction, feels natural'
    },
    {
      name: 'Attribution Categories',
      description: 'Four main categories: User Error, Printer/System, External, Model Issue',
      icon: Tag,
      color: 'blue',
      benefit: 'Clear structure, allows nuance'
    },
    {
      name: 'Contextual Help Cards',
      description: 'Troubleshooting tips appear when user error tags are selected',
      icon: Lightbulb,
      color: 'yellow',
      benefit: 'Converts complaints into learning'
    },
    {
      name: 'Review Filtering',
      description: 'Users can filter reviews by attribution type when browsing',
      icon: Filter,
      color: 'emerald',
      benefit: 'Makes reviews actionable'
    },
    {
      name: 'Creator Analytics',
      description: 'Dashboard shows attribution breakdown and insights',
      icon: BarChart3,
      color: 'emerald',
      benefit: 'Data-driven iteration'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'emerald':
        return {
          bg: 'from-emerald-900/30 to-teal-900/30',
          border: 'border-emerald-800/50',
          text: 'text-emerald-300',
          icon: 'text-emerald-400',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
        };
      case 'purple':
        return {
          bg: 'from-purple-900/30 to-pink-900/30',
          border: 'border-purple-800/50',
          text: 'text-purple-300',
          icon: 'text-purple-400',
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
        };
      case 'blue':
        return {
          bg: 'from-blue-900/30 to-cyan-900/30',
          border: 'border-blue-800/50',
          text: 'text-blue-300',
          icon: 'text-blue-400',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
        };
      case 'yellow':
        return {
          bg: 'from-yellow-900/30 to-amber-900/30',
          border: 'border-yellow-800/50',
          text: 'text-yellow-300',
          icon: 'text-yellow-400',
          badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
        };
      default:
        return {
          bg: 'from-gray-900/30 to-gray-800/30',
          border: 'border-gray-700/50',
          text: 'text-gray-300',
          icon: 'text-gray-400',
          badge: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
        };
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % userFlow.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isPlaying, userFlow.length]);

  // Scroll to center step 5 when it becomes active
  useEffect(() => {
    if (currentStep === 0) {
      const timeoutId = setTimeout(() => {
        const container = scrollContainerRef.current;
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }, 200);
      return () => clearTimeout(timeoutId);
    }
    if (currentStep === 3) {
      const timeoutId = setTimeout(() => {
        const container = scrollContainerRef.current;
        const element = stepRefs.current[4];
        
        if (!container || !element) return;
        
        // Find the flex container (parent of the element)
        const flexContainer = element.parentElement;
        if (!flexContainer) return;
        
        // Get element position relative to flex container
        const elementLeft = element.offsetLeft;
        const elementWidth = element.offsetWidth;
        
        // Get container dimensions
        const containerWidth = container.clientWidth;
        
        // Calculate target scroll position to center element
        // Element's center should align with container's center
        const elementCenter = elementLeft + elementWidth / 2;
        const targetScrollLeft = elementCenter - containerWidth / 2;
        
        // Scroll to the calculated position
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }, 200);
      
      return () => clearTimeout(timeoutId);
    }
  }, [currentStep]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-6 lg:p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 lg:mb-8 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
          How Attribution Works
        </h3>
        <p className="text-xs lg:text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          A seamless flow that guides users toward accurate feedback and learning
        </p>
      </motion.div>

      {/* User Flow - Interactive Steps */}
      <div className="w-full max-w-6xl mb-12">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-emerald-800/50 rounded-2xl p-6 lg:p-8 shadow-xl">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
              User Journey
            </h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>

          {/* Flow Steps - Horizontal Scrollable */}
          <div className="relative overflow-x-auto pb-4 px-4 py-2 scroll-smooth" ref={scrollContainerRef}>
            <div className="flex items-start gap-3 lg:gap-4 min-w-max">
              {userFlow.map((item, index) => {
                const colors = getColorClasses(item.color);
                const Icon = item.icon;
                const isActive = index === currentStep;
                const isPast = index < currentStep;

                return (
                  <React.Fragment key={item.step}>
                    <motion.div
                      ref={(el) => (stepRefs.current[index] = el)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: isActive || isPast ? 1 : 0.5,
                        scale: isActive ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-[200px] lg:w-[220px]"
                    >
                      <motion.div
                        className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-5 cursor-pointer h-full ${
                          isActive ? 'ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-900/20' : ''
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        onClick={() => {
                          setCurrentStep(index);
                          setIsPlaying(false);
                        }}
                      >
                        {/* Step Number & Icon */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isActive ? 'bg-emerald-500/20 border-2 border-emerald-500/50' : 'bg-gray-700/50 border-2 border-gray-600/50'
                          }`}>
                            <span className={`text-sm font-bold ${isActive ? 'text-emerald-400' : 'text-gray-400'}`} style={{ fontFamily: "'Sora', sans-serif" }}>
                              {item.step}
                            </span>
                          </div>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>

                        {/* Title */}
                        <h5 className={`text-sm font-bold mb-2 ${colors.text}`} style={{ fontFamily: "'Sora', sans-serif" }}>
                          {item.title}
                        </h5>

                        {/* Description */}
                        <p className="text-xs text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {item.description}
                        </p>

                        {/* Highlight Badge */}
                        <div className={`block px-4 py-2.5 rounded-lg text-xs border leading-relaxed text-center ${colors.badge}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {item.highlight}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Arrow Connector */}
                    {index < userFlow.length - 1 && (
                      <motion.div
                        className="flex items-center justify-center px-2 flex-shrink-0 self-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index < currentStep ? 1 : 0.3 }}
                      >
                        <ArrowRight className={`w-6 h-6 ${index < currentStep ? 'text-emerald-400' : 'text-gray-600'}`} />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {userFlow.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentStep(index);
                  setIsPlaying(false);
                }}
                className="p-2 -m-2 rounded-full transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep ? 'w-8 bg-emerald-500' : index < currentStep ? 'w-4 bg-emerald-500/50' : 'w-2 bg-gray-700'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="w-full max-w-6xl mb-8">
        <h4 className="text-lg font-bold text-white mb-6 text-center" style={{ fontFamily: "'Sora', sans-serif" }}>
          System Components
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map((component, index) => {
            const colors = getColorClasses(component.color);
            const Icon = component.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-5 cursor-pointer`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gray-900/30 ${colors.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {component.name}
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {component.description}
                    </p>
                  </div>
                </div>
                <div className={`inline-block px-2 py-1 rounded-full text-xs border ${colors.badge} mt-2`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  ✓ {component.benefit}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Key Benefits Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { label: 'Reduced Misdirected Blame', value: '35%', color: 'emerald' },
          { label: 'Actionable Reviews', value: '81%', color: 'emerald' },
          { label: 'Learning Opportunities', value: '100%', color: 'yellow' },
          { label: 'Creator Clarity', value: '100%', color: 'emerald' }
        ].map((stat, index) => {
          const colors = getColorClasses(stat.color);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 text-center`}
            >
              <div className={`text-3xl font-bold mb-2 ${colors.text}`} style={{ fontFamily: "'Sora', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 max-w-3xl text-center"
      >
        <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-800/30 rounded-xl p-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-emerald-400" />
            <h5 className="text-lg font-bold text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>
              Core Principle
            </h5>
          </div>
          <p className="text-sm text-emerald-100 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Attribution happens before blame is assigned. By prompting users to categorize failure causes as they write reviews, 
            we create a moment of reflection that reduces misdirected feedback and converts failure into learning opportunities.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AttributionConceptInfographic;

