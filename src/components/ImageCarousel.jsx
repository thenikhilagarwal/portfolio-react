import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  // Handle vertical scrolling for long screenshots
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Reset scroll position on slide change
    scrollContainer.scrollTop = 0;

    if (isHovered) return;

    // Auto-scroll animation logic if the slide is a long image
    let animationFrameId;
    const startScroll = () => {
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      if (maxScroll <= 0) return;

      const duration = 15000; // 15 seconds to scroll top to bottom
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;

        // Yo-yo effect (scroll down and then back up)
        const factor = Math.sin((progress * Math.PI) - (Math.PI / 2)) * 0.5 + 0.5;
        scrollContainer.scrollTop = factor * maxScroll;

        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    // Delay start of scroll slightly after slide transitions
    const delayTimer = setTimeout(startScroll, 800);

    return () => {
      clearTimeout(delayTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentIndex, isHovered]);

  return (
    <div
      className="relative w-full md:h-[500px] h-[250px] rounded-3xl overflow-hidden group bg-[#06131b]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          ref={scrollRef}
          className="w-full h-full overflow-hidden scrollbar-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          <img
            className="w-full rounded-3xl object-top object-cover"
            src={images[currentIndex]}
            alt="Project slide"
            style={{
              height: images[currentIndex].includes('thumbnail') ? '100%' : 'auto',
              minHeight: '100%'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots / Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#139bfd] w-6'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
