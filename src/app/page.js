"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  return (
    <div className="w-full overflow-x-hidden bg-slate-50 text-slate-800">
      
      {/* HERO SECTION WITH FADED BACKGROUND IMAGE */}
      <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/33.jpg"
            alt="Pius XII College Library Background"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105"
          />
          {/* Gradient Overlay for depth and text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <motion.div
            style={{ y: heroY, opacity: textOpacity }}
            className="max-w-3xl space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-950/80 border border-red-800/50 rounded-full">
                Welcome to Knowledge Hub
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                PIUS XII COLLEGE <span className="text-red-500">LIBRARY</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              Knowledge lives in every corner of the library. Every book is a
              doorway to a new world. Curiosity leads you to endless discoveries.
              Come and explore the universe without leaving your seat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                href="https://opac-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-xl hover:shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Catalog (OPAC)
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-16 sm:py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase">
              What We Offer
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
              LIBRARY SERVICES
            </p>
            <div className="mt-4 h-1 w-16 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reader's Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold mb-6 text-xl">
                01
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Reader’s Services
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Reader’s Services are dedicated to assisting users in accessing
                and using library materials efficiently. These include circulation,
                reference, and reserve sections designed to help patrons locate and consult resources.
              </p>
              <ul className="space-y-3">
                {["Circulation Desk", "Reference Section", "Reserve Section"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold mb-6 text-xl">
                02
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Technical Services
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Technical Services work behind the scenes acquiring, cataloging,
                indexing, and managing physical collections, ensuring all resources are structured and accessible.
              </p>
              <ul className="space-y-3">
                {["Acquisition", "Cataloging", "Indexing", "Repair and Binding"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HISTORY QUOTE BANNER */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-2xl sm:text-3xl font-medium leading-snug text-slate-200">
            &ldquo;Pius XII Institute of Education, Inc. was formerly Pius XII Institute of Catechetics and Social Studies, founded by the late Most Rev. Jose Maria Cuenco, Archbishop of Jaro, in 1959.&rdquo;
          </p>
        </div>
      </section>

      {/* LEADERSHIP & FACULTY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Person 1 - Chief Librarian */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Library Department</span>
            <h3 className="text-3xl font-bold text-slate-900 mt-1 mb-4">Regina A. Maligad, MSLS</h3>
            <p className="text-red-600 font-medium text-lg mb-4">Chief Librarian</p>
            <p className="text-slate-600 leading-relaxed">
              The College Library, through its resources, facility, and staff, is dedicated to providing open access to information and offering the services and tools to locate and interpret that information. As patron needs and information technologies continue to evolve, so too will the means by which the Library fulfills its role within the institution.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image src="/images/lib.png" alt="Regina A. Maligad" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Person 2 - President */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image src="/images/pads.png" alt="Rev. Fr. Emmanuel G. Tuberada" fill className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Institutional Leadership</span>
            <h3 className="text-3xl font-bold text-slate-900 mt-1 mb-1">Rev. Fr. Emmanuel G. Tuberada</h3>
            <p className="text-red-600 font-medium text-lg mb-4">HEI President</p>
            <p className="text-slate-600 leading-relaxed">
              Rev. Fr. Emmanuel G. Tuberada leads Pius XII College Iloilo with vision, integrity, and dedication. With a profound commitment to academic excellence, spiritual formation, and community development, Fr. Tuberada’s leadership emphasizes holistic education—blending faith, knowledge, and service.
            </p>
          </div>
        </div>

        {/* Person 3 - Dean */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Academic Excellence</span>
            <h3 className="text-3xl font-bold text-slate-900 mt-1 mb-1">Sr. Providenza</h3>
            <p className="text-red-600 font-medium text-lg mb-4">Dean of Studies</p>
            <p className="text-slate-600 leading-relaxed">
              The College Library is devoted to advancing the academic mission of Pius XII College by ensuring open and equitable access to information resources. Through its comprehensive collection, modern facilities, and dedicated staff, the Library supports teaching, learning, and research endeavors.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image src="/images/sis.png" alt="Sr. Providenza" fill className="object-cover" />
            </div>
          </div>
        </div>

      </section>

      {/* MAP SECTION */}
      <section className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-bold tracking-widest text-red-600 uppercase">
            Location
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
            Visit Our Campus
          </h2>
          <p className="text-slate-500 mt-2">
            Pius XII College Iloilo, Inc. • Jaro, Iloilo City
          </p>
        </div>

        {/* Full-width Map */}
        <div className="relative w-full h-[450px] lg:h-[550px] border-t border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1355521380615!2d122.55346257595409!3d10.72402668942161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee52113da3527%3A0xd769a18bddbacf7!2sPIUS%20XII%20COLLEGE%20ILOILO%2C%20INC.!5e0!3m2!1sen!2sph!4v1760756449216!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full block"
          ></iframe>

          {/* Floating Badge Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:left-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200 max-w-sm">
            <h4 className="font-bold text-slate-900 text-base">Pius XII College Library</h4>
            <p className="text-slate-600 text-xs mt-1">Commission Civil St, Jaro, Iloilo City, Iloilo</p>
          </div>
        </div>
      </section>

    </div>
  );
}