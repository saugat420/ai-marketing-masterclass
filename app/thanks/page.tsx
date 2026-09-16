import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { VimeoPlayer } from "../components/VimeoPlayer";

export default function ThanksPage() {
  return (
    <main className="space-page min-h-screen overflow-x-hidden text-white">
      <Header />
      <section className="space-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(30,80,150,0.22),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(124,58,237,0.16),transparent_28%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="date-badge mx-auto mb-6 inline-flex max-w-full items-center rounded-full bg-black/60 px-3 py-2 text-[11px] font-extrabold text-cyan-50 sm:px-4 sm:py-2.5 sm:text-sm">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cyan-300/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-normal text-cyan-100">
              <span className="live-pulse-dot" />
              LIVE
            </span>
            <span>20th September at 8 PM on ZOOM</span>
          </div>
          <h1 className="mx-auto max-w-[22rem] text-[2rem] font-extrabold leading-tight sm:max-w-4xl sm:text-5xl">
            <span className="block sm:inline">You&apos;re Registered</span>{" "}
            <span className="block sm:inline">For The </span>
            <span className="ai-marketing-highlight block sm:inline">AI Marketing</span>{" "}
            <span className="block sm:inline">Masterclass</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[21rem] text-base font-semibold leading-7 text-slate-300 sm:max-w-2xl sm:text-lg">
            Watch the video below before closing this page...
          </p>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-cyan-200/15 bg-slate-950/85 shadow-2xl shadow-[#1e5096]/20 backdrop-blur">
            <VimeoPlayer videoId="1193138612" title="AI Marketing Masterclass welcome video" />
          </div>

          <div className="relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-3xl border border-violet-300/25 bg-slate-950/80 p-4 text-left shadow-[0_24px_70px_rgba(76,29,149,0.22)] backdrop-blur sm:grid sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-7 sm:p-6">
            <div className="absolute -right-20 -top-24 size-56 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="absolute -bottom-24 left-24 size-48 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative mx-auto w-full max-w-[11rem] overflow-hidden rounded-2xl border border-cyan-200/25 bg-[linear-gradient(155deg,rgba(14,165,233,0.2),rgba(76,29,149,0.34))] text-center shadow-xl shadow-black/25 sm:mx-0">
              <div className="flex items-center justify-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-cyan-100">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 2v3m12-3v3M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                </svg>
                Live Session
              </div>
              <div className="px-4 py-4">
                <p className="text-4xl font-black leading-none text-white">20</p>
                <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-200">
                  Sep
                </p>
                <p className="mt-3 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-sm font-bold text-white">
                  8:00 PM
                </p>
              </div>
            </div>

            <div className="relative mt-5 text-center sm:mt-0 sm:text-left">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
                One final step
              </p>
              <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                Reserve your seat now to receive the Zoom access details.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Last 70 seats remaining...
              </p>
              <a
                href="https://us06web.zoom.us/webinar/register/1817895398312/WN_phhWVNeFSJWAWJbzb8zs0w"
                className="primary-cta mt-5 w-full rounded-xl bg-[linear-gradient(100deg,#1e5096_0%,#0ea5e9_48%,#6d5dfc_100%)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_22px_52px_rgba(14,165,233,0.34),0_0_32px_rgba(109,93,252,0.28)] transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-2 focus:ring-offset-[#05070d] sm:w-auto"
              >
                <span>Register for the Masterclass</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-section px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-cyan-200/15 bg-slate-950/52 p-7 text-center shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
          <h2 className="text-3xl font-extrabold text-white">
            This Masterclass Is For Serious Learners Only
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            I&apos;ll show you how AI Marketing works, which tools matter, and how you can start
            learning this skill step by step.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://chat.whatsapp.com/GZrJUFLKMKD8oo8OR9rUt8"
              className="primary-cta whatsapp-cta rounded-full px-6 py-3.5 text-sm font-extrabold text-white transition focus:outline-none focus:ring-2 focus:ring-green-300/50 focus:ring-offset-2 focus:ring-offset-[#05070d]"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.42-4.03 8-9 8a10.2 10.2 0 0 1-4-.8L3 21l1.7-4A7.3 7.3 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z"
                  />
                </svg>
                Join WhatsApp Reminder Group
              </span>
            </a>
          </div>
          <div className="mt-10 text-slate-300">
            <p>See you inside the masterclass.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <img
                src="/saugat-signoff.png"
                alt="Saugat Basnet"
                className="size-12 rounded-full object-cover"
              />
              <p className="font-bold text-white">Saugat Basnet</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
