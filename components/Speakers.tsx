"use client";

import { useState, useEffect } from "react";
import { team } from "@/data";
import SpeakerCard from "./SpeakerCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Speakers() {
  const { preTitle, titlePart1, titlePart2, description, items } = team;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerPage);

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="py-24 bg-[#fff5f8] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-[#df1762] font-bold text-[13px] tracking-[0.2em] uppercase">
              {preTitle}
            </span>
            <span className="w-12 h-[2px] bg-[#df1762]"></span>
          </div>
          
          <h2 className="text-[36px] md:text-[46px] lg:text-[50px] font-extrabold text-[#01174a] mb-5 leading-[1.1] tracking-[-1px]">
            {titlePart1} <span className="text-[#df1762]">{titlePart2}</span>
          </h2>
          
          <p className="text-[#596274] text-[16px] md:text-[18px] max-w-[700px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="relative">
          
          <button 
            onClick={prev}
            className="flex absolute left-[-10px] sm:-left-4 xl:-left-14 top-[45%] -translate-y-1/2 w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] rounded-full border border-[#f8c6d7] bg-[#fff5f8]/90 items-center justify-center text-[#f8c6d7] hover:border-[#df1762] hover:text-[#df1762] transition-all z-20 shadow-md sm:shadow-none"
            aria-label="Previous Speaker"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          <div className="overflow-hidden py-8 -my-8 -mx-4 px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <SpeakerCard {...item} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={next}
            className="flex absolute right-[-10px] sm:-right-4 xl:-right-14 top-[45%] -translate-y-1/2 w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] rounded-full border border-[#f8c6d7] bg-[#fff5f8]/90 items-center justify-center text-[#f8c6d7] hover:border-[#df1762] hover:text-[#df1762] transition-all z-20 shadow-md sm:shadow-none"
            aria-label="Next Speaker"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>

        <div className="flex justify-center items-center gap-3 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-[12px] h-[12px] bg-[#df1762]" 
                  : "w-[12px] h-[12px] bg-[#fbe8ec] hover:bg-[#f8c6d7]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
