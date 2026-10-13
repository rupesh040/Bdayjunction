import BlogSection from "@/components/BlogSection";
import { pageBanners } from "@/data";
import PageBanner from "@/components/PageBanner";

export default function BlogPage() {
  return (
    <>
      <PageBanner {...pageBanners.blog} />
      <BlogSection isBlogPage={true} />
    </>
  );
}
