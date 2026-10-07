import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "@/components/icons";

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
            {social.facebook && (
              <a href={social.facebook} className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fbe8ec] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-colors duration-300">
                <Facebook size={16} />
              </a>
            )}
            {social.instagram && (
              <a href={social.instagram} className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fbe8ec] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-colors duration-300">
                <Instagram size={16} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fbe8ec] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} className="flex items-center justify-center w-9 h-9 rounded-full bg-[#fbe8ec] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-colors duration-300">
                <Twitter size={16} />
              </a>
            )}
        </div>
      </div>
    </div>
  );
}
