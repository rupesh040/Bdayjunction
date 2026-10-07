import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site, footer, header, pageBanners, about, blog, services } from "@/data";

export async function generateStaticParams() {
  return services.items.map((service) => ({
    id: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = services.items.find((s) => s.slug === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-20 bg-background min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/#services" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors font-medium">
          <ArrowLeft size={16} /> Back to Services
        </Link>
        
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-pink-50">
          <div className="relative h-[400px] w-full">
             <Image src={service.image} alt={service.title} fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
             <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl font-bold text-white">
               {service.title}
             </h1>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-dark mb-4">About this service</h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {service.description}
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our {service.title.toLowerCase()} is designed to take the stress out of your celebration. 
              We handle the intricate details, allowing you to focus on enjoying the special day with your loved ones. 
              Whether it's a grand affair or an intimate gathering, our expertise ensures a flawless and memorable experience.
            </p>
            <Link
              href={header.buttonHref}
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all"
            >
              Book {service.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
