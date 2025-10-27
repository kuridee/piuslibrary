'use client';
import { useEffect, useState } from "react";

export default function GuidelinesPage() {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 relative">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-12">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 border-b border-gray-300 pb-4">
          Library Guidelines
        </h1>

        {/* Section Header */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Guidelines for the Administrator, Faculty, and Personnel
        </h2>

        {/* Guidelines List */}
        <ul className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            The library services are exclusive for administrators, faculty members, personnel, and students of Pius XII College.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            To enter the library, the user must present a validated school ID.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Borrowers have the right to borrow any material eligible for loan in accordance with library rules. Administrators, faculty members, and personnel may loan out as many as three (3) books at a time.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            The library practices an open-shelf system in circulating books except in the Reserve Section. Self-service is observed when borrowing materials.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Periodicals, Filipiniana, Reference Collection, theses, and dissertation materials are to be used within the library premises only. Reserve materials may be loaned overnight and returned the following day.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Photocopying of materials requires permission from the librarian and filling out a slip. Certain materials (Filipiniana, some reserve, theses, dissertations) may not be photocopied; manual notes are required.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Library clients must repair any damage to materials. Charges apply for unrepaired damage; irreparable items must be replaced with the same title.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Lost materials should be replaced with the same item. If unavailable, an item with similar subject content may be accepted upon librarian appraisal.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Representatives borrowing or returning materials must present the administrator, faculty, or personnel’s ID.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Audio-visual materials may be borrowed only for classroom use.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            All borrowed materials must be returned before the semester ends. Renewals require physical presentation of the items.
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
            Signing of clearances requires that all borrowed or lost materials be returned, replaced, or paid for before clearance is granted.
          </li>
        </ul>

        {/* Library Service Hours */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Library Service Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="text-xl font-medium mb-2">Regular Hours</h3>
              <p>Monday to Friday</p>
              <p>8:00 A.M. – 11:30 A.M.</p>
              <p>1:00 P.M. – 4:30 P.M.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Semestral Break</h3>
              <p>Monday to Friday</p>
              <p>9:00 A.M. – 12:00 Noon</p>
              <p>1:00 P.M. – 4:00 P.M.</p>
            </div>
          </div>
        </div>

        {/* Library Policies */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 uppercase">Library Policies</h2>

          {/* Circulation Policy */}
          <h3 className="text-xl font-bold mb-4 text-gray-800">A. Circulation Policy</h3>
          <p className="text-gray-700 mb-6 text-justify">
            All bonafide students, faculty, staff, Board of Trustees, Parish Priest, and Lay workers
            in Pius XII College Iloilo are entitled to use the library resources subject to the
            following rules and regulations:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Faculty members, personnel, and students must present a validated College ID every time they enter and borrow books.</li>
            <li>Lending of books is allowed only after the last day of “changing and dropping” of subjects.</li>
            <li>Faculty members may borrow up to three (3) books for one week, renewable for another week unless requested by others.</li>
            <li>Students may borrow two (2) books at a time: one non-fiction for 1 day, one fiction for 1 week, and a Bible for 2 hours.</li>
            <li>Books in great demand may be recalled anytime or limited to shorter circulation periods.</li>
            <li>Books on reserve are for “Room Use Only.” Overnight use may be permitted from 3:30 PM and returned the next day.</li>
            <li>Reserve, Reference, Filipiniana, and Periodical resources are for library use only and may be borrowed for 1 hour for photocopying.</li>
            <li>Fines apply for overdue materials. Reserve and Bible materials are fined per hour overdue.</li>
            <li>All books are for library use only one week before and during final exams.</li>
            <li>Lost or damaged books must be replaced or paid for at full cost, including processing fees and fines.</li>
            <li>Unnecessary noise, eating, drinking, and sleeping are discouraged inside the library.</li>
            <li>Electronic gadgets must be on silent mode; strict silence must be observed.</li>
          </ol>

          {/* Internet Policy */}
          <h3 className="text-xl font-bold mt-10 mb-4 text-gray-800">B. Internet Policy</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>All bonafide students can use internet services with a validated school ID and receipt.</li>
            <li>Students are charged ₱10.00 per hour; payment is made at the Accounts Office.</li>
            <li>Exceeding 1 hour incurs additional payment depending on time consumed.</li>
            <li>Downloading is allowed; USBs must be scanned for viruses.</li>
            <li>Printing is permitted with the following rates:
              <ul className="list-disc pl-8">
                <li>Own paper: Short – ₱2.00; Long – ₱2.50</li>
                <li>Library paper: Short – ₱2.50; Long – ₱3.00</li>
              </ul>
            </li>
            <li>Access to sexually explicit materials is strictly prohibited.</li>
            <li>Talking, eating, drinking, and smoking are prohibited inside the room.</li>
            <li>No companions allowed inside the internet room.</li>
          </ol>

          {/* Outside Researchers Policy */}
          <h3 className="text-xl font-bold mt-10 mb-4 text-gray-800">C. Outside Researchers Policy</h3>
          <p className="text-gray-700 mb-4">
            The library accommodates non–Pius XII College students for research under the following procedures:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Present a research permit signed by their librarian.</li>
            <li>Get approval from the Pius XII College Librarian.</li>
            <li>Researchers may then explore the library resources.</li>
            <li>The librarian records the hours of stay and corresponding fees.</li>
            <li>Additional time beyond paid hours will incur extra charges.</li>
            <li>Outside researchers cannot take books out; photocopying must be done within the library.</li>
          </ol>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
