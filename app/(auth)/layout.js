import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AppDataProvider } from "../context/AppDataContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Payraydoo App",
    description: "",
};

export default function AuthLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                cz-shortcut-listen="true" data-new-gr-c-s-check-loaded="14.1263.0" data-gr-ext-installed=""
            >
                {children}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </body>
        </html >
    );
}
