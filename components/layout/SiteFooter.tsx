export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[var(--border)] md:mt-32">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <p className="text-sm text-stone-500">
          © {year} Rickyu&apos;s Personal Travel Gallery.
        </p>
      </div>
    </footer>
  );
}
