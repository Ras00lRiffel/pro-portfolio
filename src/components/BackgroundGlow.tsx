type SectionGlowProps = {
  color?: string;
  size?: number;
  opacity?: number;
};

export default function BackgroundGlow({
  color = "#a855f7",
  size = 800,
  opacity = 0.3,
}: SectionGlowProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div
        className="rounded-full blur-[180px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          opacity,
        }}
      />
    </div>
  );
}
