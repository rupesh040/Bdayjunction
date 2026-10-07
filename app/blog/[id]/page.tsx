import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { site, footer, header, pageBanners, about, blog as blogData, services } from "@/data";

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

  return (
    <div className="py-20 bg-background min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors font-medium">
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
        
        <article className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-pink-50">
          <div className="relative h-[400px] w-full">
             <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-6 text-sm font-medium text-muted mb-6">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>{blog.date}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="prose prose-lg prose-pink max-w-none text-muted">
              <p className="lead text-xl mb-8">
                {blog.description}
              </p>
              <p className="mb-6">
                Planning a birthday celebration involves many moving parts, from selecting the perfect theme to ensuring the guest list is finalized. Our expert event planners recommend starting at least a month in advance to secure the best venues and vendors.
              </p>
              <p>
                In this article, we explore the latest trends and timeless classics that guarantee a successful party. Whether you're considering a chic outdoor gathering or a vibrant indoor bash, attention to detail and a touch of creativity will make your event truly unforgettable.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
