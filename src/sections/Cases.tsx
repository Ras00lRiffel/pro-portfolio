import { motion } from "framer-motion";
import SectionGlow from "../components/BackgroundGlow";
import ScrollIndicator from "../components/ScrollIndicator";

const cases = [
  {
    title: "Enterprise WordPress Migration",
    stacks: ["WordPress", "PHP", "Gutenberg", "MySQL"],
    desc: "Migrated Elementor site to Gutenberg with major performance and maintainability improvements.",
    image: "https://placehold.co/800x500/111111/FFFFFF?text=Project+Preview",
    url: "https://example.com",
  },
  {
    title: "Angular Dashboard System",
    stacks: ["Angular", "TypeScript", "REST API", "SCSS"],
    desc: "Built scalable admin dashboard with modular architecture and API integration.",
    image: "https://placehold.co/800x500/111111/FFFFFF?text=Project+Preview",
    url: "https://example.com",
  },
  {
    title: "Full Stack SaaS Platform",
    stacks: ["React", "Node.js", "PostgreSQL", "Docker"],
    desc: "Designed backend architecture, authentication system, and scalable frontend structure.",
    image: "https://placehold.co/800x500/111111/FFFFFF?text=Project+Preview",
    url: "https://example.com",
  },
  {
    title: "Custom WordPress Theme",
    stacks: ["Twig", "SASS", "PHP", "WordPress"],
    desc: "Developed a fully custom scalable WordPress theme with reusable components.",
    image: "https://placehold.co/800x500/111111/FFFFFF?text=Project+Preview",
    url: "https://example.com",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="h-screen snap-start relative overflow-hidden flex items-center justify-center px-6"
    >
      <SectionGlow />

      <div className="max-w-7xl w-full relative z-10 overflow-y-auto max-h-[90vh] pr-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold">Selected Work</h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of scalable web platforms, custom WordPress systems,
            and modern frontend applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* STACKS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300 border border-white/10"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-8">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
