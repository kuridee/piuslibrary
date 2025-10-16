"use client";
import Link from "next/link";
import { useState } from "react";
import {Globe, Menu, X} from 'lucide-react';
import Image from "next/image";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return(

  <header className="text-gray-900 shadow-md">

    <nav className="container mx-auto flex justify-between items-center p-3">

      <h1 className="flex items-center gap-2  text-xl font-bold tracking-wide text-gray-600">
  

      
      PIUS XII COLLEGE </h1>

      <div className="hidden lg:flex gap-12 text-sm text-gray-600">

        <Link href="/"></Link>
        <Link href="/about">Resources</Link>
        <Link href="/portfolio">Announcements and Guidelines</Link>
        <Link href="/news">About Us</Link>
        <Link href="/contact">Contact Us</Link>
        
      </div>
      <button className="lg:hidden focus:outline-none"
    onClick={()=>setIsOpen(!isOpen)}>

      {isOpen ? <X size={28}/>:<Menu size={28}/>}


    </button>

    </nav>


   

 {/* Mobile + Tablet Dropdown Menu */}
    { isOpen && (

      <div className="lg:hidden bg-gray-800 text-white  px-4 pb-4 space-y-2">

        <Link href="/" className="block"></Link>
        <Link href="/about" className="block">About</Link>
        <Link href="/contact" className="block">Contact</Link>
        <Link href="/portfolio" className="block">Portfolio</Link>
        
      </div>



    )}
  
  </header>

  );
}<div className="sm:col-span-12 mt-5 mb-5 p-8 flex flex-col md:flex-row items-center md:items-center justify-center gap-10 bg-gray-50 rounded-xl shadow-sm">

{/* Left Side - Text */}
<div className="md:w-1/2 text-center md:text-left">
  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
    The College Library, through its resources, facility, and staff, is dedicated
    to providing open access to information and offering the services and tools
    to locate and interpret that information. As patron needs and information
    technologies continue to evolve, so too will the means by which the Library
    fulfills its role within the institution.
  </p>

  <p className="text-2xl font-bold text-gray-800 mb-1">Regin Maligad</p>
  <p className="text-lg text-gray-600 mb-1">Library Head</p>
  <p className="text-lg text-gray-600">Pius XII College</p>
</div>

{/* Right Side - Image */}
<div className="relative w-56 h-56 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-md">
  <Image
    src="/images/regin.jpg"
    alt="Regin Maligad"
    fill
    className="object-cover rounded-lg"
  />
</div>

</div>
