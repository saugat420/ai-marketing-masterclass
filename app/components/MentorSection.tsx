import { Section } from "./Section";

export function MentorSection() {
  return (
    <Section title="Learn From Digital Saugat">
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-cyan-200/18 bg-gradient-to-br from-[#0b1628]/54 via-[#07111f]/48 to-[#111827]/52 p-3 shadow-xl shadow-black/25 backdrop-blur sm:border-cyan-200/14 sm:from-[#0b1628]/70 sm:via-[#07111f]/62 sm:to-[#111827]/68">
          <img
            src="/Group%20picture.png"
            alt="Saugat Basnet"
            className="aspect-[4/5] h-full w-full rounded-lg object-cover object-center"
          />
        </div>

        <div className="rounded-lg border border-cyan-200/18 bg-slate-950/34 p-6 shadow-xl shadow-black/25 backdrop-blur sm:border-cyan-200/14 sm:bg-slate-950/45 sm:p-8">
          <div className="space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
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
