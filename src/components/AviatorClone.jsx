import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AviatorClone() {
  const [multiplier, setMultiplier] = useState(1.0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: [0, 200, 400], transition: { duration: 3, repeat: Infinity } });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Aviator Clone Demo ✈️</h1>
      <motion.div animate={controls} className="text-6xl">✈️</motion.div>
      <div className="mt-4 text-2xl font-mono">{multiplier.toFixed(2)}x</div>
    </div>
  );
}
