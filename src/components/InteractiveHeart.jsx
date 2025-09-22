import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Heart, Volume2, VolumeX } from "lucide-react";

export function InteractiveHeart() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        {/* Placeholder for wedding music - you would replace with actual audio file */}
        <source src="/wedding-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Heart Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2,
        }}
      >
        <motion.button
          onClick={toggleMusic}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-wedding-gold hover:bg-wedding-gold/90 text-white rounded-full p-4 shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={
            isPlaying
              ? {
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 20px 25px -5px rgba(212, 165, 116, 0.1), 0 10px 10px -5px rgba(212, 165, 116, 0.04)",
                    "0 25px 50px -12px rgba(212, 165, 116, 0.25), 0 20px 25px -5px rgba(212, 165, 116, 0.1)",
                    "0 20px 25px -5px rgba(212, 165, 116, 0.1), 0 10px 10px -5px rgba(212, 165, 116, 0.04)",
                  ],
                }
              : {}
          }
          transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
        >
          <Heart
            size={24}
            fill={isPlaying ? "currentColor" : "none"}
            className="transition-all duration-300"
          />

          {/* Music note indicator */}
          <motion.div
            className="absolute -top-2 -right-2 bg-wedding-white text-wedding-gold rounded-full p-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isPlaying ? 1 : 0,
              scale: isPlaying ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {isPlaying ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </motion.div>

          {/* Floating hearts animation when playing */}
          {isPlaying && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-wedding-rose"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    x: [0, (i - 1) * 30],
                    y: [0, -60],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Heart size={16} fill="currentColor" />
                </motion.div>
              ))}
            </>
          )}
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-wedding-white text-wedding-text px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap border border-wedding-gold/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? "Pause romantic music" : "Play romantic music"}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-wedding-white"></div>
        </motion.div>
      </motion.div>
    </>
  );
}
