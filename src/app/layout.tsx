import { Inter } from "next/font/google";
import ClientOnly from "./components/client-only";
import RegisterModal from "./components/modals/register-modal";
import Navbar from "./components/navbar/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find a place to stay - AirBNB",
  description: "Find a place to squat forever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
          <RegisterModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
