import contentData from "./content.json";
import {
  Site,
  Content,
  BirthdayTopbar1 as TopbarData,
  BirthdayHeader1 as HeaderData,
  QuickLink as NavbarItem,
  BirthdayBanner1 as BannerData,
  BirthdayAbout1 as AboutData,
  BirthdayServices1 as ServicesData,
  BirthdayCTA1 as CTAData,
  BirthdayTestimonial1 as TestimonialData,
  BirthdayTeam1 as TeamData,
  BirthdayBlog1 as BlogData,
  BirthdayFAQ1 as FAQData,
  BirthdayFooter1 as FooterData,
  PageBanners as PageBannersData,
  BirthdayContact1 as ContactData,
  BirthdayTeam1Item as TeamItem,
  BirthdayServices1Item as ServiceItem,
  BirthdayTestimonial1Item as TestimonialItem,
  BirthdayBlog1Item as BlogItem,
  BirthdayFAQ1Item as FAQItem
} from "../types/content";

export const site = (contentData as any).Birthday.site as Site;
const sections = (contentData as any).Birthday.sections;

// Explicitly export each section with typed aliases
export const topbar = sections.Topbar.variants.BirthdayTopbar1 as TopbarData;
export const header = sections.Header.variants.BirthdayHeader1 as HeaderData;
export const banner = sections.Banner.variants.BirthdayBanner1 as BannerData;
export const about = sections.About.variants.BirthdayAbout1 as AboutData;
export const services = sections.Services.variants.BirthdayServices1 as ServicesData;
export const cta = sections.CTA.variants.BirthdayCTA1 as CTAData;
export const testimonial = sections.Testimonial.variants.BirthdayTestimonial1 as TestimonialData;
export const team = sections.Team.variants.BirthdayTeam1 as TeamData;
export const blog = sections.Blog.variants.BirthdayBlog1 as BlogData;
export const faq = sections.FAQ.variants.BirthdayFAQ1 as FAQData;
export const footer = sections.Footer.variants.BirthdayFooter1 as FooterData;
export const pageBanners = sections.PageBanners as PageBannersData;
export const contact = sections.Contact.variants.BirthdayContact1 as ContactData;

// Keep the default export mirroring the full JSON structure to not break existing component imports
export const content = contentData as Content;
export default content;

export type {
  TopbarData,
  HeaderData,
  NavbarItem,
  BannerData,
  AboutData,
  ServicesData,
  CTAData,
  TestimonialData,
  TeamData,
  BlogData,
  FAQData,
  FooterData,
  PageBannersData,
  ContactData,
  Site,
  TeamItem,
  ServiceItem,
  TestimonialItem,
  BlogItem,
  FAQItem
};
