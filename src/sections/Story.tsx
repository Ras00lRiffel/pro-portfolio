import { motion } from "framer-motion";
import SectionGlow from "../components/BackgroundGlow";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Story() {
  return (
    <section className="h-screen snap-start relative flex items-center justify-center px-6">
      <SectionGlow />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl relative z-10"
      >
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-300/70 mb-6">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Building scalable digital experiences with modern web technologies.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 text-gray-300 leading-relaxed text-lg">
          <p>
            Full Stack Developer with extensive experience in WordPress
            development, specializing in building and maintaining custom themes,
            plugins, and scalable full-stack solutions.
          </p>

          <p>
            Skilled in delivering high-performance websites, integrating modern
            frontend frameworks such as Angular (TypeScript), and optimizing
            applications for maintainability, scalability, and user experience.
          </p>

          <p>
            Proficient in PHP, JavaScript, HTML, CSS, SASS, Twig, and MySQL,
            with hands-on expertise in Docker-based environments, Git version
            control, and Azure DevOps workflows.
          </p>

          <p>
            Experienced in solving complex technical challenges ranging from
            database architecture to frontend UI/UX engineering, including
            large-scale WordPress migrations from Elementor to Gutenberg.
          </p>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
