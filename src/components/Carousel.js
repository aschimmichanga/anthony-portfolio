import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ images, objectFit = 'contain' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [images.length]);

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full h-full">
            {images.map((img, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    {img.src.endsWith('.mp4') || img.type === 'video' ? (
                        <video
                            src={img.src}
                            className="w-full h-full object-contain"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    ) : (
                        <img
                            src={img.src}
                            alt={img.label}
                            className={`w-full h-full object-${objectFit}`}
                        />
                    )}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <p className="text-white text-xs font-medium text-center px-2">{img.label}</p>
                        {images.length > 1 && (
                            <div className="absolute bottom-8 flex gap-8">
                                <p className="text-emerald-400 text-[10px] uppercase tracking-wider">← Prev</p>
                                <p className="text-emerald-400 text-[10px] uppercase tracking-wider">Next →</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}

            {/* Directional Click Areas */}
            {images.length > 1 && (
                <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full cursor-w-resize" onClick={handlePrev} title="Previous Image" />
                    <div className="w-1/2 h-full cursor-e-resize" onClick={handleNext} title="Next Image" />
                </div>
            )}

            {/* Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10" onClick={(e) => e.stopPropagation()}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-emerald-500 w-4' : 'bg-white/40 hover:bg-white/60'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;