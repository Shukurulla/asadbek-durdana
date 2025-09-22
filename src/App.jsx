import { WeddingHeader } from "./components/WeddingHeader";
import { LoveStory } from "./components/LoveStory";
import { StudioGallery } from "./components/StudioGallery";
import { LocationSection } from "./components/LocationSection.jsx";
import { CalendarCountdown } from "./components/CalendarCountdown";
import { RSVPForm } from "./components/RSVPForm";
import { InteractiveHeart } from "./components/InteractiveHeart";
import { Toaster } from "./components/ui/sonner";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen wedding-gradient">
      {/* Header - инициаллар, сүўрет, атлар ҳәм сана */}
      <WeddingHeader />

      {/* Муҳаббат тарийхы бөлими */}
      <LoveStory />

      {/* Студия галереясы */}
      <StudioGallery />

      {/* Орын бөлими */}
      <LocationSection />

      {/* Календарь ҳәм кери санаў */}
      <CalendarCountdown />

      {/* Footer */}
      <motion.footer
        className="py-16 text-center bg-wedding-ivory/50 border-t border-wedding-gold/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl cursive text-wedding-gold mb-4">
              Асадбек & Дурдана
            </h3>
            <p className="text-lg elegant text-wedding-text mb-6">
              Бизиң муҳаббат тарийхымыздың бир бөлеги болғаныңыз ушын рахмет
            </p>
            <div className="text-6xl text-wedding-gold mb-4">∞</div>
            <p className="elegant text-wedding-accent">
              Мәңгиге бирге, ҳеш қашан айырылмастан. Аралықта болсақ та, жүректе
              ҳәмме ўақыт бирге.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-wedding-gold/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="elegant text-sm text-wedding-text/70">
              © 2025 Асадбек & Дурдана тойы. Бизиң қутлы күнимиз ушын муҳаббат
              пенен жаратылды ♥
            </p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Интерактив жүрек - Музыка ойнатқыш */}
      <InteractiveHeart />

      {/* Toast хабарламалары */}
      <Toaster position="top-center" />
    </div>
  );
}
