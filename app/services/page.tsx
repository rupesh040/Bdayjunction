import ServicesSection from "@/components/ServicesSection";
import { site, footer, header, pageBanners, about, blog, services } from "@/data";
import PageBanner from "@/components/PageBanner";

export default function ServicesPage() {
  return (
    <>
      <PageBanner {...pageBanners.services} />
      <div className="pt-20">
      <ServicesSection />
      </div>
    </>
  );
}
