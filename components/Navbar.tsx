"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useState } from "react";
import { site, footer, header, pageBanners, about, blog, services } from "@/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 w-full border-b border-white/20 bg-[#f8b9ca]"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="flex h-[72px] items-center justify-between lg:h-[81px]">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full shrink-0 items-center px-5 sm:px-8 lg:px-12"
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

          <div className="hidden h-full items-center lg:flex">
            <div className="flex h-full items-center">
              {header.links.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full"
                  >
                    <Link
                      href={item.href}
                      className={`group relative flex h-full min-w-[105px] items-center justify-center px-5 text-[15px] font-medium transition-all duration-300 ${
                        active
                          ? "bg-[#ee91ad] text-[#d41458]"
                          : "text-[#17131a] hover:bg-[#ee91ad]/60 hover:text-[#d41458]"
                      }`}
                    >
                      <span>{item.name}</span>

                      <motion.span
                        initial={false}
                        animate={{
                          width: active ? "64px" : "0px",
                          opacity: active ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-[8px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#d41458]"
                      />

                      <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#d41458] transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="mx-7 h-[38px] w-px origin-center bg-white/80"
            />

            <motion.div
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pr-8"
            >
              <Link href={header.buttonHref}>
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    backgroundColor: "#a9144d",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-[51px] items-center gap-4 bg-[#b71957] px-7 text-[15px] font-semibold text-white shadow-sm"
                >
                  <span>{(header as any).button}</span>
                  {(() => {
                    const BtnIcon = (LucideIcons as any)[(header as any).buttonIcon] || LucideIcons.ArrowRight;
                    return <BtnIcon size={18} strokeWidth={2} />;
                  })()}
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((prev) => !prev)}
            className="mr-4 flex h-11 w-11 items-center justify-center text-[#17131a] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={25} strokeWidth={1.8} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} strokeWidth={1.8} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/30 bg-[#f8b9ca] lg:hidden"
          >
            <div className="px-5 pb-6 pt-3">
              <div className="space-y-1">
                {header.links.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between border-b border-white/30 px-3 py-3.5 text-[15px] font-medium transition-colors ${
                          active
                            ? "text-[#d41458]"
                            : "text-[#17131a] hover:text-[#d41458]"
                        }`}
                      >
                        <span>{item.name}</span>

                        {active && (
                          <motion.span
                            layoutId="mobileActive"
                            className="h-1.5 w-1.5 rounded-full bg-[#d41458]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                className="pt-5"
              >
                <Link
                  href={header.buttonHref}
                  onClick={() => setIsOpen(false)}
                  className="flex h-[50px] w-full items-center justify-center gap-3 bg-[#b71957] text-[15px] font-semibold text-white transition-colors hover:bg-[#a9144d]"
                >
                  <span>{(header as any).button}</span>
                  {(() => {
                    const BtnIcon = (LucideIcons as any)[(header as any).buttonIcon] || LucideIcons.ArrowRight;
                    return <BtnIcon size={18} />;
                  })()}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}