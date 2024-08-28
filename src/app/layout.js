import { Inter } from "next/font/google";
import { SiteProvider } from "@/SiteContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vocal Teacher",
  description: "Music is style of life",
};


export default function RootLayout({ children }) {

  return (
    <html lang="uk">
      <SiteProvider>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </SiteProvider>
    </html>
  );
}
