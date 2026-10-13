"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, Calendar, Folder, Quote, CheckCircle2 } from "lucide-react";

export default function BlogDetailClient({ blog }: { blog: any }) {
  if (!blog) return null;

  return (
    <article className="bg-white py-8">
      <div className="mx-auto max-w-[960px] px-5 sm:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[300px] sm:h-[440px] md:h-[500px] w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-md"
        >
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover"
            priority
          />
          {blog.badge && (
            <div className="absolute top-5 left-5 bg-gradient-to-r from-[#ed1769] to-[#e51f86] text-white rounded-[14px] p-3 min-w-[65px] text-center shadow-lg">
              <span className="block text-[20px] font-extrabold leading-none">{blog.badge.day}</span>
              <span className="block text-[11px] font-semibold mt-1 uppercase tracking-wider">{blog.badge.month} {blog.badge.year}</span>
            </div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-[14px] font-medium text-[#647087] border-b border-[#f5cddd]/50 pb-5 mb-8"
        >
          <div className="flex items-center gap-2">
            <User size={16} className="text-[#ed2671]" />
            <span>By {blog.author}</span>
          </div>
          <span className="hidden sm:inline text-[#f5cddd]">•</span>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-[#ed2671]" />
            <span>{blog.date}</span>
          </div>
          <span className="hidden sm:inline text-[#f5cddd]">•</span>
          <div className="flex items-center gap-2">
            <Folder size={16} className="text-[#ed2671]" />
            <span>{blog.category}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold text-[#10213e] leading-[1.2] tracking-tight mb-6">
            {blog.titlePart1 || blog.title} <span className="text-[#ed1769]">{blog.titlePart2}</span>
          </h1>

          <p className="text-[#554957] text-[16px] sm:text-[17px] leading-[1.8] mb-8">
            {blog.description}
          </p>

          {blog.detailedContent?.quote && (
            <div className="bg-[#fff7fa] rounded-[20px] p-6 sm:p-8 my-10 flex flex-col sm:flex-row gap-5 sm:gap-6 border-l-4 border-[#ed2671] shadow-sm">
              <div className="w-[50px] h-[50px] bg-[#ffe0eb] text-[#ed1769] rounded-full flex items-center justify-center shrink-0">
                <Quote size={24} className="fill-current" />
              </div>
              <div className="flex-1">
                <p className="italic text-[#10213e] text-[17px] sm:text-[19px] font-medium leading-[1.7]">
                  "{blog.detailedContent.quote.text}"
                </p>
                <p className="text-right text-[#ed1769] font-bold text-[15px] mt-3">
                  — {blog.detailedContent.quote.author}
                </p>
              </div>
            </div>
          )}

          {blog.detailedContent?.subheading1 && (
            <div className="mb-10">
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#10213e] mb-4 tracking-tight">
                {blog.detailedContent.subheading1.part1} <span className="text-[#ed1769]">{blog.detailedContent.subheading1.part2}</span>
              </h2>
              <p className="text-[#554957] text-[16px] sm:text-[17px] leading-[1.8]">
                {blog.detailedContent.paragraph1}
              </p>
            </div>
          )}

          {blog.detailedContent?.images && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
              {blog.detailedContent.images.map((img: string, i: number) => (
                <div key={i} className="relative h-[200px] sm:h-[220px] rounded-[16px] overflow-hidden shadow-md">
                  <Image src={img} alt="Blog Grid" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}

          {blog.detailedContent?.subheading2 && (
            <div className="mb-8">
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#10213e] mb-5 tracking-tight">
                {blog.detailedContent.subheading2.part1} <span className="text-[#ed1769]">{blog.detailedContent.subheading2.part2}</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {blog.detailedContent.tips.map((tip: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#ed1769] shrink-0 mt-1" />
                    <span className="text-[#554957] text-[15px] sm:text-[16px] leading-[1.7]">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
              
              {blog.detailedContent.conclusion && (
                <div className="border-t border-[#f5cddd]/40 pt-8 mt-8">
                  <p className="text-[#554957] text-[16px] sm:text-[17px] leading-[1.8] whitespace-pre-line">
                    {blog.detailedContent.conclusion}
                  </p>
                </div>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </article>
  );
}
