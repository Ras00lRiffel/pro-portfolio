import { motion } from "framer-motion";
import BackgroundGlow from "../components/BackgroundGlow";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Hero() {
  return (
    <>
      <section className="h-screen flex items-center justify-center relative px-6">
        <BackgroundGlow />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl z-10"
        >
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Full Stack Developer
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Building scalable, high-performance web experiences with modern
            technologies.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#cases" className="px-6 py-3 bg-purple-600 rounded-xl">
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-xl"
            >
              Contact
            </a>
          </div>
        </motion.div>
        <ScrollIndicator />
      </section>
    </>
  );
}
