import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Cases from "./sections/Cases";
import Skills from "./sections/Skills";
import Closing from "./sections/Closing";

export default function App() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white">
      <section className="h-screen snap-start">
        <Hero />
      </section>

      <section className="h-screen snap-start">
        <Story />
      </section>

      <section className="h-screen snap-start">
        <Cases />
      </section>

      <section className="h-screen snap-start">
        <Skills />
      </section>

      <section className="h-screen snap-start">
        <Closing />
      </section>
    </main>
  );
}
