"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  paginate?: boolean;
}

export default function ServicesSection({
  paginate = false,
}: ServicesSectionProps) {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    items,
  } = services;

  const title = `${headingPart1} ${headingPart2}`;

  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const totalPages = paginate
    ? Math.ceil(items.length / cardsPerPage)
    : 1;

  const startIndex = paginate
    ? (currentPage - 1) * cardsPerPage
    : 0;

  const visibleItems = items.slice(startIndex, startIndex + cardsPerPage);

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] pb-12">
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#f8b6d5]/25 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#b765d6]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={description}
            centered
          />
        </motion.div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map((item, index) => (
            <ServiceCard
              key={item.slug}
              {...item}
              index={index}
            />
          ))}
        </motion.div>

        {paginate && totalPages > 1 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <motion.button
              type="button"
              onClick={goToPrevious}
              disabled={currentPage === 1}
              whileHover={{
                scale: currentPage === 1 ? 1 : 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Previous services"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                currentPage === 1
                  ? "cursor-not-allowed border-[#f5d9e4] bg-white text-[#d9b8c6]"
                  : "border-[#ed2671] bg-white text-[#ed2671] shadow-[0_5px_20px_rgba(237,38,113,0.10)] hover:bg-[#ed2671] hover:text-white"
              }`}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                const active = currentPage === page;

                return (
                  <motion.button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    animate={{
                      width: active ? 28 : 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    aria-label={`Go to page ${page}`}
                    className={`h-2 rounded-full ${
                      active ? "bg-[#ed2671]" : "bg-[#f5c8d9]"
                    }`}
                  />
                );
              })}
            </div>

            <motion.button
              type="button"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              whileHover={{
                scale: currentPage === totalPages ? 1 : 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Next services"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                currentPage === totalPages
                  ? "cursor-not-allowed border-[#f5d9e4] bg-white text-[#d9b8c6]"
                  : "border-[#ed2671] bg-white text-[#ed2671] shadow-[0_5px_20px_rgba(237,38,113,0.10)] hover:bg-[#ed2671] hover:text-white"
              }`}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {!paginate && items.length > 6 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/services"
              className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ed1769] to-[#e51f86] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(225,32,110,0.18)] transition-all hover:scale-105"
            >
              View All Services
              <motion.span
                whileHover={{
                  x: 4,
                }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#ed2671]"
              >
                <ArrowRight size={13} />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}