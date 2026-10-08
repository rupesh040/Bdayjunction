import { pageBanners } from "@/data";
import PageBanner from "@/components/PageBanner";
import contentData from "@/data/content.json";
import AboutPageClient from "@/components/AboutPageClient";
import WhyChooseUsClient from "@/components/WhyChooseUsClient";
import CTASection from "@/components/CTASection";
import Speakers from "@/components/Speakers";

export default function AboutPage() {
  const aboutPageData = (contentData as any).Birthday.sections.AboutPage.variants.BirthdayAboutPage1;
  const whyChooseUsData = (contentData as any).Birthday.sections.WhyChooseUs.variants.BirthdayWhyChooseUs1;

  return (
    <>
      <PageBanner {...pageBanners.about} />
      <AboutPageClient data={aboutPageData} />
      <WhyChooseUsClient data={whyChooseUsData} />
      <CTASection />
      <Speakers/>
    </>
  );
}
