import "./globals.css"
import Header from './components/Head';
import Footer from './components/Footer';

export const metadata = {

  title: "My website",
  description: "Responsive Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
    <Header/>
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    <Footer/>
      
      </body>
    </html>
  );
}
