"use client";

import { useEffect, useState } from "react";
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
    items,
  } =
    testimonial;

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const totalPages = Math.max(Math.ceil(items.length / itemsPerPage), 1);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [currentPage, totalPages]);

  const visibleItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] py-8 sm:py-10 lg:py-12">
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
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e33279] sm:text-[13px]">
              {eyebrow}
            </span>

            <span className="h-[2px] w-12 bg-[#e33279]" />
          </div>

          <h2 className="text-[36px] font-extrabold leading-tight tracking-[-1.5px] text-[#10213e] sm:text-[44px] md:text-[48px]">
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
            whileHover={{
              scale: 1.08,
              x: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#f7c9da] bg-white text-[#ed2671] shadow-sm sm:left-1 sm:h-10 sm:w-10 md:left-[-8px] md:h-11 md:w-11 lg:left-[-28px] lg:h-[52px] lg:w-[52px]"
            aria-label="Previous testimonials"
          >
            <ChevronLeft
              size={20}
              className="sm:size-[22px] lg:size-[24px]"
            />
          </motion.button>

          <motion.button
            type="button"
            onClick={nextPage}
            whileHover={{
              scale: 1.08,
              x: 2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#f7c9da] bg-white text-[#ed2671] shadow-sm sm:right-1 sm:h-10 sm:w-10 md:right-[-8px] md:h-11 md:w-11 lg:right-[-28px] lg:h-[52px] lg:w-[52px]"
            aria-label="Next testimonials"
          >
            <ChevronRight
              size={20}
              className="sm:size-[22px] lg:size-[24px]"
            />
          </motion.button>

          <div className="overflow-hidden px-10 sm:px-12 md:px-14 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPage}-${itemsPerPage}`}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -35,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
              >
                {visibleItems.map((item, index) => (
                  <TestimonialCard
                    key={`${item.name}-${currentPage}-${index}`}
                    {...item}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              animate={{
                width: currentPage === index ? 32 : 9,
                opacity: currentPage === index ? 1 : 0.45,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-[9px] rounded-full bg-[#ed2671]"
              aria-label={`Go to testimonial page ${index + 1}`}
              aria-current={currentPage === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}