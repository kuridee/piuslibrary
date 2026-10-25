import "./globals.css";
import Header from "./components/Head";
import Footer from "./components/Footer";

export const metadata = {
  title: "Pius XII College Library",
  description: "Official Library Portal of Pius XII College Iloilo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
        <Header />
        
        {/* Full-width container so sub-components (like maps) can stretch edge-to-edge */}
        <main className="flex-grow w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}