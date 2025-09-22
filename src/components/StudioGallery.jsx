import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&crop=faces",
    alt: "Igalbek & Aynura - Studio Shot 1",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=faces",
    alt: "Igalbek & Aynura - Studio Shot 2",
  },
  {
    src: "https://images.unsplash.com/photo-1582391265936-e3db765a3fa0?w=600&h=400&fit=crop&crop=faces",
    alt: "Igalbek & Aynura - Studio Shot 3",
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=faces",
    alt: "Igalbek & Aynura - Studio Shot 4",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&crop=faces",
    alt: "Igalbek & Aynura - Studio Shot 5",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop&crop=faces",
    alt: "Igalbek & Aynura - Studio Shot 6",
  },
];

export function StudioGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 bg-wedding-ivory/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl serif text-wedding-accent mb-4">
            Studio Gallery
          </h2>
          <motion.div
            className="w-24 h-px bg-wedding-gold mx-auto mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-xl elegant text-wedding-text">
            Capturing our love in timeless moments
          </p>
        </motion.div>

        {/* Main Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Overlay with heart */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
              <motion.div
                className="absolute top-4 right-4 text-wedding-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={24} fill="currentColor" />
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-wedding-white/80 hover:bg-wedding-white text-wedding-accent rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-wedding-white/80 hover:bg-wedding-white text-wedding-accent rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center space-x-3 overflow-x-auto pb-4"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-wedding-gold shadow-lg scale-110"
                  : "border-wedding-white/50 hover:border-wedding-gold/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid - Additional smaller images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
        >
          {galleryImages.slice(0, 8).map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => goToImage(index)}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
