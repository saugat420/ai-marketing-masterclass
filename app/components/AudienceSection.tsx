import { InfoCard, Section } from "./Section";

const audience = [
  "You are a student",
  "You are a working professional",
  "You are looking for a job",
  "You want to learn AI + marketing",
  "You want to explore freelancing",
  "You are a complete beginner",
];

export function AudienceSection() {
  return (
    <Section title="This Masterclass Is For You If…">
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {audience.map((item) => (
          <InfoCard key={item}>
            <p className="text-base font-bold text-slate-100">{item}</p>
          </InfoCard>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-yellow-300/30 bg-yellow-300 p-5 text-base font-extrabold text-slate-950 shadow-xl shadow-yellow-300/15">
        No marketing experience needed. No coding knowledge needed.
      </div>
    </Section>
  );
}
