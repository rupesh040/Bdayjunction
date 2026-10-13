"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Play, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoGalleryClient({ data }: { data: any }) {
  const videos: any[] = data?.videos || [];
  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const visibleVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, videos.length));
  };

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
      <section className="py-6 bg-[#fffcfd] overflow-hidden">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleVideos.map((video: any, idx: number) => (
                <motion.div 
                  key={`${video.title}-${idx}`} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
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
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
            >
              <button 
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Close Video"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
              <iframe 
                src={selectedVideo.videoUrl} 
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
