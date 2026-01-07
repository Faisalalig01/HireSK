import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const InfoCard = ({ title, description, index = 0 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-100 dark:shadow-white/10"
    >
      {/* Cursor-follow glow */}
      <div
        className={`pointer-events-none absolute z-0 w-[300px] h-[300px] rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 bg-white dark:bg-gray-900 p-6 hover:p-[22px] transition-all rounded-[10px]">
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
