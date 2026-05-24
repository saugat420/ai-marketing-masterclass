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
            <span>May 27th at 8 PM on ZOOM</span>
          </div>
          <h1 className="mx-auto max-w-[22rem] text-[2rem] font-extrabold leading-tight sm:max-w-4xl sm:text-5xl">
            <span className="block sm:inline">You&apos;re Registered</span>{" "}
            <span className="block sm:inline">For The AI Marketing</span>{" "}
            <span className="block sm:inline">Masterclass</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[21rem] text-base font-semibold leading-7 text-slate-300 sm:max-w-2xl sm:text-lg">
            Watch the video below before closing this page...
          </p>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-cyan-200/15 bg-slate-950/85 shadow-2xl shadow-[#1e5096]/20 backdrop-blur">
            <VimeoPlayer videoId="1193138612" title="AI Marketing Masterclass welcome video" />
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
              href="https://chat.whatsapp.com/Bp8lmuv1U4Z152Tn9Xp9Wq"
              className="primary-cta rounded-full bg-[linear-gradient(100deg,#1e5096_0%,#0ea5e9_48%,#6d5dfc_100%)] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_22px_52px_rgba(14,165,233,0.34),0_0_32px_rgba(109,93,252,0.28)] transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-2 focus:ring-offset-[#05070d]"
            >
              <span>Join WhatsApp Reminder Group</span>
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
