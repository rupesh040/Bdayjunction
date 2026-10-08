"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contact } from "@/data";
import ContactForm from "./ContactForm";
import ContactCards from "./ContactCards";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  const {
    eyebrow,
    headingPart1,
    headingPart2,
    description,
    image,
    formEyebrow,
    formTitlePart1,
    formTitlePart2,
    formDescription,
  } = contact;

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f5a5d0]/30 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#b85bd2]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[900px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#e82a76] sm:text-[13px]">
              {eyebrow}
            </span>

            <span className="h-[2px] w-14 bg-[#e82a76]" />
          </div>

          <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#10213e] sm:text-[44px] md:text-[50px] lg:text-[54px]">
            {headingPart1}{" "}
            <span className="text-[#ed2671]">{headingPart2}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-6 text-[#5e687b] sm:text-[16px] sm:leading-7">
            {description}
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-1 gap-7 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7 xl:grid-cols-[0.88fr_1.12fr] xl:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[400px] overflow-hidden rounded-[18px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[560px]"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt="Contact"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[18px] border border-[#f7d7e3] bg-white/65 px-5 py-7 shadow-[0_12px_45px_rgba(218,48,112,0.07)] backdrop-blur-sm sm:px-8 sm:py-8 md:px-9 lg:px-8 xl:px-9"
          >
            <div className="pointer-events-none absolute -right-6 -top-4 text-[#f9c7db]/45">
              <svg
                width="130"
                height="210"
                viewBox="0 0 130 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M94 0C80 30 95 48 116 54C91 63 88 82 105 96C78 92 67 112 76 130C51 116 35 130 39 151C18 139 5 151 0 172"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M93 31C79 38 69 46 64 58M103 72C89 72 78 78 70 89M77 110C63 108 51 114 45 124M48 143C34 140 24 145 17 155"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="pointer-events-none absolute -bottom-10 right-0 text-[#f9c7db]/45">
              <svg
                width="130"
                height="160"
                viewBox="0 0 130 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M125 160C116 137 101 126 82 120C101 109 101 92 87 81C69 87 54 80 53 63C37 72 22 66 19 51C10 54 4 49 0 42"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M89 122C79 108 68 100 54 95M65 87C54 78 47 68 44 56M37 64C27 55 19 45 17 33"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mb-3 flex items-center gap-4"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#e62b77]">
                  {formEyebrow}
                </span>

                <span className="h-[2px] w-14 bg-[#e62b77]" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="text-[32px] font-extrabold leading-[1.08] tracking-[-1px] text-[#10213e] sm:text-[38px] md:text-[42px]"
              >
                {formTitlePart1}{" "}
                <span className="text-[#ed2671]">{formTitlePart2}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-3 max-w-[700px] text-[14px] leading-6 text-[#5e687b] sm:text-[15px] sm:leading-7"
              >
                {formDescription}
              </motion.p>

              <ContactForm />
            </div>
          </motion.div>
        </div>

        <ContactCards />
        
        <ContactMap />
      </div>
    </section>
  );
}
