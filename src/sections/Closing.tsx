import { motion } from "framer-motion";
import SectionGlow from "../components/BackgroundGlow";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Closing() {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center relative px-6"
    >
      <SectionGlow color="#a855f7" size={900} opacity={0.2} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl z-10"
      >
        <h2 className="text-5xl font-semibold">Let’s build something great</h2>

        <p className="text-gray-400 mt-6">
          Open for freelance, contract, and full-time opportunities.
        </p>

        <a
          className="inline-block mt-8 px-6 py-3 bg-purple-600 rounded-xl hover:scale-105 transition cursor-pointer"
          href="mailto:riffelrasool@gmail.com"
        >
          Contact Me
        </a>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
