"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { banner } from "@/data";

export default function Hero() {
  const {
    cursiveText: eyebrow,
    heading: title,
    description,
    buttonText,
    buttonHref,
    banners,
    backgroundImage,
  } = banner;

  const button = {
    label: buttonText,
    href: buttonHref,
  };

  const image = banners[0];

  const titleWords = title.split(" ");

  return (
    <section className="relative isolate overflow-hidden ">
      <div className="absolute inset-0 -z-30">
        <Image
          src={backgroundImage}
          alt="Background Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-gradient-to-l lg:from-black/90 lg:via-black/40 lg:to-transparent" />
        
        <div className="absolute -left-[10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#ed2671]/30 blur-[100px] sm:bg-[#ed2671]/20" />
        <div className="absolute left-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#5518a6]/25 blur-[120px] sm:bg-[#5518a6]/15" />
        <div className="absolute -left-[5%] bottom-[-10%] h-[450px] w-[450px] rounded-full bg-[#ff8fab]/30 blur-[100px] sm:bg-[#ff8fab]/20" />
      </div>

      <div className="mx-auto flex min-h-[520px] max-w-[1500px] items-center px-5 py-12 sm:px-8 md:min-h-[560px] md:py-16 lg:px-14 lg:py-20 xl:min-h-[565px]">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-[590px] lg:pl-8 xl:pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#272038] sm:text-xs">
                {eyebrow}
              </span>

              <span className="h-[2px] w-12 bg-[#db3b83]" />
            </motion.div>

            <h1 className="max-w-[590px] text-[42px] font-extrabold leading-[0.98] tracking-[-1.8px] text-[#30203d] sm:text-[52px] md:text-[60px] lg:text-[58px] xl:text-[64px]">
              {titleWords.map((word, index) => {
                const isPink = word.toLowerCase().includes("birthday");
                const isPurple = ["truly", "special"].includes(
                  word.toLowerCase(),
                );

                return (
                  <motion.span
                    key={`${word}-${index}`}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.42 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`mr-[0.22em] inline-block ${
                      isPink
                        ? "text-[#ed2671]"
                        : isPurple
                          ? "text-[#5518a6]"
                          : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-[500px] text-[15px] leading-6 text-[#554957] sm:text-[16px] sm:leading-7"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7"
            >
              <Link href={button.href}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 12px 30px rgba(210, 16, 91, 0.28)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex h-[56px] items-center gap-5 rounded-full bg-[#cf0754] px-8 text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(207,7,84,0.22)]"
                >
                  <span>{button.label}</span>

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-xl leading-none"
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full lg:ml-auto lg:max-w-[680px]"
          >
            <div className="relative rounded-[32px]  p-[10px] sm:p-[14px]">
              <div 
                className="absolute inset-0 rounded-[32px] border-[3px] border-[#ed2671] "
                style={{
                  maskImage: "linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 25%, transparent 25%, transparent 75%, black 75%)"
                }}
              />
              <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px]">
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeIn",
                  }}
                  className="relative overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="Birthday celebration"
                    width={900}
                    height={620}
                    priority
                    className="aspect-[16/9] w-full object-cover"
                  />
               </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}