import SectionGlow from "../components/BackgroundGlow";
import ScrollIndicator from "../components/ScrollIndicator";
export default function Skills() {
  return (
    <section className="h-screen flex items-center justify-center relative px-6 z-10">
      <SectionGlow />

      <div className="max-w-5xl w-full text-center z-10">
        <h2 className="text-4xl font-semibold mb-12">Technical Expertise</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "WordPress Development",
            "Angular & TypeScript",
            "PHP & MySQL",
            "Docker Environments",
            "Git & Azure DevOps",
            "Performance Optimization",
          ].map((s) => (
            <div
              key={s}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
