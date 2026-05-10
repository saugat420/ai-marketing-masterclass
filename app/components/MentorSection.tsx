import { Section } from "./Section";

export function MentorSection() {
  return (
    <Section title="Learn From Saugat Basnet">
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-[#1e5096]/15 bg-gradient-to-br from-[#edf4ff] via-white to-amber-50 p-3 shadow-xl shadow-[#1e5096]/5">
          <img
            src="/saugat-profile-web.jpg"
            alt="Saugat Basnet"
            className="aspect-[4/5] h-full w-full rounded-lg object-cover object-center"
          />
        </div>

        <div className="rounded-lg border border-[#1e5096]/15 bg-white p-6 shadow-xl shadow-[#1e5096]/5 sm:p-8">
          <div className="space-y-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            <p>
              I am Saugat Basnet aka Digital Saugat. With over 9 years of experience as a Digital
              Marketing Consultant and Coach, I have helped thousands of people in Nepal build their
              online careers.
            </p>
            <p>
              I am the founder of Sikumna.com, an educational platform that teaches practical
              digital skills, and Elite Club, a growing digital marketing agency.
            </p>
            <p>
              Over the years, more than 2,50,000 learners from across Nepal have learned digital
              marketing from me through my free and paid programs.
            </p>
            <p>
              And among them, 1,400+ are now working as successful freelancers and agency owners,
              turning their skills into real income.
            </p>
            <p>
              Now, through the AI Marketing Masterclass, I want to help you do the same, to turn
              your freelancing dream into reality and start your journey with clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
