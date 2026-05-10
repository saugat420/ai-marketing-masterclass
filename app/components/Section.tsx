type SectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section className={`px-4 py-14 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase text-yellow-300">{eyebrow}</p>
          ) : null}
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20">
      {children}
    </div>
  );
}
