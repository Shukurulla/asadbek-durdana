import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const WeddingHeader = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-wedding-gold/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-wedding-gold/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4">
        {/* Elegant Initials */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl serif font-light text-wedding-gold tracking-wider">
            I & A
          </h1>
          <motion.div
            className="w-32 h-px bg-wedding-gold mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Couple Photo Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8 relative"
        >
          <div className="w-64 h-80 md:w-80 md:h-96 mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-wedding-white">
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=500&fit=crop&crop=faces"
              alt="Igalbek & Aynura"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -top-4 -right-4 text-wedding-gold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={32} fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Couple Names with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl cursive text-wedding-accent">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              Igalbek
            </motion.span>
            <motion.span
              className="mx-4 text-wedding-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              Aynura
            </motion.span>
          </h2>
        </motion.div>

        {/* Wedding Date */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="relative"
        >
          <div className="inline-block bg-wedding-white/80 backdrop-blur-sm rounded-xl px-8 py-4 shadow-lg border border-wedding-gold/20">
            <p className="text-2xl md:text-3xl serif text-wedding-text mb-2">
              Wedding Day
            </p>
            <p className="text-4xl md:text-5xl serif font-medium text-wedding-gold">
              18.08.2025
            </p>
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-wedding-gold"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-wedding-gold"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-wedding-gold"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-wedding-gold"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-8 bg-wedding-gold"></div>
        <div className="w-2 h-2 bg-wedding-gold rounded-full mx-auto mt-2"></div>
      </motion.div>
    </motion.section>
  );
};
