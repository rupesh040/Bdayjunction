"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

import { TestimonialItem } from "@/data";

export default function TestimonialCard({
  name,
  title,
  rating,
  quote,
  image,
  index = 0,
}: TestimonialItem & { index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative min-h-[310px] overflow-hidden rounded-[20px] border border-white/80 bg-white/65 p-7 shadow-[0_12px_40px_rgba(215,53,112,0.07)] backdrop-blur-sm sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.25 }}
            className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-[3px] border-white shadow-sm"
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="72px"
              className="object-cover"
            />
          </motion.div>

          <div className="min-w-0">
            <h3 className="truncate text-[16px] font-bold text-[#12213d] sm:text-[17px]">
              {name}
            </h3>

            <p className="mt-1 text-[13px] text-[#687184] sm:text-[14px]">
              {title}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 gap-[2px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={17}
              strokeWidth={1.5}
              className={
                index < rating
                  ? "fill-[#ffc21c] text-[#ffc21c]"
                  : "fill-[#d9dce2] text-[#d9dce2]"
              }
            />
          ))}
        </div>
      </div>

      <p className="mt-7 text-[15px] leading-7 text-[#505b6d] sm:text-[16px]">
        {quote}
      </p>

      <motion.div
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        className="absolute bottom-5 left-7 text-[#ef71a4]"
      >
        <Quote
          size={45}
          strokeWidth={0}
          fill="currentColor"
          className="rotate-180"
        />
      </motion.div>
    </motion.article>
  );
}