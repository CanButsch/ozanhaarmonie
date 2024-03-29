import { Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

const playfair = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "Haarmonie By Oz",
  description: "Willkommen bei Haarmonie By Oz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <body className={playfair.className}>
      <Navbar/>
        {children}
      <Footer />
        </body>
    </html>
  );
}
