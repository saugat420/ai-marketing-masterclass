export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(2,3,10,0.42),transparent_33%),linear-gradient(180deg,rgba(2,3,10,0.04)_0%,rgba(2,3,10,0.28)_72%,#02030a_100%)] sm:bg-[radial-gradient(circle_at_50%_42%,rgba(2,3,10,0.6),transparent_33%),linear-gradient(180deg,rgba(2,3,10,0.08)_0%,rgba(2,3,10,0.38)_72%,#02030a_100%)]" />
      <div className="mx-auto flex w-full max-w-5xl items-start justify-center overflow-hidden px-4 pb-[4.5rem] pt-16 text-center sm:min-h-[calc(82svh-77px)] sm:items-center sm:px-6 sm:py-[4.5rem] lg:min-h-[calc(78svh-77px)] lg:px-8 lg:py-[5.5rem]">
        <div className="w-full min-w-0 max-w-full">
          <div className="date-badge mb-7 inline-flex max-w-full items-center rounded-full bg-black/60 px-3 py-2 text-xs font-extrabold text-cyan-50 sm:mb-8 sm:px-4 sm:py-2.5 sm:text-sm">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cyan-300/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-normal text-cyan-100">
              <span className="live-pulse-dot" />
              LIVE
            </span>
            <span>May 27th at 8 PM on ZOOM</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-[2.45rem] font-extrabold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl">
            <span className="block sm:inline">Learn AI</span>{" "}
            <span className="block sm:inline">Marketing</span>{" "}
            <span className="block sm:inline">From Scratch</span>{" "}
            <span className="block sm:inline">In 90 Mins</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[21rem] break-words text-base leading-7 text-slate-300 sm:mt-8 sm:max-w-3xl sm:text-lg sm:leading-7">
            In this free masterclass, you&apos;ll learn how AI Marketing can help you build a high
            paying freelancer career in 2026 even if you are a beginner.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:mt-10">
            <a
              href="#register"
              className="primary-cta w-full max-w-[19rem] rounded-full bg-[linear-gradient(100deg,#1e5096_0%,#0ea5e9_48%,#6d5dfc_100%)] px-7 py-3.5 text-center text-sm font-bold text-white shadow-[0_22px_52px_rgba(14,165,233,0.34),0_0_32px_rgba(109,93,252,0.28)] transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-2 focus:ring-offset-[#02030a] sm:w-auto sm:max-w-none"
            >
              <span>Reserve My Free Seat</span>
            </a>
            <p className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-sm font-extrabold text-white shadow-lg shadow-black/20 backdrop-blur">
              Hurry up! Only 97 seats left...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
