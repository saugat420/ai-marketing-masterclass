import { Footer } from "./Footer";
import { Header } from "./Header";

type SimpleActionPageProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  helperText?: string;
};

const dateText = "May 27th at 8 PM on ZOOM";

export function SimpleActionPage({
  heading,
  description,
  buttonLabel,
  buttonHref = "#",
  helperText,
}: SimpleActionPageProps) {
  return (
    <main className="space-page min-h-screen overflow-x-hidden text-white">
      <Header />
      <section className="relative flex min-h-[calc(100svh-61px)] items-center overflow-hidden px-4 py-14 text-center sm:min-h-[calc(100svh-77px)] sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(2,3,10,0.42),transparent_33%),linear-gradient(180deg,rgba(2,3,10,0.04)_0%,rgba(2,3,10,0.28)_72%,#02030a_100%)] sm:bg-[radial-gradient(circle_at_50%_42%,rgba(2,3,10,0.6),transparent_33%),linear-gradient(180deg,rgba(2,3,10,0.08)_0%,rgba(2,3,10,0.38)_72%,#02030a_100%)]" />
        <div className="mx-auto w-full max-w-5xl">
          <div className="date-badge mx-auto inline-flex max-w-full items-center rounded-full bg-black/60 px-3 py-2 text-xs font-extrabold text-cyan-50 sm:px-4 sm:py-2.5 sm:text-sm">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cyan-300/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-normal text-cyan-100">
              <span className="live-pulse-dot" />
              LIVE
            </span>
            <span>{dateText}</span>
          </div>

          <h1 className="mx-auto mt-6 max-w-[21rem] break-words text-[2.35rem] font-extrabold leading-[1.04] tracking-normal text-white sm:max-w-4xl sm:text-5xl lg:text-6xl">
            {heading}
          </h1>

          <p className="mx-auto mt-5 max-w-[21rem] break-words text-base font-semibold leading-7 text-slate-300 sm:max-w-3xl sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={buttonHref}
              className="primary-cta w-full max-w-[19rem] rounded-full bg-[linear-gradient(100deg,#1e5096_0%,#0ea5e9_48%,#6d5dfc_100%)] px-7 py-3.5 text-center text-sm font-bold text-white shadow-[0_22px_52px_rgba(14,165,233,0.34),0_0_32px_rgba(109,93,252,0.28)] transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-2 focus:ring-offset-[#02030a] sm:w-auto sm:max-w-none"
            >
              <span>{buttonLabel}</span>
            </a>
            {helperText ? (
              <p className="rounded-full border border-white/10 bg-black/30 px-4 py-1.5 text-sm font-extrabold text-white shadow-lg shadow-black/20 backdrop-blur">
                {helperText}
              </p>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
