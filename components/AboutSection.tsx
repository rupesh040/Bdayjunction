"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarHeart, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { about } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={25} strokeWidth={2} />,
  CalendarDays: <CalendarHeart size={25} strokeWidth={2} />,
};

export default function AboutSection() {
  const {
    cursiveText: eyebrow,
    headingPart1,
    headingPart2,
    description,
    buttonText,
    buttonHref,
    features,
    mainImage,
    smallImage,
    thirdImage,
  } =
    about;

  const images = [mainImage, smallImage, thirdImage];

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fff8fa] py-8">


      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="relative z-10 max-w-[610px]"
          >
            <motion.div
              variants={itemVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#df3977]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#df3977] sm:text-[13px]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-10 bg-[#df3977]" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="max-w-[600px] text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#17233f] leading-[1.1] tracking-[-1px]"
            >
              <span className="block">{headingPart1}</span>
              <span className="block text-[#d61961]">{headingPart2}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[575px] text-[15px] leading-7 text-[#596274] sm:text-[16px]"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={`${feature.title}-${index}`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/60"
                >
                  <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#ffe0eb] text-[#df1762] shadow-sm">
                    {iconMap[feature.icon] || (
                      <Heart size={22} strokeWidth={2.2} />
                    )}
                  </div>

                  <div className="pt-0.5">
                    <h3 className="text-[16px] font-bold leading-snug text-[#17233f]">
                      {feature.title}
                    </h3>

                    {(feature as any).description && (
                      <p className="mt-1 text-[13px] leading-5 text-[#596274]">
                        {(feature as any).description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <Link href={buttonHref}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 12px 28px rgba(214, 25, 97, 0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex h-[55px] items-center gap-5 rounded-full bg-[#d71461] px-8 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(214,25,97,0.16)]"
                >
                  <span>{buttonText}</span>
                  <motion.span
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
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
            className="relative mx-auto h-[440px] w-full max-w-[720px] sm:h-[520px] lg:h-[510px] xl:h-[555px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as any,
              }}
              className="absolute left-0 top-0 h-full w-[63%] overflow-hidden rounded-[20px] sm:rounded-[24px]"
            >
              <motion.div
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[0]}
                  alt="Birthday party setup"
                  fill
                  sizes="(max-width: 768px) 60vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as any,
              }}
              className="absolute right-0 top-0 h-[46%] w-[34%] overflow-hidden rounded-[20px] sm:rounded-[24px]"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[1]}
                  alt="Birthday decoration"
                  fill
                  sizes="(max-width: 768px) 35vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1] as any,
              }}
              className="absolute bottom-0 right-0 h-[46%] w-[34%] overflow-hidden rounded-[20px] sm:rounded-[24px]"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[2]}
                  alt="Birthday cake celebration"
                  fill
                  sizes="(max-width: 768px) 35vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}