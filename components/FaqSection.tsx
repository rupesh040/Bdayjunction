"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { faq as faqData } from "@/data";

export default function FaqSection() {
  const faq = faqData as any;
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-[#fff7fa] overflow-hidden min-h-[700px] lg:min-h-[850px] flex items-center  lg:py-0">
       <div className=" mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16 w-full lg:pt-0">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full lg:self-start lg:mt-24 relative"
        >
          <div className="relative inline-block z-10">
            <div className="absolute -inset-8 bg-gradient-to-r from-[#fff7fa] via-[#fff7fa]/90 to-transparent blur-xl rounded-full -z-10 lg:block hidden" />
            
            <h2 className="text-[38px] sm:text-[46px] md:text-[54px] font-extrabold text-[#10213e] leading-[1.1] tracking-[-1px] mb-4">
              {faq.headingPart1} <span className="text-[#ed1769]">{faq.headingPart2}</span>
            </h2>
            <p className="text-[#596274] text-[16px] sm:text-[17px] leading-[1.7] mb-8 max-w-[450px] font-medium relative">
              {faq.description}
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0 lg:absolute lg:-right-[10%] xl:-right-[20%] lg:top-[200px] z-0 w-full lg:w-[680px] xl:w-[750px] flex justify-center lg:block">
            <Image 
              src="/images/faq/faq.webp" 
              alt="faq-1" 
              width={800} 
              height={800} 
              className="w-full max-w-[450px] lg:max-w-full h-auto object-contain" 
            />

            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-1/4 lg:h-1/3 bg-gradient-to-b from-[#fff7fa] to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1/4 lg:w-1/3 bg-gradient-to-r from-[#fff7fa] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-1/4 lg:w-1/3 bg-gradient-to-l from-[#fff7fa] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#fff7fa] to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 w-full flex flex-col gap-4 lg:py-20 z-10 relative">
          {(faq.items || []).slice(0, 8).map((item: any, index: number) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-[12px] overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border border-[#f8c6d7] shadow-[0_15px_40px_rgba(237,23,105,0.08)]" 
                    : "border border-[#f8c6d7] bg-white hover:border-[#ed1769]/40"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 ${
                    isOpen 
                      ? "bg-gradient-to-r from-[#6b25a2] to-[#f42661] text-white" 
                      : "bg-white text-[#10213e]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-extrabold text-[15px] sm:text-[17px]">
                      {index + 1}.
                    </span>
                    <span className="font-bold text-[15px] sm:text-[17px]">
                      {item.question}
                    </span>
                  </div>
                  <div className="shrink-0 ml-4">
                    {isOpen ? (
                      <ChevronsUp size={22} strokeWidth={2.5} className="text-white" />
                    ) : (
                      <ChevronsDown size={22} strokeWidth={2.5} className="text-[#ed1769]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-white"
                    >
                      <div className="px-6 py-6 pb-7">
                        <p className="text-[#596274] text-[15px] sm:text-[16px] leading-[1.8]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
