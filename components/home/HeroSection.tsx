export function HeroSection() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 lg:py-28">
        <h1 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-stone-900 md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Places I&apos;ve Been,
          <br />
          Stories I&apos;ve Found
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:mt-10 md:text-xl md:leading-relaxed">
          A long-term journal of photographs and notes from places I have
          walked—across Europe and the United States—and the threads that tie
          one trip to the next. Use the map below to see where I&apos;ve been;
          galleries and longer pieces live under{" "}
          <span className="text-stone-700">Places</span> and{" "}
          <span className="text-stone-700">Trips</span>.
        </p>
      </div>
    </section>
  );
}
