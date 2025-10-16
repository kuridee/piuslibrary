import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">

      <div className="sm:col-span-7 min-h-[700px] flex flex-col justify-center">
        <p className=" text-[70px] font-bold">PIUS XII COLLEGE LIBRARY</p>
        <p className=" md:text-lg  w-full sm:w-[300px] md:w-[400px] lg:w-[500px] max-w-full h-auto  p-4 rounded-lg text-gray-800 leading-relaxed">
        Knowledge lives in every corner of the library. Every book is a doorway to a new world. Curiosity leads you to endless discoveries. Come and explore the universe without leaving your seat.</p><br/>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold w-40">
  Know more ...
</button><br/><br/>

      </div>
      <div className=" sm:col-span-5 min-h-[700px] mt-8">

      <div className="relative sm:col-span-5 min-h-[600px] ">
          <Image
            src="/images/pius.png"
            alt="MySite Logo"
            fill
            className="object-cover rounded-lg grayscale"
          />
      </div>


      </div>

      <div className="sm:col-span-12 min-h-[400px]">
  <p className=" text-center font-bold text-xl text-gray-800">LIBRARY SERVICES</p><br/>

  <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
  {/* Reader's Services */}
  <div className="md:w-1/2 p-8 bg-gray-50 rounded-lg shadow-md">
    <p className="font-bold text-xl text-gray-800 mb-4">Reader’s Services</p>

    <p className="text-gray-700 md:text-lg leading-relaxed mb-4">
      Reader’s Services are the sections of a library dedicated to assisting users in accessing and using library materials. These services include circulation, reference, and reserve services, helping patrons locate, borrow, and consult books, journals, and other resources efficiently.
    </p>

    <ul className="list-disc list-inside text-gray-700 md:text-lg  space-y-1">
      <li>Circulation</li>
      <li>Reference Section</li>
      <li>Reserve Section</li>
    </ul>
  </div>

  {/* Technical Services */}
  <div className="md:w-1/2 p-8 bg-gray-50 rounded-lg shadow-md">
    <p className="font-bold text-xl text-gray-800 mb-4">Technical Services</p>

    <p className="text-gray-700 md:text-lg  leading-relaxed mb-4">
      These services take care of acquiring, cataloging, and indexing of books, as well as repair and binding.
    </p>

    <ul className="list-disc list-inside text-gray-700 md:text-lg space-y-1">
      <li>Acquisition</li>
      <li>Cataloging</li>
      <li>Indexing</li>
      <li>Repair and Binding</li>
    </ul>
  </div>
</div>
</div>

<div className="sm:col-span-12 min-h-[500px] mt-5 mb-5 p-8 flex items-center justify-center text-center">
  <p className="text-xl font-bold max-w-3xl">
    Pius XII Institute of Education, Inc. was formerly Pius XII Institute of
    Catechetics and Social Studies, founded by the late Most Rev. Jose
    Maria Cuenco, Archbishop of Jaro, in 1959.
  </p>
</div>

<div className="sm:col-span-12 mt-5 mb-5 p-8 flex flex-col md:flex-row items-center md:items-center justify-center gap-10 bg-gray-50 rounded-xl shadow-sm">

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



    </div>

    
    
  );
}
