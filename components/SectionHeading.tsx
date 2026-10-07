export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`flex items-center gap-2 mb-3 ${centered ? "justify-center" : ""}`}>
        <span className="w-8 h-[2px] bg-primary"></span>
        <span className="text-primary font-bold text-sm tracking-wider uppercase">{eyebrow}</span>
        <span className="w-8 h-[2px] bg-primary"></span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
        {title.split(' ').map((word, i) => {
          // Highlight "Truly", "Special", "Clients", "Event" for demo purposes based on design
          const highlight = ["Truly", "Special", "Clients", "Event", "Happening", "Questions"].includes(word);
          return (
            <span key={i} className={highlight ? "text-primary" : ""}>
              {word}{" "}
            </span>
          );
        })}
      </h2>
      {subtitle && (
        <p className={`text-muted max-w-2xl text-lg ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
