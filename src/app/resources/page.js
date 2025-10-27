
import Link from "next/link";
export default function ResourcePage(){

    return(

        <div>

        <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Free Online Resources
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* DOABooks */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">
            <Link href="https://www.doabooks.org" target="_blank">
              DOABOOKS.ORG
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A directory of open access academic books and chapters, freely available for anyone to read and download.
          </p>
        </div>

        {/* WorldCat */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">
            <Link href="https://www.worldcat.org" target="_blank">
              WORLDCAT.ORG
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Search the world’s largest library catalog to locate books, journals, and digital resources near you.
          </p>
        </div>

        {/* PhilConnect */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">
            <Link href="https://phlconnect.ched.gov.ph" target="_blank">
              PHLCONNECT
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            An educational platform by CHED connecting learners to online academic and library resources in the Philippines.
          </p>
        </div>

        {/* EbookHub */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">
            <Link href="https://ebook-hub.com" target="_blank">
              EBOOKHUB
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Discover and download eBooks from various categories — from academics to fiction — in one convenient place.
          </p>
        </div>
      </div>
    </div>

      {/* End of the code*/}

    <div>
        <p  className="text-3xl font-bold text-gray-800 mb-8 mt-8">PDF Collections</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* 1 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.doabooks.org" target="_blank">
              DOABooks.org
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Access open access academic books and chapters in PDF format from universities worldwide.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.pdfdrive.com" target="_blank">
              PDFDrive.com
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A massive collection of free downloadable PDF books covering every topic imaginable.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://openlibrary.org" target="_blank">
              OpenLibrary.org
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            An open project by Internet Archive providing millions of free eBooks and PDFs for readers worldwide.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.bookboon.com" target="_blank">
              Bookboon.com
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Offers free educational PDF textbooks and business eBooks from top professors and experts.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.free-ebooks.net" target="_blank">
              Free-Ebooks.net
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Browse and download thousands of PDF eBooks across genres such as fiction, science, and education.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://scholar.google.com" target="_blank">
              Google Scholar
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Search scholarly articles, theses, and PDFs from universities and research organizations worldwide.
          </p>
        </div>

        {/* 7 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://eric.ed.gov" target="_blank">
              ERIC.ed.gov
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Access PDFs of educational research papers, journals, and studies from the U.S. Department of Education.
          </p>
        </div>

        {/* 8 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://core.ac.uk" target="_blank">
              CORE.ac.uk
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A global aggregator of open-access PDFs from academic repositories and journals.
          </p>
        </div>

        {/* 9 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.researchgate.net" target="_blank">
              ResearchGate.net
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A platform for academics to share research papers and find millions of PDFs from published studies.
          </p>
        </div>

        {/* 10 */}
        <div className="bg-white shadow-md rounded-2xl p-5 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.jstor.org/open" target="_blank">
              JSTOR Open Content
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            Offers freely available academic books, journals, and research PDFs from JSTOR’s open access collection.
          </p>
        </div>
      </div>
    </div>

    <div>
        <p className="text-3xl font-bold text-gray-800 mb-8 mt-8" >Online Library Catalog</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* 1 - LibraryKa */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://librarika.com" target="_blank">
              LibraryKa
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A modern online public access catalog (OPAC) that connects users to collections from libraries across the Philippines.
          </p>
        </div>

        {/* 2 - WorldCat */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://www.worldcat.org" target="_blank">
              WorldCat
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            The world’s largest library catalog that helps you locate books, research materials, and digital items from libraries worldwide.
          </p>
        </div>

        {/* 3 - LibWeb */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="http://www.lib-web.org" target="_blank">
              LibWeb
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A global directory of library homepages and catalogs offering quick access to library systems across different countries.
          </p>
        </div>

        {/* 4 - PhilConnect */}
        <div className="bg-white shadow-md rounded-2xl p-6 text-center border hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            <Link href="https://phlconnect.ched.gov.ph" target="_blank">
              PhilConnect OPAC
            </Link>
          </h3>
          <p className="text-gray-600 text-sm">
            A CHED-supported platform giving access to digital library catalogs and academic repositories from Philippine institutions.
          </p>
        </div>
      </div>
    </div>



    {/* End of the code*/}
    </div>
    
    
    )
}