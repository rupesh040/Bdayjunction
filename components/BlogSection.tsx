"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { blog } from "@/data";
import BlogCard from "./BlogCard";

export default function BlogSection({ isBlogPage = false }: { isBlogPage?: boolean }) {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    buttonText,
    items,
  } = blog;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(isBlogPage ? 6 : 3);
  
  useEffect(() => {
    if (!isBlogPage) return;
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };
    
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [isBlogPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const maxPage = Math.max(0, totalPages - 1);

  const next = () => setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  const prev = () => setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));

  const visibleItems = isBlogPage 
    ? items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : items.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] py-8 sm:py-10 lg:py-12 xl:py-14">
      <div className="pointer-events-none absolute -left-32 top-10 -z-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-0 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col justify-between gap-7 sm:mb-12 md:flex-row md:items-end lg:mb-14"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 flex items-center gap-4"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e32973] sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-14 bg-[#e32973]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#10213e] sm:text-[46px] md:text-[50px] lg:text-[54px]"
            >
              <span>{headingPart1} </span>
              <span className="text-[#e32973]">{headingPart2}</span>
            </motion.h2>
          </div>

          {!isBlogPage && (
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/blog">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 28px rgba(110, 24, 175, 0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex h-[54px] items-center gap-4 rounded-full bg-gradient-to-r from-[#e32973] to-[#6517b6] px-7 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(210,40,110,0.15)] sm:px-8 sm:text-[15px]"
                >
                  <span>{buttonText}</span>
                  <ArrowRight size={19} />
                </motion.div>
              </Link>
            </motion.div>
          )}
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            >
              {visibleItems.map((item, index) => (
                <BlogCard key={`${currentPage}-${item.slug}-${index}`} {...item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {isBlogPage && totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-16">
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
  );
}