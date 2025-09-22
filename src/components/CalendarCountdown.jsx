import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Heart } from "lucide-react";

export function CalendarCountdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Wedding date: August 18, 2025
  const weddingDate = new Date("2025-08-18T16:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Generate calendar for August 2025
  const generateCalendar = () => {
    const firstDay = new Date(2025, 7, 1); // August 2025 (month is 0-indexed)
    const lastDay = new Date(2025, 7, 31);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const calendar = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }

    return calendar;
  };

  const calendar = generateCalendar();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="py-20 px-4 bg-wedding-blush/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl serif text-wedding-accent mb-4">
            Save the Date
          </h2>
          <motion.div
            className="w-24 h-px bg-wedding-gold mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calendar Widget */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-wedding-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20"
          >
            <h3 className="text-3xl serif text-wedding-accent mb-6 text-center">
              August 2025
            </h3>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center p-2 font-medium text-wedding-accent text-sm"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendar.map((day, index) => (
                <motion.div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center text-sm relative
                    ${
                      day
                        ? "hover:bg-wedding-gold/10 rounded-lg transition-colors duration-200"
                        : ""
                    }
                    ${
                      day === 18
                        ? "bg-wedding-gold text-white rounded-lg font-bold"
                        : "text-wedding-text"
                    }
                  `}
                  whileHover={day ? { scale: 1.1 } : {}}
                >
                  {day}
                  {day === 18 && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart
                        size={12}
                        fill="currentColor"
                        className="text-wedding-white"
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-6 text-center"
            >
              <p className="elegant text-wedding-text">
                Our special day is marked with ♥
              </p>
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-wedding-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20"
          >
            <h3 className="text-3xl serif text-wedding-accent mb-8 text-center">
              Countdown to Forever
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-wedding-gold/10 rounded-xl p-4 mb-2">
                    <motion.span
                      className="text-3xl md:text-4xl serif font-bold text-wedding-gold block"
                      key={item.value} // This ensures the animation triggers on value change
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </motion.span>
                  </div>
                  <p className="elegant text-wedding-text text-sm">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-center"
            >
              <p className="text-lg elegant text-wedding-text mb-4">
                Until we say "I do"
              </p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-wedding-gold"
              >
                <Heart size={32} fill="currentColor" className="mx-auto" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
