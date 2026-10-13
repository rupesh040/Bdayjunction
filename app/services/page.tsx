import ServicesSection from "@/components/ServicesSection";
import { pageBanners } from "@/data";
import PageBanner from "@/components/PageBanner";

export default function ServicesPage() {
  return (
    <>
      <PageBanner {...pageBanners.services} />
      <ServicesSection isServicesPage={true} />
    </>
  );
}
