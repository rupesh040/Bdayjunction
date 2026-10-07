"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cta } from "@/data";

export default function CTASection() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    buttonText,
    buttonHref,
    image,
  } = cta;

  const button = { label: buttonText, href: buttonHref };

  return (
    <section className="relative isolate flex min-h-[400px] items-center overflow-hidden md:min-h-[460px]">
      <div className="absolute inset-0 -z-30">
        <Image
          src={image}
          alt="CTA Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#fbe8ec]/95 via-[#fbe8ec]/80 to-transparent lg:w-[65%]" />
      
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#fbe8ec]/95 via-[#fbe8ec]/70 to-transparent md:hidden" />

      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 lg:px-14">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative z-10 max-w-[650px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#db1c62]">
              {eyebrow}
            </span>
            <span className="h-[2px] w-12 bg-[#db1c62]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="mb-6 text-[40px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#01174a] md:text-[50px] lg:text-[56px]"
          >
            <span className="block">{headingPart1}</span>
            <span className="block text-[#db1c62]">{headingPart2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="mb-10 max-w-[540px] text-[16px] leading-relaxed text-[#596274] md:text-[17px]"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
          >
            <Link href={button.href}>
              <motion.div
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 28px rgba(219, 28, 98, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#db1c62] px-9 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(219,28,98,0.2)]"
              >
                <span>{button.label}</span>
                <span className="text-xl leading-none">→</span>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
