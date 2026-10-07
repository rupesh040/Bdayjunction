import BlogSection from "@/components/BlogSection";
import { site, footer, header, pageBanners, about, blog, services } from "@/data";
import PageBanner from "@/components/PageBanner";

export default function BlogPage() {
  return (
    <>
      <PageBanner {...pageBanners.blog} />
      <div className="pt-20">
      <BlogSection />
      </div>
    </>
  );
}
