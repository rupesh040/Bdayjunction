"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  isServicesPage?: boolean;
}

export default function ServicesSection({
  isServicesPage = false,
}: ServicesSectionProps) {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    items = [],
  } = services;

  const title = `${headingPart1} ${headingPart2}`;

  const displayedItems = isServicesPage ? items : items.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] py-8">
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#f8b6d5]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#b765d6]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
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
          className="mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {displayedItems.map((item, index) => (
            <ServiceCard
              key={item.slug}
              {...item}
              index={index}
            />
          ))}
        </motion.div>

        {!isServicesPage && items.length > 6 && (
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