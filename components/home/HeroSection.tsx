export function HeroSection() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:py-36">
        <h1 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-stone-900 md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Places I&apos;ve Been,
          <br />
          Stories I&apos;ve Found
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl md:leading-relaxed">
          A quiet record of where the road went—European cities and the Swiss
          Alps, then the American West and both coasts—and the small details
          worth remembering.
        </p>
      </div>
    </section>
  );
}
