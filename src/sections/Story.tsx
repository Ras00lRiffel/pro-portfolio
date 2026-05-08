import { motion } from "framer-motion";
import SectionGlow from "../components/BackgroundGlow";

export default function Story() {
  return (
    <section className="h-screen flex items-center justify-center px-6 z-10 relative">
      <SectionGlow />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl z-10"
      >
        <h2 className="text-4xl md:text-5xl font-semibold">
          Engineering scalable systems
        </h2>

        <p className="text-gray-400 mt-6">
          WordPress architecture • Angular applications • Full stack systems •
          Performance optimization
        </p>
      </motion.div>
    </section>
  );
}
