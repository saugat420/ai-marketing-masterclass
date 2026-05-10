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
    <Section className="bg-white/[0.03]" title="What You’ll Learn Inside The Masterclass">
      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        {lessons.map((lesson, index) => (
          <InfoCard key={lesson}>
            <span className="mb-5 grid size-9 place-items-center rounded-lg bg-amber-100 text-sm font-bold text-amber-700">
              {index + 1}
            </span>
            <p className="text-base font-bold leading-6 text-slate-100">{lesson}</p>
          </InfoCard>
        ))}
      </div>
    </Section>
  );
}
