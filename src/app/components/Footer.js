
export default function Footer(){

    return(

       

        <footer className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* College Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Pius XII College</h2>
            <p className="text-gray-400">
              Providing quality education and holistic development for all students.
            </p>
          </div>
  
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Vision</li>
              <li>Mission</li>
              <li>Goal</li>
            </ul>
          </div>
  
          {/* Online Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Online Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Library</li>
              <li>e-Learning</li>
              <li>Student Portal</li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
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