"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryClient({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(12);
      }
    };
    
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(data.images.length / itemsPerPage);
  const maxPage = Math.max(0, totalPages - 1);

  const next = () => setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  const prev = () => setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));

  const visibleImages = data.images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const openLightbox = (idx: number) => {
    setSelectedImageIndex(currentPage * itemsPerPage + idx);
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
        prev === data.images.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? data.images.length - 1 : (prev as number) - 1
      );
    }
  };

  return (
    <>
      <section className="py-20 bg-white min-h-[60vh] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-[#df1762] font-bold text-[13px] tracking-[0.2em] uppercase">
                {data.eyebrow}
              </span>
              <span className="w-16 h-[2px] bg-[#df1762]"></span>
            </div>
            
            <h2 className="text-[36px] md:text-[46px] lg:text-[50px] font-extrabold text-[#01174a] mb-5 leading-[1.1] tracking-[-1px]">
              {data.headingPart1} <span className="text-[#df1762]">{data.headingPart2}</span>
            </h2>
            
            <p className="text-[#596274] text-[15px] sm:text-[17px] max-w-[700px] mx-auto leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
              >
                {visibleImages.map((img: string, idx: number) => (
                  <motion.div 
                    key={`${currentPage}-${idx}`} 
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
              </motion.div>
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 mt-14">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#df1762] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-all shadow-[0_4px_15px_rgba(223,23,98,0.15)]"
                aria-label="Previous Page"
              >
                <ChevronLeft strokeWidth={2.5} />
              </button>
              
              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const isActive = currentPage === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`h-[10px] rounded-full transition-all duration-300 ${
                        isActive ? "w-[30px] bg-[#df1762]" : "w-[10px] bg-[#fbe8ec] hover:bg-[#f8c6d7]"
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  );
                })}
              </div>

              <button 
                onClick={next}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#df1762] text-[#df1762] hover:bg-[#df1762] hover:text-white transition-all shadow-[0_4px_15px_rgba(223,23,98,0.15)]"
                aria-label="Next Page"
              >
                <ChevronRight strokeWidth={2.5} />
              </button>
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
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 z-10 h-12 w-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X strokeWidth={2} className="w-7 h-7" />
            </button>

            <button 
              onClick={prevLightboxImage}
              className="absolute left-4 sm:left-12 z-10 h-12 w-12 sm:h-14 sm:w-14 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft strokeWidth={2.5} className="w-8 h-8 sm:w-10 sm:h-10 -ml-1" />
            </button>

            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1200px] h-[70vh] sm:h-[85vh]"
            >
              <Image 
                src={data.images[selectedImageIndex]} 
                alt={`Gallery View ${selectedImageIndex + 1}`} 
                fill 
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <button 
              onClick={nextLightboxImage}
              className="absolute right-4 sm:right-12 z-10 h-12 w-12 sm:h-14 sm:w-14 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight strokeWidth={2.5} className="w-8 h-8 sm:w-10 sm:h-10 ml-1" />
            </button>
            
            <div className="absolute bottom-6 left-0 w-full text-center text-white/70 tracking-widest text-sm font-medium">
              {selectedImageIndex + 1} / {data.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
