"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryClient({ data }: { data: any }) {
  const images: string[] = data?.images || [];
  const initialCount = 8;
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, images.length));
  };

  const openLightbox = (idx: number) => {
    setSelectedImageIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === images.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? images.length - 1 : (prev as number) - 1
      );
    }
  };

  return (
    <>
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#df1762]"></span>
              <span className="text-[#df1762] font-bold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
                {data.eyebrow}
              </span>
              <span className="w-10 h-[2px] bg-[#df1762]"></span>
            </div>
            
            <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#01174a] mb-5 leading-[1.1] tracking-[-1px]">
              {data.headingPart1} <span className="text-[#df1762]">{data.headingPart2}</span>
            </h2>
            
            <p className="text-[#596274] text-[15px] sm:text-[16px] max-w-[700px] mx-auto leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {visibleImages.map((img: string, idx: number) => (
                <motion.div 
                  key={`${img}-${idx}`} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                  onClick={() => openLightbox(idx)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative h-[240px] sm:h-[280px] lg:h-[250px] rounded-2xl overflow-hidden shadow-md group border border-[#f8c6d7]/30 cursor-pointer"
                >
                  <Image 
                    src={img} 
                    alt={`Gallery Image ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12 sm:mt-14">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMore}
                className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#df1762] text-white font-bold text-[15px] shadow-[0_8px_25px_rgba(223,23,98,0.25)] hover:bg-[#c91254] transition-colors"
              >
                <span>Load More</span>
                <ArrowDown size={18} />
              </motion.button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4 sm:px-12"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 text-white hover:text-[#df1762] transition-colors p-2"
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevLightboxImage}
              className="absolute left-4 sm:left-8 z-50 text-white hover:text-[#df1762] transition-colors p-3 bg-black/40 rounded-full"
              aria-label="Previous Image"
            >
              <ChevronLeft size={36} />
            </button>

            <div 
              className="relative w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={images[selectedImageIndex]} 
                alt={`Lightbox image ${selectedImageIndex + 1}`} 
                fill 
                className="object-contain"
              />
            </div>

            <button 
              onClick={nextLightboxImage}
              className="absolute right-4 sm:right-8 z-50 text-white hover:text-[#df1762] transition-colors p-3 bg-black/40 rounded-full"
              aria-label="Next Image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
