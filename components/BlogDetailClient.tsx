"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, Calendar, Folder, Quote, CheckCircle2 } from "lucide-react";

export default function BlogDetailClient({ blog }: { blog: any }) {
  if (!blog) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1250px] px-3 sm:px-5 lg:px-6">
        
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[550px] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl"
        >
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover"
            priority
          />
          {blog.badge && (
            <div className="absolute top-6 left-6 bg-gradient-to-r from-[#ed1769] to-[#e51f86] text-white rounded-[16px] p-3 min-w-[70px] text-center shadow-[0_10px_25px_rgba(237,23,105,0.3)]">
              <span className="block text-[22px] font-extrabold leading-none">{blog.badge.day}</span>
              <span className="block text-[12px] font-medium mt-1">{blog.badge.month} {blog.badge.year}</span>
            </div>
          )}
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-[14px] sm:text-[15px] font-medium text-[#647087] border-b border-[#f5cddd]/50 pb-6 mb-8"
        >
          <div className="flex items-center gap-2">
            <User size={18} className="text-[#ed2671]" />
            <span>By {blog.author}</span>
          </div>
          <span className="hidden sm:block text-[#f5cddd]">|</span>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#ed2671]" />
            <span>{blog.date}</span>
          </div>
          <span className="hidden sm:block text-[#f5cddd]">|</span>
          <div className="flex items-center gap-2">
            <Folder size={18} className="text-[#ed2671]" />
            <span>{blog.category}</span>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-[32px] sm:text-[44px] md:text-[50px] font-extrabold text-[#10213e] leading-[1.1] tracking-[-1px] mb-6">
            {blog.titlePart1 || blog.title} <span className="text-[#ed1769]">{blog.titlePart2}</span>
          </h1>

          <p className="text-[#596274] text-[16px] sm:text-[17px] leading-[1.8] mb-10">
            {blog.description}
          </p>

          
          {blog.detailedContent?.quote && (
            <div className="bg-[#fff7fa] rounded-[24px] p-8 sm:p-10 my-12 flex flex-col sm:flex-row gap-6 sm:gap-8 border border-[#f8c6d7]/40 shadow-[0_8px_30px_rgba(237,23,105,0.03)]">
              <div className="w-[60px] h-[60px] bg-[#ffe0eb] text-[#ed1769] rounded-full flex items-center justify-center shrink-0">
                <Quote size={28} className="fill-current" />
              </div>
              <div className="flex-1">
                <p className="italic text-[#10213e] text-[18px] sm:text-[20px] font-medium leading-[1.7]">
                  "{blog.detailedContent.quote.text}"
                </p>
                <p className="text-right text-[#ed1769] font-bold text-[16px] mt-4">
                  — {blog.detailedContent.quote.author}
                </p>
              </div>
            </div>
          )}

          
          {blog.detailedContent?.subheading1 && (
            <div className="mb-10">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#10213e] mb-4">
                {blog.detailedContent.subheading1.part1} <span className="text-[#ed1769]">{blog.detailedContent.subheading1.part2}</span>
              </h2>
              <p className="text-[#596274] text-[16px] sm:text-[17px] leading-[1.8]">
                {blog.detailedContent.paragraph1}
              </p>
            </div>
          )}

          
          {blog.detailedContent?.images && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {blog.detailedContent.images.map((img: string, i: number) => (
                <div key={i} className="relative h-[200px] sm:h-[220px] rounded-[16px] overflow-hidden shadow-md">
                  <Image src={img} alt="Blog Grid" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}

          
          {blog.detailedContent?.subheading2 && (
            <div className="mb-10">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#10213e] mb-6">
                {blog.detailedContent.subheading2.part1} <span className="text-[#ed1769]">{blog.detailedContent.subheading2.part2}</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {blog.detailedContent.tips.map((tip: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-[#ed1769] shrink-0 mt-1" />
                    <span className="text-[#596274] text-[16px] sm:text-[17px] leading-[1.6]">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
              
              <p className="text-[#596274] text-[16px] sm:text-[17px] leading-[1.8] whitespace-pre-line border-t border-[#f5cddd]/40 pt-8">
                {blog.detailedContent.conclusion}
              </p>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
