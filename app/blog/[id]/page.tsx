import { notFound } from "next/navigation";
import { pageBanners, blog as blogData } from "@/data";
import PageBanner from "@/components/PageBanner";
import BlogDetailClient from "@/components/BlogDetailClient";

export async function generateStaticParams() {
  return blogData.items.map((blog) => ({
    id: blog.slug,
  }));
}

export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = blogData.items.find((b) => b.slug === resolvedParams.id);

  if (!blog) {
    notFound();
  }

  
  const bannerProps = {
    ...((pageBanners as any).blogDetail || {}),
    title: blog.title,
    bgText: "BLOG",
    image: "/images/pageBanner.webp",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: blog.title, href: "#" }
    ]
  };

  return (
    <>
      <PageBanner {...bannerProps} />
      <BlogDetailClient blog={blog} />
    </>
  );
}
