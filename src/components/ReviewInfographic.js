import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, AlertCircle, User, Calendar } from 'lucide-react';

const ReviewInfographic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      rating: 1,
      author: '@JabbaTheHutt',
      date: '2025-07-01',
      reason: 'Functionality',
      review: 'I didnt return at all.. 22 grams wasted.',
      product: 'Print Profile PLA BI-COLOR BOOMERANG',
      category: 'misdirected',
      highlight: 'Boomerang didn\'t return - creator suggests practice needed, has 5000+ successful prints',
      source: 'MakerWorld Review'
    },
    {
      id: 2,
      rating: 1,
      author: '@Jacob_Prints',
      date: '2025-06-26',
      reason: 'Functionality & Strength',
      review: 'When I throw it it comes back but either straight down or perfect but not close to me at all and it is the right way and no matter what, it just happens. Breaks very easily.',
      product: 'Print Profile PLA ONE COLOR BOOMERANG',
      category: 'misdirected',
      highlight: 'Creator suggests using reinforced version and PETG, plus practice with beginner model',
      source: 'MakerWorld Review'
    },
    {
      id: 3,
      rating: 1,
      author: '@geokore',
      date: '2025-07-13',
      reason: 'Functionality',
      review: 'you can not move it, tried to losen is a bit but nothing',
      product: 'Print Profile Slidr triangle pattern',
      category: 'misdirected',
      highlight: 'Other users suggest reading description carefully - likely user error',
      source: 'MakerWorld Review'
    },
    {
      id: 4,
      rating: 2,
      author: '@firewolf14285',
      date: '2025-07-12',
      reason: 'User Error',
      review: 'hard to distinguish ams version from single color version I accidentally printed the wrong version and had to stop it',
      product: 'Print Profile Single Color',
      category: 'misdirected',
      highlight: 'Creator: "One says \'Single version\' and another \'AMS Version\', unless you can\'t read, I think it\'s clear enough."',
      source: 'MakerWorld Review'
    },
    {
      id: 5,
      rating: 3,
      author: '@Helban',
      date: '2025-06-21',
      reason: 'Strength Issue',
      review: 'Sadly after the very first throw, it just fell apart completely, i kinda expected it to be stronger with PETG, heh.',
      product: 'Print Profile (Boomerang)',
      category: 'misdirected',
      highlight: 'User printed with PETG, creator suggests changing filament brand - material quality issue',
      source: 'MakerWorld Review'
    },
    {
      id: 6,
      rating: 2,
      author: '@user_1755733486',
      date: '2025-07-14',
      reason: 'Strength Issue',
      review: 'cool but the ball joints in the finger ends are very very loosely modeled',
      product: 'Print Profile Right Hand - 2 Color',
      category: 'misdirected',
      highlight: 'Creator explains: "it\'s dependent on your filament, I can\'t make them tighter or they would fuse on certain filament" - design constraint blamed as flaw',
      source: 'MakerWorld Review'
    },
    {
      id: 7,
      rating: 3,
      author: '@user_1444886948',
      date: '2025-06-22',
      reason: 'Bed Adhesion',
      review: 'Did not adhere perfectly',
      product: 'Print Profile Zephyros FullSize',
      category: 'misdirected',
      highlight: 'Vague 3-star review for bed adhesion - likely user setup issue',
      source: 'MakerWorld Review'
    },
    {
      id: 8,
      rating: 1,
      author: '@user_1444886948',
      date: '2025-06-22',
      reason: 'No Comment',
      review: '',
      product: 'Print Profile',
      category: 'unaware',
      highlight: '1-star review with no explanation - creator has no context to improve',
      source: 'MakerWorld Review'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'misdirected':
        return {
          bg: 'from-red-900/30 to-orange-900/30',
          border: 'border-red-800/50',
          text: 'text-red-300',
          badge: 'bg-red-500/20 text-red-400 border-red-500/30'
        };
      case 'unaware':
        return {
          bg: 'from-yellow-900/30 to-amber-900/30',
          border: 'border-yellow-800/50',
          text: 'text-yellow-300',
          badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
        };
      default:
        return {
          bg: 'from-gray-900/30 to-gray-800/30',
          border: 'border-gray-700/50',
          text: 'text-gray-300',
          badge: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
        };
    }
  };

  const colors = getCategoryColor(currentReview.category);

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-6 lg:p-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 lg:mb-8 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>
          Real MakerWorld Reviews
        </h3>
        <p className="text-xs lg:text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Real MakerWorld reviews showing misdirected blame and user error
        </p>
      </motion.div>

      {/* Review Card */}
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-6 shadow-xl`}
          >
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {currentReview.author}
                  </div>
                  {currentReview.product && (
                    <div className="text-xs text-gray-300 mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {currentReview.product}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <Calendar className="w-3 h-3" />
                    {currentReview.date}
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      color: i < currentReview.rating ? '#ef4444' : '#374151'
                    }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                  >
                    <Star 
                      className={`w-5 h-5 ${i < currentReview.rating ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                    />
                  </motion.div>
                ))}
                <span className="ml-2 text-sm font-bold text-red-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {currentReview.rating} Star{currentReview.rating !== 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* Reason Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <AlertCircle className="w-3 h-3" />
                Reason: {currentReview.reason}
              </span>
            </div>

            {/* Review Text */}
            {currentReview.review ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-gray-200 mb-4 leading-relaxed ${colors.text} text-sm`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-gray-400">"</span>
                <span className="whitespace-pre-wrap">{currentReview.review}</span>
                <span className="text-gray-400">"</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 italic mb-4 text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                No comment provided
              </motion.div>
            )}

            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4 border-t border-gray-700/50 space-y-2"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                <span className={`text-xs font-medium ${colors.text} leading-relaxed`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {currentReview.highlight}
                </span>
              </div>
              {currentReview.source && (
                <div className="text-xs text-gray-500 italic pt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Source: {currentReview.source}
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-700'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 lg:mt-8 grid grid-cols-3 gap-3 lg:gap-4 text-center"
        >
          <div className="bg-gray-900/50 rounded-lg p-3 lg:p-4 border border-gray-800">
            <div className="text-xl lg:text-2xl font-bold text-red-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
              {reviews.filter(r => r.category === 'misdirected').length}
            </div>
            <div className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Misdirected
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3 lg:p-4 border border-gray-800">
            <div className="text-xl lg:text-2xl font-bold text-yellow-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
              {reviews.filter(r => r.category === 'unaware').length}
            </div>
            <div className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Unaware
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3 lg:p-4 border border-gray-800">
            <div className="text-xl lg:text-2xl font-bold text-emerald-400 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
              {reviews.length}
            </div>
            <div className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Total Examples
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewInfographic;

