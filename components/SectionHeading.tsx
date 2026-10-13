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
    <div className={`mb-10 sm:mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
        <span className="w-10 h-[2px] bg-[#e32973]"></span>
        <span className="text-[#e32973] font-bold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase">{eyebrow}</span>
        <span className="w-10 h-[2px] bg-[#e32973]"></span>
      </div>
      <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#10213e] mb-4 leading-[1.1] tracking-[-1px]">
        {title.split(' ').map((word, i) => {
          const highlight = ["Truly", "Special", "Clients", "Event", "Happening", "Questions", "Services"].includes(word);
          return (
            <span key={i} className={highlight ? "text-[#ed2671]" : ""}>
              {word}{" "}
            </span>
          );
        })}
      </h2>
      {subtitle && (
        <p className={`text-[#5e687b] max-w-2xl text-[15px] sm:text-[16px] leading-7 ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
