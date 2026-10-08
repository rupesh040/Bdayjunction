import Image from "next/image";
import * as LucideIcons from "lucide-react";

import { TeamItem } from "@/data";

export default function SpeakerCard({ name, designation, image, social }: TeamItem) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(223,23,98,0.1)] hover:-translate-y-2 group flex flex-col h-full">
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-7 flex flex-col flex-grow bg-white">
        <h3 className="text-[22px] font-bold text-[#01174a] mb-1">{name}</h3>
        <p className="text-[#596274] text-[15px] mb-6">{designation}</p>
        
        <div className="flex items-center gap-3 mt-auto">
          {Object.entries(social || {}).map(([key, href]) => {
            const svgContent = (href as any)?.svg || (key === 'facebook' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' : key === 'instagram' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' : key === 'linkedin' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' : key === 'x' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.92H5.078z"/></svg>' : '');

            return (
              <a 
                key={key} 
                href={typeof href === 'string' ? href : '#'} 
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fbe8ec] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-colors duration-300"
              >
                {svgContent ? (
                  <span dangerouslySetInnerHTML={{ __html: svgContent }} className="w-4 h-4 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full" />
                ) : (
                  (() => {
                    const Icon = (LucideIcons as any)[
                      key.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("")
                    ] || LucideIcons.Link;
                    return <Icon size={16} />;
                  })()
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
