import { Suspense } from "react";
import { notFound } from "next/navigation";
import { pageBanners, blog as blogData } from "@/data";
import PageBanner from "@/components/PageBanner";
import BlogDetailClient from "@/components/BlogDetailClient";

export const instant = false;

export async function generateStaticParams() {
  return blogData.items.map((blog) => ({
    id: blog.slug,
  }));
}

async function BlogDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = blogData.items.find((b) => b.slug === resolvedParams.id);

  if (!blog) {
    notFound();
  }

  const bannerProps = {
    ...((pageBanners as any).blogDetail || {}),
    title: blog.title,
    bgText: "BLOG",
    image: (pageBanners as any).blogDetail?.image || pageBanners.blog?.image || "/images/pageBanner.jpg",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: blog.title, href: "#" },
    ],
  };

  return (
    <>
      <PageBanner {...bannerProps} />
      <BlogDetailClient blog={blog} />
    </>
  );
}

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
      <BlogDetailContent params={params} />
    </Suspense>
  );
}
