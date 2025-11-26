import { Geist, Geist_Mono } from "next/font/google";
import { AdminDataProvider } from "./admin/adminContext/AdminContext";
import "./admin/admin.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Payradoo - Admin",
  description: "Customize your Dream",
};
export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true" data-new-gr-c-s-check-loaded="14.1264.0" data-gr-ext-installed=""
      >
      <AdminDataProvider>
        {children}
      </AdminDataProvider>


    </body>
    </html >
  );
}