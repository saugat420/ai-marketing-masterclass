"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const statusOptions = [
  "Student",
  "Working Professional",
  "Job Seeker",
  "Freelancer",
  "Other",
];

export function RegistrationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect email marketing form embed code or registration API here.
    window.setTimeout(() => {
      router.push("/thanks");
    }, 750);
  }

  return (
    <section id="register" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-[#1e5096]/15 bg-white p-5 shadow-2xl shadow-[#1e5096]/8 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase text-[#1e5096]">Register now</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
            Reserve Your Free Seat
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Fill this short form to join the live AI Marketing Masterclass.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Masterclass registration">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-bold text-slate-700">
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1e5096] focus:ring-4 focus:ring-[#1e5096]/10"
              placeholder="Your full name"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1e5096] focus:ring-4 focus:ring-[#1e5096]/10"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#1e5096] focus:ring-4 focus:ring-[#1e5096]/10"
                placeholder="98XXXXXXXX"
              />
            </div>
          </div>
          <div>
            <label htmlFor="status" className="mb-2 block text-sm font-bold text-slate-700">
              Current Status *
            </label>
            <select
              id="status"
              name="status"
              required
              defaultValue=""
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition focus:border-[#1e5096] focus:ring-4 focus:ring-[#1e5096]/10"
            >
              <option value="" disabled>
                Select your status
              </option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-[#1e5096] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#1e5096]/20 transition hover:bg-[#163d72] focus:outline-none focus:ring-2 focus:ring-[#1e5096]/30 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Reserving..." : "Reserve My Free Seat"}
          </button>
        </form>
      </div>
    </section>
  );
}
