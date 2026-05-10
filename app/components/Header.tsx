import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="relative block"
          aria-label="Saugat home"
        >
          <span className="absolute inset-x-5 inset-y-1 rounded-full bg-[#1e5096]/40 blur-2xl" />
          <img
            src="/Sikumna%20new%20logo%20black%20bg.png"
            alt="Sikumna logo"
            className="relative h-9 w-auto object-contain sm:h-11"
          />
        </Link>
      </div>
    </header>
  );
}
