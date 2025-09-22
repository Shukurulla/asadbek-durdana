import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Heart, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function RSVPForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    guestName: "",
    phoneNumber: "",
    willAttend: "",
    relationship: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.guestName || !formData.phoneNumber || !formData.willAttend) {
      toast.error("Илтимас, барлық керекли майданларды толтырың");
      return;
    }

    setIsSubmitting(true);

    // Форманы жибериўди симуляция қылыў
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(
      "Сизиң жуўабыңыз табыслы жиберилди! Сиз бенен бирге байрамлаўды асығыўшылық пенен күтемиз!"
    );
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-wedding-champagne/20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-wedding-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-wedding-gold/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-wedding-gold mb-6"
            >
              <CheckCircle size={64} className="mx-auto" />
            </motion.div>

            <h2 className="text-4xl serif text-wedding-accent mb-4">Рахмет!</h2>
            <p className="text-xl elegant text-wedding-text mb-6">
              Сизиң жуўабыңыз қабыл етилди. Бизиң қутлы күнимизди сиз бенен
              байрамлаўды асығыўшылық пенен күтемиз!
            </p>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-wedding-gold"
            >
              <Heart size={32} fill="currentColor" className="mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-wedding-champagne/20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl serif text-wedding-accent mb-4">
            Тойға шақырыў
          </h2>
          <motion.div
            className="w-24 h-px bg-wedding-gold mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-xl elegant text-wedding-text">
            Илтимас, бизге қосыласыз ба, хабарлаң
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-wedding-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-wedding-gold/20"
        >
          <div className="space-y-6">
            {/* Қонақ аты */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Label
                htmlFor="guestName"
                className="text-wedding-accent mb-2 block"
              >
                Толық атыңыз *
              </Label>
              <Input
                id="guestName"
                type="text"
                value={formData.guestName}
                onChange={(e) => handleInputChange("guestName", e.target.value)}
                className="bg-wedding-white/50 border-wedding-gold/30 focus:border-wedding-gold"
                placeholder="Атыңызды киритиң"
                required
              />
            </motion.div>

            {/* Телефон номери */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Label
                htmlFor="phoneNumber"
                className="text-wedding-accent mb-2 block"
              >
                Телефон номериңиз *
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="bg-wedding-white/50 border-wedding-gold/30 focus:border-wedding-gold"
                placeholder="Телефон номериңизди киритиң"
                required
              />
            </motion.div>

            {/* Қатнасыў */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Label
                htmlFor="willAttend"
                className="text-wedding-accent mb-2 block"
              >
                Қатнасасыз ба? *
              </Label>
              <select
                id="willAttend"
                value={formData.willAttend}
                onChange={(e) =>
                  handleInputChange("willAttend", e.target.value)
                }
                className="w-full p-3 bg-wedding-white/50 border border-wedding-gold/30 rounded-md focus:border-wedding-gold focus:outline-none elegant"
                required
              >
                <option value="">Илтимас, таңлаң</option>
                <option value="yes">Әўе, қатнасаман</option>
                <option value="no">Кешириң, келе алмайман</option>
              </select>
            </motion.div>

            {/* Қатнас */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Label
                htmlFor="relationship"
                className="text-wedding-accent mb-2 block"
              >
                Жупқа қатнасыңыз
              </Label>
              <Input
                id="relationship"
                type="text"
                value={formData.relationship}
                onChange={(e) =>
                  handleInputChange("relationship", e.target.value)
                }
                className="bg-wedding-white/50 border-wedding-gold/30 focus:border-wedding-gold"
                placeholder="Мысалы: дос, хызметкер, туўысқан"
              />
            </motion.div>

            {/* Хабар */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Label
                htmlFor="message"
                className="text-wedding-accent mb-2 block"
              >
                Жуп ушын арнаўлы хабар
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-wedding-white/50 border-wedding-gold/30 focus:border-wedding-gold min-h-24"
                placeholder="Тилеклериңизди ямаса арнаўлы өтинишлериңизди бөлисиң..."
              />
            </motion.div>

            {/* Жибериў түймеси */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-4"
            >
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-wedding-gold hover:bg-wedding-gold/90 text-white py-4 text-lg serif font-medium shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="mr-2"
                  >
                    <Heart size={20} />
                  </motion.div>
                ) : (
                  <Send size={20} className="mr-2" />
                )}
                {isSubmitting ? "Жибериў..." : "Жуўап жибериў"}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
