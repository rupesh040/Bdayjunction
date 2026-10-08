"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  bgText: string;
  image?: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageBanner({ title, bgText, image, breadcrumbs = [] }: PageBannerProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#243343] py-20 md:py-28 lg:py-32">
      {image && (
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center opacity-30"
            priority
          />
        </motion.div>
      )}

      <div className="absolute inset-0 bg-[#243343]/80 z-0" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 h-full flex flex-col justify-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[42px] md:text-[54px] lg:text-[64px] font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Breadcrumb" 
          className="flex items-center gap-2 flex-wrap"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={crumb.label} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-[#e62b77] font-medium text-[15px] md:text-[17px]">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.href || "#"}
                      className="text-white hover:text-[#e62b77] transition-colors font-medium text-[15px] md:text-[17px]"
                    >
                      {crumb.label}
                    </Link>
                    <ChevronRight size={18} className="text-[#e62b77] mt-0.5" strokeWidth={2.5} />
                  </>
                )}
              </div>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
}
