export function GrainOverlay({ id = "grain-noise" }: { id?: string }) {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-[0.22] mix-blend-overlay"
      aria-hidden
      preserveAspectRatio="none"
    >
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
