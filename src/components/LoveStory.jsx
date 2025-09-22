import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const loveStoryBlocks = [
  {
    title: "First Meeting",
    lines: [
      "They met on a summer evening, eyes locked across the street.",
      "Something clicked in that moment — hearts skipped a beat.",
      "Their first walk turned into endless talks.",
      "That night, the stars whispered something sweet.",
    ],
  },
  {
    title: "Growing Together",
    lines: [
      "From coffees to concerts, every moment they grew.",
      "Laughing through seasons, as love always knew.",
      "Through highs and lows, side by side.",
      "They built a bond they could never hide.",
    ],
  },
  {
    title: "The Proposal",
    lines: [
      'She said "yes" under golden skies.',
      "With teary smiles and joyful cries.",
      "Friends cheered and families blessed.",
      "A promise sealed — they were truly impressed.",
    ],
  },
  {
    title: "The Wedding Day",
    lines: [
      'Now comes the day they say "I do",',
      "Surrounded by hearts both old and new.",
      "Join the journey, celebrate the start,",
      "Of a lifetime together, one beating heart.",
    ],
  },
];

function StoryBlock({ block, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-wedding-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20"
    >
      <motion.h3
        className="text-2xl md:text-3xl cursive text-wedding-gold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
      >
        {block.title}
      </motion.h3>

      <div className="space-y-3">
        {block.lines.map((line, lineIndex) => (
          <motion.p
            key={lineIndex}
            className="text-lg elegant text-wedding-text text-center leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.5 + lineIndex * 0.1,
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

export function LoveStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-200px",
  });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4a574%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl serif text-wedding-accent mb-4">
            Our Love Story
          </h2>
          <motion.div
            className="w-24 h-px bg-wedding-gold mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {loveStoryBlocks.map((block, index) => (
            <StoryBlock key={index} block={block} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
