import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SlicerWizardFlow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: `${process.env.PUBLIC_URL}/images/case-studies/slicer-flow-1.png`,
            caption: 'Step 1: User opens slicer with a model that needs support'
        },
        {
            src: `${process.env.PUBLIC_URL}/images/case-studies/slicer-flow-2.png`,
            caption: 'Step 2: AI Assistant identifies potential adhesion issues'
        },
        {
            src: `${process.env.PUBLIC_URL}/images/case-studies/slicer-flow-3.png`,
            caption: 'Step 3: Assistant suggests adding a brim'
        },
        {
            src: `${process.env.PUBLIC_URL}/images/case-studies/slicer-flow-4.png`,
            caption: 'Step 4: User accepts suggestion, brim is applied'
        },
        {
            src: `${process.env.PUBLIC_URL}/images/case-studies/slicer-flow-5.png`,
            caption: 'Step 5: Ready to print with higher success rate'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full aspect-video bg-gray-900 group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex].src}
                    alt={images[currentIndex].caption}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain"
                />
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

            {/* Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center px-4 pointer-events-none">
                <p className="text-white text-sm font-medium bg-black/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm border border-white/10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {images[currentIndex].caption}
                </p>
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-emerald-500/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <FiChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-emerald-500/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <FiChevronRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-emerald-400 w-4' : 'bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlicerWizardFlow;
