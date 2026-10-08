"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  List,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";
import { contact } from "@/data";

function ContactInput({
  icon,
  placeholder,
  type,
  required = false,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ed2671]">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-[52px] w-full rounded-full border border-[#f5cddd] bg-white/50 px-12 text-[14px] text-[#263653] outline-none transition-all duration-300 placeholder:text-[#788397] focus:border-[#ed2671] focus:ring-2 focus:ring-[#ed2671]/10"
      />
    </div>
  );
}

export default function ContactForm() {
  const {
    services,
    buttonText,
    successTitle,
    successDescription,
  } = contact;

  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactInput
            icon={<User size={20} />}
            placeholder="Your Name"
            type="text"
            required
          />

          <ContactInput
            icon={<Mail size={20} />}
            placeholder="Your Email"
            type="email"
            required
          />

          <div className="relative">
            <Phone
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ed2671]"
            />

            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={15}
              required
              placeholder="Phone Number"
              className="h-[52px] w-full rounded-full border border-[#f5cddd] bg-white/50 px-12 text-[14px] text-[#263653] outline-none transition-all duration-300 placeholder:text-[#788397] focus:border-[#ed2671] focus:ring-2 focus:ring-[#ed2671]/10"
            />
          </div>

          <div className="relative">
            <List
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#ed2671]"
            />

            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
              className="h-[52px] w-full appearance-none rounded-full border border-[#f5cddd] bg-white/50 px-12 pr-12 text-[14px] text-[#647087] outline-none transition-all duration-300 focus:border-[#ed2671] focus:ring-2 focus:ring-[#ed2671]/10"
            >
              <option value="">Choose Option</option>

              {services.map((item: string) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={19}
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#ed2671]"
            />
          </div>
        </div>

        <div className="relative">
          <MessageSquare
            size={20}
            className="pointer-events-none absolute left-5 top-5 text-[#ed2671]"
          />

          <textarea
            rows={4}
            required
            placeholder="Your Message"
            className="w-full resize-none rounded-[18px] border border-[#f5cddd] bg-white/50 px-12 py-4 text-[14px] text-[#263653] outline-none transition-all duration-300 placeholder:text-[#788397] focus:border-[#ed2671] focus:ring-2 focus:ring-[#ed2671]/10"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(225, 32, 110, 0.22)",
          }}
          whileTap={{ scale: 0.98 }}
          className="mx-auto flex h-[52px] w-full max-w-[470px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ed1769] to-[#e51f86] px-7 text-[14px] font-bold text-white shadow-[0_7px_20px_rgba(225,32,110,0.14)] sm:text-[15px]"
        >
          <span>{buttonText}</span>
          <span className="text-xl leading-none">→</span>
        </motion.button>
      </form>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#151027]/45 px-5 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[430px] overflow-hidden rounded-[24px] border border-pink-100 bg-white px-7 py-9 text-center shadow-[0_25px_80px_rgba(40,20,50,0.2)] sm:px-10"
            >
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                aria-label="Close success message"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f5] text-[#e62973] transition-colors hover:bg-[#ffe1eb]"
              >
                <X size={18} />
              </button>

              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 180 }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ffe5ef] text-[#e62973]"
              >
                <CheckCircle2 size={44} strokeWidth={1.8} />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-6 text-[25px] font-extrabold text-[#10213e] sm:text-[28px]"
              >
                {successTitle}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-3 text-[14px] leading-6 text-[#687184] sm:text-[15px]"
              >
                {successDescription}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                type="button"
                onClick={() => setShowSuccess(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-7 rounded-full bg-gradient-to-r from-[#ed1769] to-[#e51f86] px-9 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(225,32,110,0.18)]"
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
