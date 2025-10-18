export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-12 space-y-12">
        
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center border-b border-gray-300 pb-4">
          Contact Us
        </h1>

        {/* Contact Info */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions or need assistance? Reach out to us through any of the following channels or fill out the contact form.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Address:</span> Pius XII College, Iloilo</p>
              <p><span className="font-semibold">Phone:</span> (033) 351-1043</p>
              <p><span className="font-semibold">Email:</span> piusiicollegeiloilo@gmail.com</p>
              <p><span className="font-semibold">Office Hours:</span> Monday to Friday, 8:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1355521380615!2d122.55346257595409!3d10.72402668942161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee52113da3527%3A0xd769a18bddbacf7!2sPIUS%20XII%20COLLEGE%20ILOILO%2C%20INC.!5e0!3m2!1sen!2sph!4v1760756449216!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
