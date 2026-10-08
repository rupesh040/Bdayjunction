"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoGalleryClient({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };
    
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(data.videos.length / itemsPerPage);
  const maxPage = Math.max(0, totalPages - 1);

  const next = () => setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  const prev = () => setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));

  const visibleVideos = data.videos.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const openVideo = (video: any) => {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="py-20 bg-[#fffcfd] min-h-[60vh] overflow-hidden">
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleVideos.map((video: any, idx: number) => (
                  <motion.div 
                    key={`${currentPage}-${idx}`} 
                    onClick={() => openVideo(video)}
                    whileHover={{ y: -6 }}
                    className="relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-black"
                  >
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#df1762] shadow-[0_4px_20px_rgba(223,23,98,0.3)] transition-transform duration-300"
                      >
                        <Play className="w-7 h-7 ml-1" fill="currentColor" strokeWidth={0} />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between">
                      <h3 className="text-white font-semibold text-[15px] line-clamp-1 mr-4">{video.title}</h3>
                      <span className="bg-black/50 backdrop-blur-md text-white text-[12px] font-bold px-2 py-1 rounded-md shrink-0">
                        {video.duration}
                      </span>
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
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-4 sm:px-12"
          >
            <button 
              onClick={closeVideo}
              className="absolute top-6 right-6 z-10 h-12 w-12 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X strokeWidth={2} className="w-7 h-7" />
            </button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe 
                src={`${selectedVideo.url}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
