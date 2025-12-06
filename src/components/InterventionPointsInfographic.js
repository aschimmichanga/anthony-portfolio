import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  MessageSquare, 
  Filter, 
  BarChart3,
  ArrowRight,
  XCircle,
  CheckCircle
} from 'lucide-react';

const InterventionPointsInfographic = () => {
  const interventionPoints = [
    {
      id: 1,
      stage: 'At the failure moment',
      problem: 'User doesn\'t know what went wrong',
      icon: AlertCircle,
      color: 'red',
      solution: 'AI-powered tag suggestions + contextual help'
    },
    {
      id: 2,
      stage: 'During review writing',
      problem: 'User blames creator without reflection',
      icon: MessageSquare,
      color: 'yellow',
      solution: 'Attribution prompts before submission'
    },
    {
      id: 3,
      stage: 'When browsing reviews',
      problem: 'Users can\'t filter by attribution type',
      icon: Filter,
      color: 'blue',
      solution: 'Review filters by cause type'
    },
    {
      id: 4,
      stage: 'Creator dashboard',
      problem: 'Creators can\'t distinguish actionable feedback',
      icon: BarChart3,
      color: 'purple',
      solution: 'Attribution analytics dashboard'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'red':
        return {
          bg: 'from-red-900/30 to-orange-900/30',
          border: 'border-red-800/50',
          text: 'text-red-300',
          icon: 'text-red-400',
          dot: 'bg-red-500'
        };
      case 'yellow':
        return {
          bg: 'from-yellow-900/30 to-amber-900/30',
          border: 'border-yellow-800/50',
          text: 'text-yellow-300',
          icon: 'text-yellow-400',
          dot: 'bg-yellow-500'
        };
      case 'blue':
        return {
          bg: 'from-blue-900/30 to-cyan-900/30',
          border: 'border-blue-800/50',
          text: 'text-blue-300',
          icon: 'text-blue-400',
          dot: 'bg-blue-500'
        };
      case 'purple':
        return {
          bg: 'from-purple-900/30 to-pink-900/30',
          border: 'border-purple-800/50',
          text: 'text-purple-300',
          icon: 'text-purple-400',
          dot: 'bg-purple-500'
        };
      default:
        return {
          bg: 'from-gray-900/30 to-gray-800/30',
          border: 'border-gray-700/50',
          text: 'text-gray-300',
          icon: 'text-gray-400',
          dot: 'bg-gray-500'
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
          User Journey: Intervention Points
        </h3>
        <p className="text-xs lg:text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Four critical moments where users need support
        </p>
      </motion.div>

      {/* Journey Map */}
      <div className="w-full max-w-6xl">
        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Points */}
            <div className="relative flex items-center justify-between">
              {interventionPoints.map((point, index) => {
                const colors = getColorClasses(point.color);
                const Icon = point.icon;
                const isLast = index === interventionPoints.length - 1;

                return (
                  <React.Fragment key={point.id}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="flex flex-col items-center flex-1"
                    >
                      {/* Icon Circle */}
                      <motion.div
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.bg} border-2 ${colors.border} flex items-center justify-center mb-4 cursor-pointer shadow-lg`}
                      >
                        <Icon className={`w-8 h-8 ${colors.icon}`} />
                      </motion.div>

                      {/* Stage Label */}
                      <div className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-4 mb-3 w-full max-w-[200px] text-center`}>
                        <div className="text-xs font-semibold text-gray-400 mb-1 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          Stage {point.id}
                        </div>
                        <div className={`text-sm font-bold ${colors.text} mb-2`} style={{ fontFamily: "'Sora', sans-serif" }}>
                          {point.stage}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <XCircle className="w-4 h-4 text-red-400" />
                          <p className="text-xs text-gray-300 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {point.problem}
                          </p>
                        </div>
                      </div>

                      {/* Solution Badge */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg px-3 py-2 max-w-[200px]"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <p className="text-xs text-emerald-300 leading-tight text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {point.solution}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Arrow */}
                    {!isLast && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className="mx-2 flex-shrink-0"
                      >
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {interventionPoints.map((point, index) => {
            const colors = getColorClasses(point.color);
            const Icon = point.icon;

            return (
              <React.Fragment key={point.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-xl p-5`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.bg} border-2 ${colors.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-gray-400 mb-1 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Stage {point.id}
                      </div>
                      <div className={`text-base font-bold ${colors.text} mb-2`} style={{ fontFamily: "'Sora', sans-serif" }}>
                        {point.stage}
                      </div>
                      <div className="flex items-start gap-2 mb-3">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {point.problem}
                        </p>
                      </div>
                      <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg px-3 py-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-emerald-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {point.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow Down */}
                {index < interventionPoints.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex justify-center"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 lg:mt-10 max-w-3xl text-center"
      >
        <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-800/30 rounded-xl p-6">
          <p className="text-sm text-emerald-100 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="font-bold">The Opportunity:</span> By addressing these four intervention points, we can transform frustration into learning opportunities and create a fairer, more actionable feedback system for both users and creators.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default InterventionPointsInfographic;

