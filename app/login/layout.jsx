import '../../styles/globals.css'
import { Inter } from "next/font/google";
import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Upwork Login - Log in to your Upwork accountNext App",
  description: "Log in to your Upwork account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
