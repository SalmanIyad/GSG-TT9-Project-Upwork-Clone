import '@/styles/globals.css";

import Header from "@/components/common/Header.jsx";
import Footer from "@/components/common/Footer.jsx";

import localFont from "next/font/local";
import BackToTopButton from "@/components/general/BackToTopButton";

const neueMontreal = localFont({
  src: "@/utils/fonts/NeueMontreal-Regular.otf",
  display: "swap",
});

export const metadata = {
  title: "Upwork | The World's Work Marketplace",
  description:
    "Upwork connects businesses with independent professionals and agencies around the globe. Where companies and freelancers work together in new ways that ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
      </head>
      <body className={`${neueMontreal.className} relative`}>
        <Header />
        <section>{children}</section>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
