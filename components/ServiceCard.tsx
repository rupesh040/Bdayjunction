"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceItem } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
};

interface ServiceCardProps extends ServiceItem {
  index?: number;
}

export default function ServiceCard({
  slug,
  title,
  description,
  image,
  icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-[18px] border border-[#f6dce6] bg-white shadow-[0_8px_30px_rgba(218,48,112,0.06)]"
    >
      <div className="relative h-[210px] w-full overflow-hidden sm:h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="mb-3 text-[19px] font-extrabold leading-tight text-[#10213e] transition-colors duration-300 group-hover:text-[#ed2671] sm:text-[20px]">
          {title}
        </h3>

        <p className="mb-6 line-clamp-3 text-[14px] leading-6 text-[#697386]">
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className="group/link inline-flex items-center gap-2 text-[14px] font-bold text-[#ed2671]"
        >
          <span>View Details</span>

          <motion.span
            whileHover={{
              x: 4,
            }}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ed2671] text-white transition-all duration-300"
          >
            <ArrowRight size={13} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}