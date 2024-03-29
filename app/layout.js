import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";


export const metadata = {
  title: "Haarmonie By Oz",
  description: "Willkommen bei Haarmonie By Oz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <body >
      <Navbar/>
        {children}
      <Footer />
        </body>
    </html>
  );
}
