export function Footer() {
  return (
    <footer className="border-t border-cyan-200/10 bg-[#02030a]/85 px-4 py-8 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-slate-400 sm:flex-row sm:justify-between sm:text-left">
        <img
          src="/Sikumna%20new%20logo%20black%20bg.png"
          alt="Sikumna"
          className="h-9 w-auto object-contain"
        />
        <p>Copyright (c) 2026 Sikumna Nepal. All rights reserved.</p>
      </div>
    </footer>
  );
}
