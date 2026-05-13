import { InfoCard, Section } from "./Section";

const lessons = [
  "What AI Marketing actually means",
  "How AI is changing digital marketing",
  "How to write ads, content, emails, and landing page ideas with AI",
  "Which AI tools are useful for beginners",
  "How to start building your freelance skill step by step",
];

export function LearnSection() {
  return (
    <Section
      className="border-y border-cyan-200/10"
      title="What You'll Learn Inside The Masterclass"
    >
      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        {lessons.map((lesson, index) => (
          <InfoCard key={lesson}>
            <span className="mb-5 grid size-9 place-items-center rounded-lg border border-cyan-200/25 bg-[linear-gradient(135deg,#0ea5e9,#7c3aed)] text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
              {index + 1}
            </span>
            <p className="break-words text-base font-bold leading-6 text-slate-100">{lesson}</p>
          </InfoCard>
        ))}
      </div>
    </Section>
  );
}
