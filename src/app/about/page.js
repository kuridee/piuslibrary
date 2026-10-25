"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

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
              Pius XII College Iloilo, Inc.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Vision, Mission, and Goals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Anchored in faith, academic excellence, and dedicated service to the Church and community since 1959.
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* 1. HISTORICAL OVERVIEW SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Historical Overview
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Pius XII Institute of Education, Inc., formerly Pius XII Institute of Catechetics and Social Studies, was founded by the late Most Rev. Jose Maria Cuenco, Archbishop of Jaro in 1959. At that time, the Archdiocese of Jaro was in need of professional catechists to aid evangelization in every parish. Archbishop Cuenco recognized the presence of many religious sects that could hinder evangelization. Additionally, the Archdiocese was expanding its parishes while facing a scarcity of priests, especially in remote areas.
            </p>
            <p>
              At that time, volunteered catechists were only available at that time. We could not expect that they have enough knowledge to teach regarding the Catholic Doctrine. It was observed that the volunteered, teaches only the basic common prayers and the sacraments. However, to teach how the people lived in what they learned still far behind in the understanding of the Catholic Doctrine.
            </p>
            <p>
              However, after 47 years of fruitful existence, Pius XII Institute of Catechetics faced a great challenged, that is the financial constraint due to the decline of enrollments and faculty development was also affected. So, instead of on-going program to Bachelor’s degree for Professional Catechists was redound to seminar and conferences for volunteered catechists. After 15 years of experimentation, the Archdiocese found out that the trained volunteered catechists could not fully help in the stabilization of the Catechetical Program in the parishes. Besides, majority of the volunteered catechists are retired public school teachers, and few young men and women joined to respond the need, but still not enough to accommodate many public schools in the whole Archdiocese of Jaro.
            </p>
            <p>
              The clientele are actually coming from the different parishes which should be recommended by the Parish Priest. However, walk-in applicants are also encouraged either within the Archdiocese or outside the Archdiocese.
            </p>
            <p>
              Pius XII College is a school established for the training of teachers of catechetics and declared the first national Catechetical School for that purpose by Philippine Catholic Hierarchy. It is obvious that religious education through the teaching of catechism is a great and urgent necessity in our country.
            </p>
          </div>
        </motion.div>

        {/* 2. VISION & MISSION SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                    Our Calling
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Vision
                  </h2>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-base">
                Young men and women, molders of men, who are aware and oriented to the call of the ministry of the <strong className="text-slate-900 font-semibold">WORD and PRAYER</strong> in the Spirit of Faith, Love, Hope, and Sacrifice to the faithful service for their fellowmen, the country, the Church, and to God. They are patterned after the Man-God Christ, who died that his people would live, and are under the maternal protection of Mary, Mother and Queen of the Apostles.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                  Our Purpose
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Mission
                </h2>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Provide personal, apostolic, spiritual, and academic formation.",
                "Foster fuller awareness and commitment to the call to the ministry of the Word and Prayer as catechists.",
                "Promote loyalty and authentic witnessing of Gospel values, especially in catechetical endeavors.",
                "Prepare teachers who develop social and cultural values in students through understanding and practice of the Catholic faith and other sciences.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* 3. SCHOOL AIMS AND OBJECTIVES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                Educational Commitments
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                School Aims and Objectives
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Pius XII College aims to help prepare the youth for life by fostering the will, spirit, and heart of young men and women, not just their customs or masks. The college offers education anchored in Christian principles, helping students live with full human dignity and achieve their potential.
            </p>
            <p>
              The college is dedicated to the ideals of Christian education, aiming not only at academic proficiency but also the formation of practical, Christian, civic-conscious, and law-abiding citizens. It encourages students to respond willingly to religious, social, and cultural needs of the community.
            </p>
          </div>
        </motion.div>

        {/* 4. ORGANIZATIONAL STRUCTURE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 p-6 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                Institutional Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Organizational Structure
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              The Library is an integral part of the College, supporting the total educational program. It falls under the Office of the Vice President for Interim Administration. The College Library is organized under the Head Librarian, assisted by a library assistant and student assistants.
            </p>
            <p>
              A Faculty Library Committee advises the Head Librarian on general policies and serves as a liaison between the faculty and the library. Below is the organizational chart of the center.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}