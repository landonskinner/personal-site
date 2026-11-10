import Link from "next/link";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sm font-bold uppercase tracking-widest text-copy-lighter">
    {children}
  </span>
);

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col gap-4">{children}</section>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-copy text-balance">
    {children}
  </h2>
);

export const Decision = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2 pl-4 border-l-4 border-border">
    <h3 className="text-xl font-bold text-copy">{title}</h3>
    {children}
  </div>
);

export const MetaList = ({ items }: { items: [string, string][] }) => (
  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 border-t-2 border-border">
    {items.map(([term, value]) => (
      <div key={term} className="flex flex-col gap-0.5 min-w-0">
        <dt className="text-xs font-bold uppercase tracking-widest text-copy-lighter">
          {term}
        </dt>
        <dd className="text-base text-copy">{value}</dd>
      </div>
    ))}
  </dl>
);

export const Compare = ({ items }: { items: [string, string][] }) => (
  <div className="grid sm:grid-cols-2 gap-4">
    {items.map(([title, body]) => (
      <div
        key={title}
        className="rounded-3.5xl border-2 border-border bg-background p-5 flex flex-col gap-1"
      >
        <h3 className="font-bold text-copy">{title}</h3>
        <p className="text-base">{body}</p>
      </div>
    ))}
  </div>
);

// Links one case study to the other at the bottom of the page.
export const NextCaseStudy = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => (
  <Link
    href={href}
    className="group flex flex-col gap-1 rounded-3.5xl border-2 border-border bg-background p-5 transition-colors duration-300 hover:border-copy-lighter"
  >
    <span className="text-xs font-bold uppercase tracking-widest text-copy-lighter">
      Other case study
    </span>
    <span className="text-xl font-bold text-copy">
      {title}{" "}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  </Link>
);
