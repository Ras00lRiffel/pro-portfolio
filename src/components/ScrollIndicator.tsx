import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowUp } from "lucide-react";

type ScrollIndicatorProps = {
  top?: boolean;
};

export default function ScrollIndicator({ top = false }: ScrollIndicatorProps) {
  const { scrollY } = useScroll();

  // Fade out indicator slightly while scrolling
  const opacity = useTransform(scrollY, [0, 120], [1, 0.25]);

  // Smooth floating animation
  const floatingAnimation = {
    y: [0, 10, 0],
  };

  const handleClick = () => {
    if (top) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to next section
      const currentSection = document.activeElement?.closest("section");

      if (currentSection?.nextElementSibling) {
        currentSection.nextElementSibling.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.div
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={floatingAnimation}
      transition={{
        y: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.8,
        },
      }}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        z-30
      "
    >
      <button
        onClick={handleClick}
        aria-label={top ? "Back to top" : "Scroll down"}
        className="
          group
          relative
          w-14
          h-14
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white/10
          shadow-[0_0_30px_rgba(255,255,255,0.08)]
        "
      >
        {/* subtle glow ring */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-white/5
            blur-xl
            opacity-0
            group-hover:opacity-100
            transition
          "
        />

        {/* icon */}
        <div className="relative z-10">
          {top ? (
            <ArrowUp
              size={20}
              className="text-white/80 group-hover:text-white transition"
            />
          ) : (
            <ChevronDown
              size={20}
              className="text-white/80 group-hover:text-white transition"
            />
          )}
        </div>
      </button>
    </motion.div>
  );
}
