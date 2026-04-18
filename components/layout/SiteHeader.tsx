import Link from "next/link";

const navLinkClass =
  "rounded-md px-3 py-2 text-base font-medium text-stone-800 transition-colors hover:bg-stone-100 hover:text-stone-950 md:px-4 md:py-2.5 md:text-[1.05rem]";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-6 md:py-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-stone-900 md:text-xl"
        >
          Travel Journal
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2 md:gap-3">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/places" className={navLinkClass}>
            Places
          </Link>
          <Link href="/trips" className={navLinkClass}>
            Trips
          </Link>
        </nav>
      </div>
    </header>
  );
}
