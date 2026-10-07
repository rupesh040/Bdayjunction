import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { site, footer, header, pageBanners, about, blog, services } from "@/data";
import PageBanner from "@/components/PageBanner";

export default function GalleryPage() {
  const images = Array.from({ length: 6 }).map((_, i) => `/images/about/about-1.jpg`);

  return (
    <>
      <PageBanner {...pageBanners.gallery} />
      <div className="py-20 bg-background min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="GALLERY" title="Our Recent Work" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, i) => (
            <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src={img} 
                alt={`Gallery ${i}`} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
