"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Animation variants matching Home & Facilities pages
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
              Pius XII College Library
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Contact & Location
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have questions or need assistance? Reach out to our library administration team or visit us in person.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* CONTACT INFO & FORM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 space-y-6"
          >
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                Reach Out
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Get in Touch
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mt-2">
                We are here to assist students, faculty, and researchers. Contact us through any of the channels below.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Campus Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pius XII College, Commission Civil St, Jaro, Iloilo City
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Telephone</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">(033) 351-1043</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed break-all">
                    piusiicollegeiloilo@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Library Hours</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Monday to Friday: 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8"
          >
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              Send a Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-6">
              Inquiry Form
            </h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-slate-700 font-semibold text-sm mb-1.5" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-slate-800 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold text-sm mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-slate-800 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold text-sm mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-slate-800 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto bg-red-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* MAP SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden p-6 sm:p-8"
        >
          <div className="mb-6">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              Find Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Location
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Visit our library during official office hours.
            </p>
          </div>

          <div className="relative w-full h-80 sm:h-[450px] rounded-xl overflow-hidden shadow-inner border border-slate-200">
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

            {/* Floating Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 max-w-sm">
              <h4 className="font-bold text-slate-900 text-sm">Pius XII College Iloilo</h4>
              <p className="text-slate-600 text-xs mt-0.5">Commission Civil St, Jaro, Iloilo City, Iloilo</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}