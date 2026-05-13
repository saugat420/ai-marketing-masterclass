import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ThanksPage() {
  return (
    <main className="space-page min-h-screen overflow-x-hidden text-white">
      <Header />
      <section className="space-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(30,80,150,0.22),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(250,204,21,0.12),transparent_28%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex max-w-full rounded-full border border-yellow-500 bg-yellow-300 px-4 py-2 text-[11px] font-extrabold text-slate-950 shadow-[0_10px_28px_rgba(234,179,8,0.32)] sm:px-5 sm:py-2.5 sm:text-sm">
            Date: 24th May at 8 PM Live on ZOOM
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
            {/* Replace this sample Vimeo ID with your real Vimeo video ID. */}
            <iframe
              src="https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0"
              title="AI Marketing Masterclass welcome video"
              className="aspect-video w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
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
              href="#"
              className="rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-xl shadow-yellow-300/20 transition hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300/40 focus:ring-offset-2 focus:ring-offset-[#05070d]"
            >
              Join WhatsApp Reminder Group
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
