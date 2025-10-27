import Image from "next/image";

export default function FacilitiesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 space-y-16">
      
      {/* ================= FIRST LAYOUT ================= */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="text-center py-10 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Library Facilities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Pius XII College Library provides a peaceful and inspiring environment for study and research. 
            Equipped with modern resources, spacious reading areas, and digital access, it supports the academic 
            and intellectual needs of students and faculty alike.
          </p>
        </div>

        {/* Library Room Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
          {/* Image Section */}
          <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/38.jpg"
              alt="Library Room"
              fill
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Description Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Library Room</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Library Room is designed to foster focus, comfort, and creativity. It features well-arranged 
              shelves of books, journals, and digital materials, as well as designated study corners for both 
              individual and group research. The area is well-lit, and Wi-Fi enabled—providing 
              a conducive space for academic growth. Students can access online databases, use computer terminals, 
              or simply enjoy a quiet moment of reading in a serene atmosphere.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECOND LAYOUT ================= */}
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Library Integrated System Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Library Integrated System</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Library Integrated System is a comprehensive digital platform that manages all library operations—
              from book cataloging and borrowing to user accounts and reports. It provides real-time access to library 
              records, ensuring efficient tracking and management of materials. This system helps streamline the 
              workflow, making library services faster and more accessible to both staff and students.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/35.jpg"
              alt="Library Integrated System"
              fill
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* OPAC Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
          {/* Image */}
          <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/34.jpg"
              alt="OPAC"
              fill
              className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Online Public Access Catalog (OPAC)</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Online Public Access Catalog (OPAC) is an online database of all materials available in the library. 
              It allows students and faculty to search for books, journals, and digital resources conveniently. 
              OPAC enhances accessibility, allowing users to locate materials by title, author, or subject, 
              and even check availability in real-time—making research and academic preparation more efficient and user-friendly.
            </p>
          </div>
        </div>

        {/* Discussion Area Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Discussion Area</h2>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/36.jpg"
                alt="Discussion Area 1"
                fill
                className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/37.jpg"
                alt="Discussion Area 2"
                fill
                className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-justify">
            The Discussion Area provides a collaborative space for students and faculty to engage in group activities, 
            brainstorming sessions, and academic discussions. Designed with comfort and productivity in mind, 
            the area features flexible seating arrangements, modern lighting, and a quiet yet interactive atmosphere. 
            This facility encourages teamwork, critical thinking, and the exchange of ideas—making it a vital extension 
            of the learning experience within the library.
          </p>
        </div>
      </div>
    </div>
  );
}
