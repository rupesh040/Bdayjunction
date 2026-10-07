import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarHeart, Palette, MapPin, Utensils, Camera, Music } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  CalendarHeart: <CalendarHeart size={24} className="text-white" />,
  Palette: <Palette size={24} className="text-white" />,
  MapPin: <MapPin size={24} className="text-white" />,
  Utensils: <Utensils size={24} className="text-white" />,
  Camera: <Camera size={24} className="text-white" />,
  Music: <Music size={24} className="text-white" />,
};

import { ServiceItem } from "@/data";

export default function ServiceCard({ slug, title, description, image, icon }: ServiceItem) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-pink-100/50 hover:-translate-y-2 transition-all duration-300 border border-pink-50 group">
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
           {iconMap[icon]}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-muted mb-6 line-clamp-3 text-sm leading-relaxed">{description}</p>
        <Link 
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
        >
          View Details <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"><ArrowRight size={14} /></span>
        </Link>
      </div>
    </div>
  );
}
