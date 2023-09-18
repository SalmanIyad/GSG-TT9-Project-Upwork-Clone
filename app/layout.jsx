import "../styles/globals.css";
import { Inter } from "next/font/google";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Upwork | The World's Work Marketplace",
  description:
    "Upwork connects businesses with independent professionals and agencies around the globe. Where companies and freelancers work together in new ways that ...",
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
