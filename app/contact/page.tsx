import { site, footer, header, pageBanners, about, blog, services } from "@/data";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <>
      <PageBanner {...pageBanners.contact} />
      <ContactSection />
    </>
  );
}