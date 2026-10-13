"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonial } from "@/data";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    items = [],
  } = testimonial;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerPage);

  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const previousPage = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (items.length <= itemsPerPage || isPaused) return;

    const timer = setInterval(() => {
      nextPage();
    }, 6000);

    return () => clearInterval(timer);
  }, [items.length, itemsPerPage, isPaused, nextPage]);

  // Total indicator steps
  const totalSteps = maxIndex + 1;

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section 
      className="relative overflow-hidden bg-[#fff7fa] py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto max-w-[900px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#e33279]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e33279] sm:text-[13px]">
              {eyebrow}
            </span>
            <span className="h-[2px] w-10 bg-[#e33279]" />
          </div>

          <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#10213e] leading-[1.1] tracking-[-1px]">
            <span>{headingPart1} </span>
            <span className="text-[#ed2671]">{headingPart2}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[#626b7c] sm:text-[16px]">
            {description}
          </p>
        </motion.div>

        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <motion.button
            type="button"
            onClick={previousPage}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.92 }}
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f7c9da] bg-white text-[#ed2671] shadow-md transition-colors hover:bg-[#ed2671] hover:text-white sm:left-1 sm:h-11 sm:w-11 md:left-[-8px] lg:left-[-24px] lg:h-[48px] lg:w-[48px]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </motion.button>

          <motion.button
            type="button"
            onClick={nextPage}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.92 }}
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f7c9da] bg-white text-[#ed2671] shadow-md transition-colors hover:bg-[#ed2671] hover:text-white sm:right-1 sm:h-11 sm:w-11 md:right-[-8px] lg:right-[-24px] lg:h-[48px] lg:w-[48px]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </motion.button>

          <div className="overflow-hidden px-8 sm:px-12 md:px-12 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${itemsPerPage}`}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 40 : -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -40 : 40,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
              >
                {visibleItems.map((item, index) => (
                  <TestimonialCard
                    key={`${item.name}-${currentIndex}-${index}`}
                    {...item}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {totalSteps > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-[9px] rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-[#ed2671]" : "w-2.5 bg-[#f7c9da] hover:bg-[#ed2671]/60"
                }`}
                aria-label={`Go to testimonial slide ${index + 1}`}
                aria-current={currentIndex === index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}