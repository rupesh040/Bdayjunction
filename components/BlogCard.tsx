"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

import { BlogItem } from "@/data";

export default function BlogCard({
  slug,
  title,
  description,
  author,
  date,
  image,
  index = 0,
}: BlogItem & { index?: number }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      className="group overflow-hidden rounded-[18px] border border-white/80 bg-white/60 shadow-[0_10px_35px_rgba(210,50,110,0.06)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(210,50,110,0.13)]"
    >
      <Link
        href={`/blog/${slug}`}
        className="block"
        aria-label={`Read ${title}`}
      >
        <div className="relative h-[230px] w-full overflow-hidden sm:h-[250px] lg:h-[260px]">
          <motion.div
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-full w-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Link>

      <div className="px-7 pb-7 pt-6 sm:px-8 sm:pb-8">
        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-medium text-[#5d6473] sm:text-[13px]">
          <div className="flex items-center gap-2">
            <User
              size={16}
              strokeWidth={2}
              className="text-[#e32973]"
            />
            <span>By {author}</span>
          </div>

          <span className="h-4 w-px bg-[#e6a9bd]" />

          <div className="flex items-center gap-2">
            <Calendar
              size={16}
              strokeWidth={2}
              className="text-[#e32973]"
            />
            <span>{date}</span>
          </div>
        </div>

        <Link href={`/blog/${slug}`}>
          <motion.h3
            whileHover={{
              color: "#e32973",
            }}
            transition={{
              duration: 0.2,
            }}
            className="line-clamp-2 text-[22px] font-bold leading-[1.2] tracking-[-0.5px] text-[#11213e] sm:text-[24px]"
          >
            {title}
          </motion.h3>
        </Link>

        <p className="mt-5 line-clamp-3 text-[14px] leading-6 text-[#687184] sm:text-[15px] sm:leading-7">
          {description}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="group/read mt-5 inline-flex items-center gap-3 text-[15px] font-bold text-[#e32973]"
        >
          <span>Read More</span>

          <motion.span
            whileHover={{
              x: 5,
            }}
            className="flex items-center"
          >
            <ArrowRight
              size={19}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover/read:translate-x-1"
            />
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}