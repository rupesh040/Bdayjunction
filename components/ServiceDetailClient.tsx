"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarHeart,
  PartyPopper,
  Sparkles,
  Users,
} from "lucide-react";
import { header } from "@/data";

interface HighlightBox {
  icon: string;
  title: string;
  text: string;
}

interface ServiceExtended {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  detailImage?: string;
  features?: string[];
  detailDescription?: string;
  primaryDescription?: string;
  highlightBoxes?: HighlightBox[];
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={22} />,
  PartyPopper: <PartyPopper size={22} />,
  Users: <Users size={22} />,
  CalendarHeart: <CalendarHeart size={22} />
};

export default function ServiceDetailClient({ service }: { service: any }) {
  const serviceData = service as ServiceExtended;

  const detailImage = serviceData.detailImage || serviceData.image;

  const features = serviceData.features || [];

  const featureIcons = [
    <CalendarHeart key="calendar" size={21} />,
    <Sparkles key="sparkles" size={21} />,
    <PartyPopper key="party" size={21} />,
    <Users key="users" size={21} />,
    <Sparkles key="experience" size={21} />,
    <CalendarHeart key="coordination" size={21} />,
  ];

  const secondaryDescription = serviceData.detailDescription;
  const primaryDescription = serviceData.primaryDescription;
  const highlightBoxes = serviceData.highlightBoxes || [];

  return (
    <main className="overflow-hidden bg-[#fff7fa]">
      <section className="relative py-5 sm:py-6 md:py-8 lg:py-10">
        <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#f6a8cf]/25 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-[#a959d0]/15 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1480px] px-5 sm:px-7 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-7  p-3 backdrop-blur-sm md:p-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:p-5 xl:gap-10">
            <motion.div
              initial={{
                opacity: 0,
                x: -45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-[340px] overflow-hidden rounded-[14px] sm:min-h-[450px] lg:min-h-[500px]"
            >
              <motion.div
                initial={{
                  scale: 1.08,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={serviceData.image}
                  alt={serviceData.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 45,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-center px-3 py-7 sm:px-6 sm:py-8 lg:px-3 lg:py-5 xl:px-5"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="mb-3 flex items-center gap-4"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e72a76] sm:text-xs">
                  SERVICE DETAILS
                </span>

                <span className="h-[2px] w-14 bg-[#e72a76]" />
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[34px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#10213e] sm:text-[42px] md:text-[46px] lg:text-[42px] xl:text-[48px]"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.35,
                }}
                className="mt-5 text-[14px] leading-6 text-[#657085] sm:text-[15px] sm:leading-7"
              >
                {service.description}
              </motion.p>

              <div className="mt-6 grid grid-cols-1 gap-3 rounded-[14px] bg-[#fff0f6] p-4 sm:grid-cols-2 sm:p-5">
                {features.map((feature, index) => (
                  <motion.div
                    key={`${feature}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.35 + index * 0.07,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ed2671] text-white">
                      {featureIcons[index]}
                    </span>

                    <div>
                      <h3 className="text-[13px] font-bold leading-5 text-[#10213e] sm:text-[14px]">
                        {feature}
                      </h3>

                      <p className="mt-0.5 text-[11px] leading-5 text-[#727b8b] sm:text-xs">
                        Carefully planned for your special celebration.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-8 sm:py-10 md:py-12 lg:py-14 bg-[#fff0f6]">
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-7 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mb-3 flex items-center gap-4"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#e72a76]">
                  MAKE IT SPECIAL
                </span>

                <span className="h-[2px] w-14 bg-[#e72a76]" />
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
                  delay: 0.08,
                }}
                className="text-[32px] font-extrabold leading-[1.08] tracking-[-1px] text-[#10213e] sm:text-[40px] md:text-[44px]"
              >
                Making Your{" "}
                <span className="text-[#ed2671]">
                  Birthday Truly Special
                </span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="mt-5 text-[14px] leading-6 text-[#667186] sm:text-[15px] sm:leading-7"
              >
                {primaryDescription}
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.22,
                }}
                className="mt-4 text-[14px] leading-6 text-[#667186] sm:text-[15px] sm:leading-7"
              >
                {secondaryDescription}
              </motion.p>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {highlightBoxes.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="flex items-center gap-3 sm:block"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffe2ee] text-[#ed2671] sm:mb-3">
                      {iconMap[item.icon] || <Sparkles size={22} />}
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold text-[#10213e]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-[#727b8b]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 45,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-[320px] overflow-hidden rounded-[18px] sm:h-[390px] lg:h-[360px] xl:h-[390px]"
            >
              <Image
                src={detailImage}
                alt={`${service.title} celebration`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
