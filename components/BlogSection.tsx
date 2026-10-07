"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { blog } from "@/data";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    buttonText,
    items,
  } = blog;

  return (
    <section className="relative overflow-hidden bg-[#fff7fa] py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 -z-0 h-80 w-80 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-0 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col justify-between gap-7 sm:mb-12 md:flex-row md:items-end lg:mb-14"
        >
          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-4 flex items-center gap-4"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#e32973] sm:text-[13px]">
                {eyebrow}
              </span>

              <span className="h-[2px] w-14 bg-[#e32973]" />
            </motion.div>

            <motion.h2
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#10213e] sm:text-[46px] md:text-[50px] lg:text-[54px]"
            >
              <span>{headingPart1} </span>
              <span className="text-[#e32973]">{headingPart2}</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link href="/blog">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 28px rgba(110, 24, 175, 0.2)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="inline-flex h-[54px] items-center gap-4 rounded-full bg-gradient-to-r from-[#e32973] to-[#6517b6] px-7 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(210,40,110,0.15)] sm:px-8 sm:text-[15px]"
              >
                <span>{buttonText}</span>

                <ArrowRight size={19} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {items.slice(0, 3).map((item, index) => (
            <BlogCard
              key={item.slug}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}