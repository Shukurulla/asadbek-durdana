import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Арқа фон градиенти */}
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
            Той орны
          </h2>
          <motion.div
            className="w-24 h-px bg-wedding-gold mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-xl elegant text-wedding-text">
            Әжайып Royal ресторанында бизге қосылың
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Орын сүўрети */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrGjfZVjb1ETaGOz2FSHgrZTT8WbApjkiB59cjVEYUucmCSyMBRgiFd7yXIEhSy1HfNOQ0kzW3Pdm8_KvArZliAUiwVid1zBzUo5O7XFIfAfavU0RDP-G-9BiL7QTtPbghdIPVd=s680-w680-h510-rw"
                alt="Royal ресторан"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl serif mb-2">Royal ресторан</h3>
                  <p className="elegant opacity-90">
                    Арзыўлар орынланатуғын жер
                  </p>
                </div>
              </div>
            </div>

            {/* Безендириў элементлери */}
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

          {/* Орын детальлары */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-wedding-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20">
              <h3 className="text-3xl serif text-wedding-accent mb-6">
                Той орны ҳаққында мағлыўмат
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <MapPin className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">Мәнзил</p>
                    <p className="elegant text-wedding-text">Хожели туманы</p>
                    <p className="elegant text-wedding-text">Royal ресторан</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <Clock className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">Той ўақты</p>
                    <p className="elegant text-wedding-text">
                      Саат 16:00 - 23:00
                    </p>
                    <p className="elegant text-wedding-text text-sm">
                      Қутлы болсын! Саат 15:30 дан баслап
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-wedding-gold/20 rounded-full p-2">
                    <Phone className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-wedding-accent">Байланыс</p>
                    <p className="elegant text-wedding-text">
                      +998 (91) 123-45-67
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
                      info@royalrestoran.uz
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Жол бағдары түймеси */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white py-4 px-6 rounded-xl serif font-medium text-lg transition-colors duration-300 shadow-lg"
            >
              Жол бағдары
            </motion.button>
          </motion.div>
        </div>

        {/* Карта бөлими */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16"
        >
          <div className="bg-wedding-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-wedding-gold/20">
            <h3 className="text-2xl serif text-wedding-accent mb-6 text-center">
              Бизди усы жерден табың
            </h3>
            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
              {/* Google Maps орнына - сиз ҳақыйқый картаны қоса аласыз */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.1209271347107!2d59.46041394081386!3d42.40911252484005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dda359db99270b%3A0x4abb3188f3944f00!2sROYAL%20RESTURANT!5e0!3m2!1sru!2s!4v1758528755845!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
