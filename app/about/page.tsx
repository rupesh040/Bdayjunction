import SectionHeading from "@/components/SectionHeading";
import { site, footer, header, pageBanners, about, blog, services } from "@/data";
import PageBanner from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <PageBanner {...pageBanners.about} />
      <div className="py-20 bg-background min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="ABOUT US" title="Learn More About BdayJunction" centered />
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-pink-50 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted mb-6 leading-relaxed">
            {about.description}
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Our mission is to bring joy and perfect execution to every event we handle. We specialize in making your dream birthday celebration a reality.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
