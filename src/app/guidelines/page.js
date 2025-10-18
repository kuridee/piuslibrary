export default function GuidelinesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
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

        {/* Library Service Hours Section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Library Service Hours
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            {/* Regular Hours */}
            <div>
              <h3 className="text-xl font-medium mb-2">Regular Hours</h3>
              <p>Monday to Friday</p>
              <p>8:00 A.M. – 11:30 A.M.</p>
              <p>1:00 P.M. – 4:30 P.M.</p>
            </div>

            {/* Semestral Break */}
            <div>
              <h3 className="text-xl font-medium mb-2">Semestral Break</h3>
              <p>Monday to Friday</p>
              <p>9:00 A.M. – 12:00 Noon</p>
              <p>1:00 P.M. – 4:00 P.M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
