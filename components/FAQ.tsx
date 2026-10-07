"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data";

export default function FAQ() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    image,
    items,
  } = faq;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#fff6fa] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#f5a5d0]/30 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-[20%] h-[350px] w-[350px] rounded-full bg-[#9d59d5]/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#ffb5d2]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="pl-5 sm:pl-8 md:pl-10 lg:pl-12 xl:pl-14 pr-5 sm:pr-8 md:pr-10 lg:pr-0">
              <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e62b77] sm:text-xs">
                {eyebrow}
              </span>

              <span className="h-[2px] w-12 bg-[#e62b77] sm:w-14" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[700px] text-[38px] font-extrabold leading-[1.03] tracking-[-1.8px] text-[#10213e] sm:text-[44px] md:text-[50px] lg:text-[47px] xl:text-[54px]"
            >
              {headingPart1}{" "}
              <span className="text-[#ed2671]">{headingPart2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 w-full text-[14px] leading-6 text-[#5d6679] sm:text-[15px] sm:leading-7 md:text-[16px]"
            >
              {description}
            </motion.p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-5 overflow-hidden aspect-[4.5/3]"
              style={{
                marginLeft: `calc(-1 * (100vw - min(100vw, 1500px)) / 2)`,
                width: `calc(100% + (100vw - min(100vw, 1500px)) / 2)`
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt="Birthday event speaker"
                  fill
                  sizes="(max-width: 1440px) 200vw, 100vw"
                  className="object-cover object-center"
                />
              </motion.div>
              
              {/* Gradients to blend the image */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fff6fa]/40 via-transparent via-[35%] to-transparent" />
              {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fcdfee] via-transparent via-[35%] to-transparent" /> */}
              <div className="w-[100vw] h-32 pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fcdfee] via-transparent to-transparent" />
              
              {/* Right edge blending gradient */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#fff6fa] to-transparent z-10" />

              <motion.div
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-[-60px] left-[-50px] h-48 w-48 rounded-full bg-[#ec3988]/50 blur-[70px]"
              />

              <motion.div
                animate={{
                  x: [0, -12, 0],
                  y: [0, 8, 0],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-[-50px] top-[20%] h-44 w-44 rounded-full bg-[#8c43c5]/40 blur-[75px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full px-5 sm:px-8 md:px-10 lg:pl-0 lg:pr-12 xl:pr-14"
          >
            <div className="space-y-2.5 sm:space-y-3">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={`${item.question}-${index}`}
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
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className={`overflow-hidden rounded-[14px] border transition-all duration-300 ${
                        isOpen
                          ? "border-transparent shadow-[0_10px_30px_rgba(214,40,115,0.10)]"
                          : "border-[#f5cddd] bg-white/55"
                      }`}
                    >
                      <motion.button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        whileTap={{ scale: 0.995 }}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className={`flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-3.5 text-left sm:min-h-[60px] sm:px-6 ${
                          isOpen
                            ? "bg-gradient-to-r from-[#5420d2] via-[#a52ac0] to-[#f52772] text-white"
                            : "bg-white/60 text-[#15233e] hover:bg-white"
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-3 text-[13px] font-bold sm:text-[15px] md:text-[16px]">
                          <span className="shrink-0">
                            {index + 1}.
                          </span>

                          <span>{item.question}</span>
                        </span>

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex h-7 w-7 shrink-0 items-center justify-center"
                        >
                          <ChevronDown
                            size={21}
                            strokeWidth={2.5}
                          />
                        </motion.span>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${index}`}
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              height: {
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                              },
                              opacity: {
                                duration: 0.25,
                              },
                            }}
                            className="overflow-hidden bg-white"
                          >
                            <div className="px-5 pb-5 pt-4 text-[13px] leading-6 text-[#626c7e] sm:px-6 sm:text-[14px] sm:leading-7">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}