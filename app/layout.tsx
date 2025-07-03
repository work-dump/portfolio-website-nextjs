import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ivan Vargas | Personal Portfolio",
  description:
    "Ivan is a Versatile AI Engineer with more than 7 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground relative pt-28 sm:pt-36`}
      >
        {/* Blurred gradient backgrounds, as in the original design */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[14rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
