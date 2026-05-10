export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(30,80,150,0.16),transparent_34%),radial-gradient(circle_at_18%_32%,rgba(245,158,11,0.12),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f7f9ff_72%,#edf4ff_100%)]" />
      <div className="mx-auto flex w-full max-w-5xl items-start justify-center overflow-hidden px-4 pb-10 pt-9 text-center sm:min-h-[calc(100svh-77px)] sm:items-center sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="w-full min-w-0 max-w-full">
          <div className="mb-4 inline-flex max-w-full rounded-full border border-yellow-500 bg-yellow-300 px-4 py-2 text-[11px] font-extrabold text-slate-950 shadow-[0_10px_28px_rgba(234,179,8,0.32)] sm:mb-6 sm:px-5 sm:py-2.5 sm:text-sm">
            Date: 24th May at 8 PM Live on ZOOM
          </div>
          <h1 className="mx-auto max-w-4xl text-[2.05rem] font-extrabold leading-[1.02] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
            <span className="block sm:inline">Learn AI Marketing</span>{" "}
            <span className="block sm:inline">From Scratch</span>{" "}
            <span className="block sm:inline">In 90 Mins</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[19.5rem] text-[0.95rem] leading-6 text-slate-600 sm:mt-6 sm:max-w-3xl sm:text-lg sm:leading-7">
            In this free masterclass, you&apos;ll learn how AI Marketing can help you build a high
            paying freelancer career in 2026 even if you are a beginner.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href="#register"
              className="w-full max-w-[19rem] rounded-full bg-[#1e5096] px-7 py-3.5 text-center text-sm font-bold text-white shadow-xl shadow-[#1e5096]/20 transition hover:bg-[#163d72] focus:outline-none focus:ring-2 focus:ring-[#1e5096]/30 focus:ring-offset-2 focus:ring-offset-white sm:w-auto sm:max-w-none"
            >
              Reserve My Free Seat
            </a>
            <p className="text-sm font-bold text-slate-500">Only 97 seats remain...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
