"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin } from "@/components/icons";
import { site, footer as footerData, header, pageBanners, about, blog, services } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook size={20} />,
  instagram: <Instagram size={20} />,
  twitter: <Twitter size={20} />,
  linkedin: <Linkedin size={20} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export default function Footer() {
  const footer = footerData;

  return (
    <footer className="relative overflow-hidden bg-[#f5c9d3] text-[#01174a]">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1450px] px-6 pb-7 pt-12 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16 xl:px-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:gap-10 xl:gap-16"
        >
          <motion.div variants={itemVariants} className="max-w-[390px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="inline-block"
            >
             <Link href="/" aria-label="BdayJunction Home">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={100}
                  height={100}
                  className="h-18 w-auto object-contain"
                />
              </motion.div>
            </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-[370px] text-[14px] leading-6 sm:text-[15px] sm:leading-7"
            >
              {footer.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap gap-4"
            >
              {footer.social.map((link, index) => (
                <motion.a
                  key={`${link.name}-${index}`}
                  href={link.href}
                  aria-label={link.name}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                    backgroundColor: "#f6b5ca",
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#f8c6d7] shadow-sm"
                >
                  {iconMap[link.name.toLowerCase()]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FooterHeading title="Quick Links" />

            <ul className="space-y-4">
              {footer.quickLinks.map((link, index) => (
                <motion.li
                  key={`${link.name}-${index}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 text-[14px] transition-colors duration-200 hover:text-[#df1762] sm:text-[15px]"
                  >
                    <span>{link.name}</span>
                    <span className="text-[24px] leading-none text-[#e01b69] transition-transform duration-200 group-hover:translate-x-1">
                      ›
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FooterHeading title="Our Services" />

            <ul className="space-y-4">
              {footer.services.map((service, index) => (
                <motion.li
                  key={`${service.name}-${index}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.href}
                    className="group flex items-center justify-between gap-3 text-[14px] transition-colors duration-200 hover:text-[#df1762] sm:text-[15px]"
                  >
                    <span>{service.name}</span>
                    <span className="text-[24px] leading-none text-[#e01b69] transition-transform duration-200 group-hover:translate-x-1">
                      ›
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <FooterHeading title="Contact Us" />

            <div className="space-y-5">
              <ContactItem
                icon={<Mail size={23} strokeWidth={2} />}
                href={`mailto:${footer.contact.email}`}
              >
                {footer.contact.email}
              </ContactItem>

              <ContactItem
                icon={<MapPin size={23} strokeWidth={2} />}
              >
                {footer.contact.address}
              </ContactItem>

              <div className="flex items-start gap-4">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#f8bfd2] text-[#df1762]">
                  <Phone size={23} strokeWidth={2} />
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  {footer.contact.phone.map((phone, index) => (
                    <motion.a
                      key={`${phone}-${index}`}
                      href={`tel:${phone}`}
                      whileHover={{ x: 3 }}
                      className="text-[14px] transition-colors hover:text-[#df1762] sm:text-[15px]"
                    >
                      {phone}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1] as any,
          }}
          className="mt-10 h-[1.5px] origin-left bg-[#e65b91] sm:mt-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1] as any,
          }}
          className="pt-6 text-center"
        >
          <p className="text-[13px] sm:text-[14px]">
            © {site.name} 2026 | All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="mb-7">
      <h3 className="text-[22px] font-bold tracking-[-0.5px] sm:text-[24px]">
        {title}
      </h3>

      <div className="mt-4 h-[3px] w-10 rounded-full bg-[#e21a69]" />
    </div>
  );
}

function ContactItem({
  icon,
  children,
  href,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ duration: 0.2 }}
        className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#f8bfd2] text-[#df1762]"
      >
        {icon}
      </motion.div>

      <span className="pt-1 text-[14px] leading-6 sm:text-[15px] sm:leading-6">
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ x: 3 }}
        className="block transition-colors hover:text-[#df1762]"
      >
        {content}
      </motion.a>
    );
  }

  return content;
}