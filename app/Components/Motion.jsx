import { motion } from "framer-motion";

export default function Motion({ children, opacity = 0 }) {
  return (
    <motion.div
      className="w-full"
      initial={{ y: 100, scale: 0.7, opacity: {opacity} }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}







/* import { motion } from "framer-motion";

export default function Motion({children}) {
  return (
    <motion.div
      className="w-full"
      initial={{ y: 200 }}
      whileInView={{ y: 50 }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: "easeOut",
      }}
    >
        {children}
    </motion.div>
  );
}
 */