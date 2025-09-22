import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-champagne/30 to-wedding-blush/30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl serif text-wedding-accent mb-4">
            Wedding Venue
          </h2>
          <motion.div
            className="w-24 h-px bg-wedding-gold mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-xl elegant text-wedding-text">
            Join us at the beautiful Golden Palace
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29c8ae8d4?w=600&h=400&fit=crop"
                alt="Golden Palace Wedding Venue"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl serif mb-2">Golden Palace</h3>
                  <p className="elegant opacity-90">Where dreams come true</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-wedding-gold rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-wedding-gold rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-wedding-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20">
              <h3 className="text-3xl serif text-wedding-accent mb-6">
                Venue Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <MapPin className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">Address</p>
                    <p className="elegant text-wedding-text">
                      123 Golden Avenue, Luxury District
                    </p>
                    <p className="elegant text-wedding-text">
                      City Center, 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <Clock className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">
                      Ceremony Time
                    </p>
                    <p className="elegant text-wedding-text">
                      4:00 PM - 11:00 PM
                    </p>
                    <p className="elegant text-wedding-text text-sm">
                      Cocktail hour starts at 3:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <Phone className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">Contact</p>
                    <p className="elegant text-wedding-text">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <Mail className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">Email</p>
                    <p className="elegant text-wedding-text">
                      events@goldenpalace.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white py-4 px-6 rounded-xl serif font-medium text-lg transition-colors duration-300 shadow-lg"
            >
              Get Directions
            </motion.button>
          </motion.div>
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16"
        >
          <div className="bg-wedding-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-wedding-gold/20">
            <h3 className="text-2xl serif text-wedding-accent mb-6 text-center">
              Find Us Here
            </h3>
            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
              {/* Placeholder for Google Maps - you would replace this with actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674908!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1c1d%3A0x40b82c3688c9460!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Palace Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
