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
                    className={`flex flex-col ${inter.className} h-screen w-full`}
               >
                    <StyleProvider>
                         <Header />
                         {children}
                         <Footer />
                    </StyleProvider>
               </body>
          </html>
     );
}
