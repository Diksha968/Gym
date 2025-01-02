import React from 'react';
import { motion } from 'framer-motion';

const Price = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="pt-5 bg-white" id="pricing">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        {/* Animated Upper Section */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={sectionVariants}
        >
          <motion.h1
            className="text-base font-semibold leading-7 text-indigo-400"
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
          >
            Pricing
          </motion.h1>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl"
            variants={sectionVariants}
            transition={{ delay: 0.4 }}
          >
            Ready to Start Your Journey with us
          </motion.p>
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          variants={sectionVariants}
        >
          Choose the product that works best
        </motion.p>

        {/* Animated Pricing Cards */}
        <motion.div
          className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
        >
          {/* First Product */}
          <motion.div
            className="ring-1 ring-black rounded-3xl p-8 xl:p-10"
            variants={cardVariants}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold leading-8 text-black">
                Product Type 1
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Product details for Product Type 1
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-black">
                € 10 / unit
              </span>
            </p>
            <a
              href="/order"
              aria-describedby="product1"
              className="bg-white/10 text-black hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Join Now
            </a>
          </motion.div>

          {/* Second Product */}
          <motion.div
            className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10"
            variants={cardVariants}
          >
            <div className="flex items-baseline justify-between gap-x-4">
              <h2 id="product2" className="text-lg font-semibold leading-8 text-black">
                Product Type 2
              </h2>
              <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-black">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              The most popular choice. Product details for Product Type 2
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-black">
                € 20 / unit
              </span>
            </p>
            <a
              href="/order"
              aria-describedby="product2"
              className="bg-indigo-500 text-black shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Join Now
            </a>
          </motion.div>

          {/* Third Product */}
          <motion.div
            className="ring-1 ring-black rounded-3xl p-8 xl:p-10"
            variants={cardVariants}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product3" className="text-lg font-semibold leading-8 text-black">
                Product Type 3
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Product details for Product Type 3
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-black">
                € 50 / unit
              </span>
            </p>
            <a
              href="/order"
              aria-describedby="product3"
              className="bg-white/10 text-black hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Join Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Price;
