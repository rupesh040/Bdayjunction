import { site, footer, header, pageBanners, about, blog, services } from "@/data";
import PageBanner from "@/components/PageBanner";
import FAQSection from "@/components/FAQ";

export default function FAQ() {
  return (
    <>
      <PageBanner {...pageBanners.faq} />
      <FAQSection />
    </>
  );
}