import Footer from "./components/Footer";
import Header from "./components/Header";
import StyleProvider from "./components/providers/StyleProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
     title: "Next JS 13 Template",
     description: "Boiler with Dark Mode + More",
};

export default function RootLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <html lang="en" suppressHydrationWarning>
               <body
                    className={`flex flex-col ${inter.className} min-h-screen w-full relative overflow-x-hidden`}
               >
                    <StyleProvider>
                         <Header />
                         {children}
                         <Footer />
                         <div className="absolute -z-10 w-1/3 h-full dark:bg-gradient-to-r from-black/70 via-black/50 to-black/10 top-1/2 -right-1/3 transform -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                         <div className="absolute -z-10 w-1/3 h-full dark:bg-gradient-to-l from-black/70 via-black/50 to-black/10 top-1/2 -left-1/3 transform translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    </StyleProvider>
               </body>
          </html>
     );
}
