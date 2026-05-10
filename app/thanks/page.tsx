import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ThanksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9ff] text-slate-950">
      <Header />
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(30,80,150,0.14),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.12),transparent_28%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex max-w-full rounded-full border border-yellow-500 bg-yellow-300 px-4 py-2 text-[11px] font-extrabold text-slate-950 shadow-[0_10px_28px_rgba(234,179,8,0.32)] sm:px-5 sm:py-2.5 sm:text-sm">
            Date: 24th May at 8 PM Live on ZOOM
          </div>
          <h1 className="mx-auto max-w-[22rem] text-[2rem] font-extrabold leading-tight sm:max-w-4xl sm:text-5xl">
            <span className="block sm:inline">You&apos;re Registered</span>{" "}
            <span className="block sm:inline">For The AI Marketing</span>{" "}
            <span className="block sm:inline">Masterclass</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[21rem] text-base font-semibold leading-7 text-slate-600 sm:max-w-2xl sm:text-lg">
            Watch the video below before closing this page...
          </p>

          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-[#1e5096]/15 bg-slate-950 shadow-2xl shadow-[#1e5096]/12">
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

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-[#1e5096]/15 bg-white p-7 text-center shadow-2xl shadow-[#1e5096]/8 sm:p-10">
          <h2 className="text-3xl font-extrabold text-slate-950">
            This Masterclass Is For Serious Learners Only
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            I&apos;ll show you how AI Marketing works, which tools matter, and how you can start
            learning this skill step by step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-[#1e5096] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#1e5096]/20 transition hover:bg-[#163d72] focus:outline-none focus:ring-2 focus:ring-[#1e5096]/30 focus:ring-offset-2 focus:ring-offset-white"
            >
              Join WhatsApp Reminder Group
            </a>
            <Link
              href="/"
              className="rounded-full border border-[#1e5096]/25 bg-white px-6 py-3.5 text-sm font-bold text-[#1e5096] transition hover:bg-[#edf4ff] focus:outline-none focus:ring-2 focus:ring-[#1e5096]/30 focus:ring-offset-2 focus:ring-offset-white"
            >
              Back To Home
            </Link>
          </div>
          <div className="mt-10 text-slate-600">
            <p>See you inside the masterclass.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <img
                src="/saugat-signoff.png"
                alt="Saugat Basnet"
                className="size-12 rounded-full object-cover"
              />
              <p className="font-bold text-slate-950">Saugat Basnet</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
