"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { blog } from "@/data";
import BlogCard from "./BlogCard";

export default function BlogSection({ isBlogPage = false }: { isBlogPage?: boolean }) {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    buttonText,
    items = [],
  } = blog;

  const [visibleCount, setVisibleCount] = useState<number>(isBlogPage ? 6 : 3);

  const displayedItems = isBlogPage ? items.slice(0, visibleCount) : items.slice(0, 3);
  const hasMore = isBlogPage && visibleCount < items.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, items.length));
  };

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] py-8">
      <div className="pointer-events-none absolute -left-32 top-10 -z-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-0 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#e32973]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e32973] sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-10 bg-[#e32973]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-1px] text-[#10213e]"
            >
              <span>{headingPart1} </span>
              <span className="text-[#e32973]">{headingPart2}</span>
            </motion.h2>
          </div>

          {!isBlogPage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/blog">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 28px rgba(227, 41, 115, 0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex h-[50px] items-center gap-3 rounded-full bg-gradient-to-r from-[#e32973] to-[#8d189b] px-7 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(210,40,110,0.15)] sm:px-8 sm:text-[15px]"
                >
                  <span>{buttonText}</span>
                  <ArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {displayedItems.map((item, index) => (
            <BlogCard key={`${item.slug}-${index}`} {...item} index={index} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12 sm:mt-14">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#df1762] text-white font-bold text-[15px] shadow-[0_8px_25px_rgba(223,23,98,0.25)] hover:bg-[#c91254] transition-colors"
            >
              <span>Load More Posts</span>
              <ArrowDown size={18} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}