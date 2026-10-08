"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { faq } from "@/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#fffcfd]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-[#df1762] font-bold text-[13px] tracking-[0.2em] uppercase">
              {faq.cursiveText}
            </span>
            <span className="w-16 h-[2px] bg-[#df1762]"></span>
          </div>
          <h2 className="text-[36px] md:text-[46px] lg:text-[50px] font-extrabold text-[#01174a] mb-5 leading-[1.1] tracking-[-1px]">
            {faq.headingPart1} <span className="text-[#df1762]">{faq.headingPart2}</span>
          </h2>
          <p className="text-[#596274] text-[15px] sm:text-[17px] max-w-[700px] mx-auto leading-relaxed">
            {faq.description}
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 mb-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full xl:w-[30%] shrink-0 relative rounded-[24px] overflow-hidden shadow-xl h-[400px] xl:h-[480px]"
          >
            <Image 
              src={(faq as any).image} 
              alt="FAQ" 
              fill 
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 30vw"
            />
          </motion.div>
          <div className="flex-1 w-full flex flex-col md:flex-row gap-4 lg:gap-6">
            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              {(faq.items || []).slice(0, Math.ceil((faq.items || []).length / 2)).map((item, index) => {
                const globalIndex = index;
                const isOpen = openIndex === globalIndex;
                const number = (globalIndex + 1).toString().padStart(2, "0");

                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: globalIndex * 0.05 }}
                    className={`h-fit rounded-[20px] overflow-hidden transition-all duration-300 border ${
                      isOpen ? 'bg-white border-[#f8c6d7] shadow-[0_15px_40px_rgba(218,48,112,0.08)]' : 'bg-white/60 border-[#f8c6d7]/50 shadow-[0_8px_30px_rgba(218,48,112,0.03)] hover:bg-white'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#ffe0eb] text-[#df1762] font-bold text-[14px]">
                          {number}
                        </span>
                        <span className="font-bold text-[#10213e] text-[15px] sm:text-[16px] pr-4">
                          {item.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#df1762] shrink-0"
                      >
                        <LucideIcons.ChevronDown strokeWidth={2.5} size={20} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-6 pt-2 pl-[76px] text-[#596274] text-[14px] leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              {(faq.items || []).slice(Math.ceil((faq.items || []).length / 2)).map((item, index) => {
                const globalIndex = index + Math.ceil((faq.items || []).length / 2);
                const isOpen = openIndex === globalIndex;
                const number = (globalIndex + 1).toString().padStart(2, "0");

                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: globalIndex * 0.05 }}
                    className={`h-fit rounded-[20px] overflow-hidden transition-all duration-300 border ${
                      isOpen ? 'bg-white border-[#f8c6d7] shadow-[0_15px_40px_rgba(218,48,112,0.08)]' : 'bg-white/60 border-[#f8c6d7]/50 shadow-[0_8px_30px_rgba(218,48,112,0.03)] hover:bg-white'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#ffe0eb] text-[#df1762] font-bold text-[14px]">
                          {number}
                        </span>
                        <span className="font-bold text-[#10213e] text-[15px] sm:text-[16px] pr-4">
                          {item.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#df1762] shrink-0"
                      >
                        <LucideIcons.ChevronDown strokeWidth={2.5} size={20} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-6 pt-2 pl-[76px] text-[#596274] text-[14px] leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#fff0f6] rounded-[24px] p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 justify-between relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ffe0eb] rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 z-10 w-full md:w-auto">
            <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] shrink-0 bg-white rounded-[24px] shadow-sm text-[#df1762]">
              {(() => {
                const Icon = (LucideIcons as any)[(faq as any).bottomBanner?.icon] || LucideIcons.MessageCircleQuestion;
                return <Icon strokeWidth={1.5} size={40} className="sm:w-12 sm:h-12" />;
              })()}
            </div>
            
            <div>
              <span className="text-[#df1762] font-bold text-[12px] tracking-[0.1em] uppercase mb-2 block">
                {(faq as any).bottomBanner.eyebrow}
              </span>
              <h3 className="text-[28px] sm:text-[32px] font-extrabold text-[#01174a] mb-2 leading-tight">
                {(faq as any).bottomBanner.heading}
              </h3>
              <p className="text-[#596274] text-[14px] sm:text-[15px] max-w-[500px]">
                {(faq as any).bottomBanner.description}
              </p>
            </div>
          </div>

          <Link href={(faq as any).bottomBanner.buttonLink} className="z-10 w-full md:w-auto shrink-0 mt-2 md:mt-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-[#df1762] to-[#b11b7d] text-white font-bold py-4 px-10 rounded-full flex items-center justify-center gap-3 shadow-[0_8px_20px_rgba(223,23,98,0.25)] cursor-pointer"
            >
              {(faq as any).bottomBanner.buttonText} 
              {(() => {
                const BtnIcon = (LucideIcons as any)[(faq as any).bottomBanner?.buttonIcon] || LucideIcons.ArrowRight;
                return <BtnIcon size={18} />;
              })()}
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}