import { Footer } from "./Footer";
import { Header } from "./Header";

type SimpleActionPageProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  helperText?: string;
};

const dateText = "Date: 24th May at 8 PM Live on ZOOM";

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
      <section className="relative flex min-h-[calc(100svh-77px)] items-center overflow-hidden px-4 py-14 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(2,3,10,0.42),transparent_33%),linear-gradient(180deg,rgba(2,3,10,0.04)_0%,rgba(2,3,10,0.28)_72%,#02030a_100%)] sm:bg-[radial-gradient(circle_at_50%_42%,rgba(2,3,10,0.6),transparent_33%),linear-gradient(180deg,rgba(2,3,10,0.08)_0%,rgba(2,3,10,0.38)_72%,#02030a_100%)]" />
        <div className="mx-auto w-full max-w-5xl">
          <div className="mx-auto inline-flex max-w-full rounded-full border border-yellow-200/70 bg-yellow-300 px-4 py-2 text-xs font-extrabold text-slate-950 shadow-[0_10px_36px_rgba(250,204,21,0.34)] sm:px-5 sm:py-2.5 sm:text-sm">
            {dateText}
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
              className="w-full max-w-[19rem] rounded-full bg-[#1e5096] px-7 py-3.5 text-center text-sm font-bold text-white shadow-xl shadow-cyan-500/25 transition hover:bg-[#2568bd] focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-2 focus:ring-offset-[#02030a] sm:w-auto sm:max-w-none"
            >
              {buttonLabel}
            </a>
            {helperText ? (
              <p className="text-sm font-bold text-[#fde047] [text-shadow:0_0_18px_rgba(250,204,21,0.65)]">
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
