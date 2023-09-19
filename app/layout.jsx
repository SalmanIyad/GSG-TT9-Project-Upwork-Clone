import "../styles/globals.css";

import localFont from 'next/font/local'

const neueMontreal = localFont({
  src: '../utils/fonts/NeueMontreal-Regular.otf',
  display: 'swap',
})
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

export const metadata = {
  title: "Upwork | The World's Work Marketplace",
  description:
    "Upwork connects businesses with independent professionals and agencies around the globe. Where companies and freelancers work together in new ways that ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body className={neueMontreal.className}>
        <Header />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
