"use client";

import { motion } from "framer-motion";
import { contact } from "@/data";

export default function ContactMap() {
  const mapEmbedUrl = (contact as any).mapEmbedUrl;

  if (!mapEmbedUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-12 h-[350px] w-full overflow-hidden rounded-[24px] border border-[#f8c6d7]/30 shadow-[0_8px_30px_rgba(218,48,112,0.04)] md:h-[450px]"
    >
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
}
