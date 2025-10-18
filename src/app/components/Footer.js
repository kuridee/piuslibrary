import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* College Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Pius XII College Logo"
              width={80}     // ✅ Adjusted for a professional look
              height={80}
              className="rounded-md object-contain"
            />
            <h2 className="text-xl font-bold">Pius XII College</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Providing quality education and holistic development for all students.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
          <li>

          <Link href="/about" className="no-underline">
          Vision and Mission

          </Link>
          </li>
          <li>

          <Link href="/about" className="no-underline">
         About Us
            
          </Link>
          </li>
          <li>

          <Link href="/contact" className="no-underline">
         Contact Us
            
          </Link>
          </li>
           
        
          </ul>
        </div>

        {/* Online Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Online Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">


            <li>
            <Link href="/guidelines" className="no-underline">
              Library Guidelines
            </Link>
              
              </li>
            <li>


               <Link href="/resources" className="no-underline">
              e-Learning
              </Link>
              
              </li>
            <li>

            <Link href="/resources" className="no-underline">
              PDF Collections
              </Link>
              
              </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex flex-col space-y-2">
            <a href="https://www.facebook.com/profile.php?id=61557970168783"  target="_blank"
  rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pius XII College. All rights reserved.
      </div>
    </footer>
  );
}
