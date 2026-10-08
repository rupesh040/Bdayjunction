"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Lightbulb, Diamond, ConciergeBell, Camera, Heart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  Diamond: <Diamond size={20} />,
  ConciergeBell: <ConciergeBell size={20} />,
  Camera: <Camera size={20} />,
  Heart: <Heart size={20} />,
};

export default function WhyChooseUsClient({ data }: { data: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section className="py-12 sm:py-20 bg-[#fff7fa] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image src={data.image} alt="Why Choose Us" fill className="object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#ed2671] font-bold uppercase tracking-[0.15em] text-sm">{data.cursiveText}</span>
              <div className="h-[2px] w-14 bg-[#ed2671]"></div>
            </div>
            
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[40px] xl:text-[46px] font-extrabold text-[#17233f] leading-[1.1] mb-6 tracking-tight">
              {data.headingPart1} <br className="hidden sm:block" />
              <span className="text-[#ed2671]">{data.headingPart2}</span>
            </h2>
            
            <p className="text-[#667186] text-[15px] sm:text-[16px] mb-10 leading-[1.8] max-w-3xl">
              {data.description}
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-5 xl:gap-6"
            >
              {data.features.map((feature: any, index: number) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(237,38,113,0.08)" }}
                  className="bg-white p-5 sm:p-6 rounded-[20px] shadow-[0_6px_24px_rgba(237,38,113,0.04)] border border-[#fff0f6] flex flex-row items-start gap-4 transition-all duration-300"
                >
                  <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#ffe8f1] text-[#ed2671]">
                    {iconMap[feature.icon] || <Heart size={20} />}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#17233f] mb-1 leading-tight">{feature.title}</h3>
                    <p className="text-[12px] text-[#667186] leading-[1.5]">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
