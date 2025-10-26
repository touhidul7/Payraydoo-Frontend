// components/ScrollRevealSection.js
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollRevealSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const leftItems = [
    { id: 1, title: 'Accounts Receivable' },
    { id: 2, title: 'Cash Application Agent' },
    { id: 3, title: 'Collection Agent' },
    { id: 4, title: 'Dispute Agent' },
    { id: 5, title: 'Closing Agent' },
  ];

  const rightItems = [
    { id: 6, title: 'Accounts Payable' },
    { id: 7, title: 'Invoice Capturing Agent' },
    { id: 8, title: 'Verification & Reconciliation Agent' },
    { id: 9, title: 'Scheduling Agent' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Payraydoo
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            bridges receivables and payables<br />
            automating the flow of money in and out.
          </p>
        </motion.div>

        {/* Main Content */}
        <div ref={sectionRef} className="relative">
          {/* Connecting Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 z-0"
          />

          {/* Center Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.5 
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-2xl border-2 border-blue-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs md:text-sm font-semibold text-gray-700 mb-1">
                    Your ERP
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700">
                    Accounting Software
                  </div>
                </div>
              </div>
              
              {/* Connection Points */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-2 -left-2 w-28 h-28 md:w-36 md:h-36 border-2 border-blue-300 rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Left Column - Receivables */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-1"
          >
            {/* Left Side */}
            <div className="space-y-8">
              {leftItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex justify-end items-center"
                >
                  <div className="text-right max-w-md">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                    </motion.div>
                    
                    {/* Connecting line to center */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      className="h-0.5 bg-blue-400 mt-4 origin-right"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side */}
            <div className="space-y-8 lg:mt-20">
              {rightItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="flex justify-start items-center"
                >
                  <div className="text-left max-w-md">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-2xl shadow-lg p-6 border-r-4 border-purple-500 hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                    </motion.div>
                    
                    {/* Connecting line to center */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      className="h-0.5 bg-purple-400 mt-4 origin-left"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg"
          >
            Connect your finance stack
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}