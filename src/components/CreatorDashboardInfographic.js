import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, AlertCircle, Filter, TrendingDown, TrendingUp, MessageSquare, XCircle, CheckCircle } from 'lucide-react';

const CreatorDashboardInfographic = () => {
  const [currentView, setCurrentView] = useState('problem'); // 'problem' or 'solution'

  const reviews = [
    {
      id: 1,
      rating: 1,
      author: '@user_123',
      text: 'Print failed. Model is bad.',
      attribution: 'unclear',
      actionable: false,
      issue: 'No context - could be user error or model issue'
    },
    {
      id: 2,
      rating: 2,
      author: '@user_456',
      text: 'Bed adhesion issue. Print lifted.',
      attribution: 'user_error',
      actionable: false,
      issue: 'User setup problem, not model fault'
    },
    {
      id: 3,
      rating: 3,
      author: '@user_789',
      text: 'Supports are too difficult to remove cleanly.',
      attribution: 'model_issue',
      actionable: true,
      issue: 'Actual design flaw - can be improved'
    },
    {
      id: 4,
      rating: 1,
      author: '@user_321',
      text: 'Power went out during print.',
      attribution: 'external',
      actionable: false,
      issue: 'External factor, not actionable'
    },
    {
      id: 5,
      rating: 2,
      author: '@user_654',
      text: 'Used wrong filament type. Still 2 stars.',
      attribution: 'user_error',
      actionable: false,
      issue: 'User mistake, not model problem'
    },
    {
      id: 6,
      rating: 4,
      author: '@user_987',
      text: 'Overhangs need better support placement.',
      attribution: 'model_issue',
      actionable: true,
      issue: 'Specific design improvement needed'
    }
  ];

  const actionableReviews = reviews.filter(r => r.actionable);
  const noiseReviews = reviews.filter(r => !r.actionable);

  const getAttributionColor = (attribution) => {
    switch (attribution) {
      case 'model_issue':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'user_error':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'external':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getAttributionLabel = (attribution) => {
    switch (attribution) {
      case 'model_issue':
        return 'Model Issue';
      case 'user_error':
        return 'User Error';
      case 'external':
        return 'External';
      default:
        return 'Unclear';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView(prev => prev === 'problem' ? 'solution' : 'problem');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-6 lg:p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 lg:mb-8 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
          Creator's Dilemma: Finding Signal in Noise
        </h3>
        <p className="text-xs lg:text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Without attribution, creators can't tell which reviews to act on
        </p>
      </motion.div>

      {/* Toggle View */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setCurrentView('problem')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            currentView === 'problem'
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-gray-800/50 text-gray-400 border border-gray-700/30'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Current Problem
        </button>
        <button
          onClick={() => setCurrentView('solution')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            currentView === 'solution'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-gray-800/50 text-gray-400 border border-gray-700/30'
          }`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          With Attribution
        </button>
      </div>

      {/* Dashboard View */}
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {currentView === 'problem' ? (
            <motion.div
              key="problem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-red-800/50 rounded-2xl p-6 shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    My Model Reviews
                  </h4>
                  <p className="text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {reviews.length} reviews • Average: 2.2 stars
                  </p>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    No Filter Available
                  </span>
                </div>
              </div>

              {/* Reviews List - Mixed Together */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {review.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {review.actionable ? (
                          <CheckCircle className="w-4 h-4 text-emerald-400 opacity-30" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400 opacity-30" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {review.text}
                    </p>
                    <div className="text-xs text-gray-500 italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {review.issue}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {actionableReviews.length}/{reviews.length}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Actionable
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {noiseReviews.length}/{reviews.length}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Noise
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      ?
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Unknown
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="solution"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-emerald-800/50 rounded-2xl p-6 shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    My Model Reviews
                  </h4>
                  <p className="text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {reviews.length} reviews • Filtered by: Model Issues Only
                  </p>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Filter className="w-5 h-5" />
                  <span className="text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Attribution Filter Active
                  </span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto">
                {['All', 'Model Issues', 'User Error', 'External'].map((filter) => (
                  <button
                    key={filter}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      filter === 'Model Issues'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-gray-800/50 text-gray-400 border border-gray-700/30'
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Filtered Reviews - Only Actionable */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {actionableReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {review.author}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs border ${getAttributionColor(review.attribution)}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {getAttributionLabel(review.attribution)}
                        </span>
                      </div>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-sm text-gray-200 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {review.text}
                    </p>
                    <div className="text-xs text-emerald-300 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      ✓ Actionable: {review.issue}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {actionableReviews.length}
                    </div>
                    <div className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Actionable Reviews
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-500 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {noiseReviews.length}
                    </div>
                    <div className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Filtered Out
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                      100%
                    </div>
                    <div className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Clarity
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 max-w-2xl text-center"
      >
        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-800/30 rounded-xl p-4">
          <p className="text-sm text-orange-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="font-bold">Without attribution:</span> Creators waste time on user errors while real issues get buried.
            <br />
            <span className="font-bold">With attribution:</span> Creators can focus on actionable feedback and prioritize improvements.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CreatorDashboardInfographic;

