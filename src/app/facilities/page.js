"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Layers, Search, Users } from "lucide-react";

export default function FacilitiesPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 pb-20 overflow-x-hidden">
      
      {/* HERO HEADER */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-950/80 border border-red-800/50 rounded-full">
              State-Of-The-Art Learning Spaces
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Library Facilities & Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            The Pius XII College Library provides a peaceful and inspiring environment for study and research, equipped with modern resources, spacious reading areas, and digital tools.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* 1. LIBRARY ROOM SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Image */}
            <motion.div variants={fadeInLeft} className="lg:col-span-6 relative w-full h-80 sm:h-[420px] rounded-xl overflow-hidden shadow-inner group">
              <Image
                src="/images/38.jpg"
                alt="Library Room"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInRight} className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                <BookOpen size={14} />
                <span>Quiet Study Space</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Library Room
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                The Library Room is designed to foster focus, comfort, and creativity. It features well-arranged shelves of books, journals, and digital materials, as well as designated study corners for both individual and group research.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                The area is well-lit and Wi-Fi enabled—providing a conducive space for academic growth. Students can access online databases, use computer terminals, or simply enjoy a quiet moment of reading in a serene atmosphere.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* 2. LIBRARY INTEGRATED SYSTEM SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Text Column */}
            <motion.div variants={fadeInLeft} className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                <Layers size={14} />
                <span>Automated Operations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Library Integrated System
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                The Library Integrated System is a comprehensive digital platform that manages all library operations—from book cataloging and borrowing to user accounts and real-time reports.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                It provides instant access to library records, ensuring efficient tracking and management of physical and digital materials. This system helps streamline workflows, making library services faster and more accessible.
              </p>
            </motion.div>

            {/* Image Column */}
            <motion.div variants={fadeInRight} className="lg:col-span-6 relative w-full h-80 sm:h-[400px] rounded-xl overflow-hidden shadow-inner order-1 lg:order-2 group">
              <Image
                src="/images/35.jpg"
                alt="Library Integrated System"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </motion.div>

          </div>
        </motion.div>

        {/* 3. OPAC SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Image */}
            <motion.div variants={fadeInLeft} className="lg:col-span-6 relative w-full h-80 sm:h-[400px] rounded-xl overflow-hidden shadow-inner group">
              <Image
                src="/images/34.jpg"
                alt="Online Public Access Catalog"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInRight} className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                <Search size={14} />
                <span>Catalog Search</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Online Public Access Catalog (OPAC)
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                The Online Public Access Catalog (OPAC) is an online database of all materials available in the library. It allows students and faculty to search for books, journals, and digital resources conveniently.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                OPAC enhances accessibility, allowing users to locate materials by title, author, or subject, and check real-time availability.
              </p>

              {/* Animated Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="pt-2 inline-block"
              >
                <Link
                  href="https://opac-sepia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Access OPAC Catalog</span>
                  <ExternalLink size={16} />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* 4. DISCUSSION AREA SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6 sm:p-10"
        >
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
              <Users size={14} />
              <span>Group Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Discussion Area
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Designed for teamwork, brainstorming sessions, and academic discussions among students and faculty.
            </p>
          </div>

          {/* Animated Dual Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-inner group"
            >
              <Image
                src="/images/36.jpg"
                alt="Discussion Area View 1"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-inner group"
            >
              <Image
                src="/images/37.jpg"
                alt="Discussion Area View 2"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>

          <p className="text-slate-600 leading-relaxed text-base max-w-4xl mx-auto text-center">
            The Discussion Area provides a collaborative space for students and faculty to engage in group activities and exchange ideas. Featuring flexible seating arrangements, modern lighting, and an interactive atmosphere, this facility encourages critical thinking and active learning within the library.
          </p>
        </motion.div>

      </div>
    </div>
  );
}