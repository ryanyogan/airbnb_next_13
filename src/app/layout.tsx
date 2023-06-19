import { Inter } from "next/font/google";
import getCurrentUser from "../actions/get-current-user";
import LoginModal from "../components/modals/login-modal";
import RegisterModal from "../components/modals/register-modal";
import RentModal from "../components/modals/rent-modal";
import Navbar from "../components/navbar/navbar";
import "./globals.css";
import ToasterProvider from "./providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find a place to stay - AirBNB",
  description: "Find a place to squat forever",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <ToasterProvider />

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
