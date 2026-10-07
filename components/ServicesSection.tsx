import { services } from "@/data";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const { cursiveText: eyebrow, headingPart1, headingPart2, description, items } = services;
  const title = `${headingPart1} ${headingPart2}`;

  return (
    <section className="py-20 bg-[#fdf1f5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {items.map((item) => (
            <ServiceCard key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
