"use client";

import { motion } from "framer-motion";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function Qualifications() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-5 gap-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-semibold text-color-3">Qualifications</h2>
        <p className="text-sm text-color-2">My Educational Background</p>
      </motion.div>

      <div className="flex items-center gap-3 md:gap-10 mt-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <h2 className="text-color-3 text-md font-semibold">Pateros Technological College</h2>
          <p className="text-sm text-color-2">Information Technology</p>
          <p className="flex items-center gap-1 text-sm text-color font-medium">
            <CalendarIcon className="w-5 h-5" />
            2021-2022
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-3 h-3 rounded-full bg-color-2"></div>
          <div className="w-1 h-35 bg-color-2 mx-5"></div>
          <div className="w-3 h-3 rounded-full bg-color-2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <h2 className="text-color-3 text-md font-semibold">STI College Global City</h2>
          <p className="text-sm text-color-2">Information Technology</p>
          <p className="flex items-center gap-1 text-sm text-color font-medium">
            <CalendarIcon className="w-5 h-5" />
            2022-Present
          </p>
        </motion.div>
      </div>
    </div>
  );
}
