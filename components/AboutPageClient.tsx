"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function AboutPageClient({ data }: { data: any }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="py-12 sm:py-20 bg-[#fffcfd] overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#ed2671] font-bold uppercase tracking-[0.15em] text-sm">{data.cursiveText}</span>
                <div className="h-[2px] w-14 bg-[#ed2671]"></div>
              </div>
              
              <h2 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[48px] xl:text-[50px] font-extrabold text-[#17233f] leading-[1.1] mb-8 tracking-tight">
                {data.headingPart1} <br className="hidden sm:block" />
                <span className="text-[#ed2671]">{data.headingPart2}</span>
              </h2>
              
              <p className="text-[#667186] text-[15px] sm:text-[16px] mb-6 leading-[1.8]">
                {data.paragraph1}
              </p>
              
              <p className="text-[#667186] text-[15px] sm:text-[16px] leading-[1.8]">
                {data.paragraph2}
              </p>

              <p className="text-[#667186] text-[15px] sm:text-[16px] mt-6 leading-[1.8]">
                {data.paragraph3 || "We combine creativity with meticulous attention to detail to deliver events that exceed your expectations. From custom-designed stages to engaging entertainment, we handle it all so you can focus entirely on making beautiful memories with your guests."}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 h-full">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    transition={{ duration: 0.4 }}
                    className="relative flex-1 w-full rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg min-h-[160px] sm:min-h-[240px]"
                  >
                    <Image src={data.image1} alt="About team 1" fill className="object-cover" />
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    transition={{ duration: 0.4 }}
                    className="relative flex-1 w-full rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg min-h-[160px] sm:min-h-[240px]"
                  >
                    <Image src={data.image2} alt="About team 2" fill className="object-cover" />
                  </motion.div>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  transition={{ duration: 0.4 }}
                  className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg h-full min-h-[332px] sm:min-h-[500px]"
                >
                  <Image src={data.image3} alt="About event" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#e71f63]/30 mix-blend-multiply pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e71f63]/40 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button 
                      onClick={() => setIsVideoOpen(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-16 w-16 sm:h-20 sm:w-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-[#d11155] shadow-2xl border border-white/50 cursor-pointer"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" strokeWidth={0} />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {isVideoOpen && (
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
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                aria-label="Close video"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
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
