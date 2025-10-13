"use client";
import Link from "next/link";
import { useState } from "react";
import {Globe, Menu, X} from 'lucide-react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return(

  <header className="text-gray-900 shadow-md">

    <nav className="container mx-auto flex justify-between items-center p-3">

      <h1 className="flex items-center gap-2  text-xl font-bold tracking-wide text-gray-600">
      <Globe className="w-8 h-8 text-blue-600" />Tailwind Corp.</h1>

      <div className="hidden lg:flex gap-12 text-sm text-gray-600">

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Investments</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
        
      </div>
      <button className="lg:hidden focus:outline-none"
    onClick={()=>setIsOpen(!isOpen)}>

      {isOpen ? <X size={28}/>:<Menu size={28}/>}


    </button>

    </nav>


   

 {/* Mobile + Tablet Dropdown Menu */}
    { isOpen && (

      <div className="lg:hidden bg-gray-800 text-white  px-4 pb-4 space-y-2">

        <Link href="/" className="block">Home</Link>
        <Link href="/about" className="block">About</Link>
        <Link href="/contact" className="block">Contact</Link>
        <Link href="/portfolio" className="block">Portfolio</Link>
        
      </div>



    )}
  
  </header>

  );
}