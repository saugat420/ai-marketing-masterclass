type SectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section className={`space-section px-4 py-14 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase text-cyan-200">{eyebrow}</p>
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
    <div className="min-w-0 rounded-lg border border-cyan-200/18 bg-slate-950/34 p-5 shadow-xl shadow-black/25 backdrop-blur sm:border-cyan-200/14 sm:bg-slate-950/45">
      {children}
    </div>
  );
}
