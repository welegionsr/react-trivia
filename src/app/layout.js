'use client';

import localFont from "next/font/local";
import "./globals.css";
import "@/app/layout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameBar from "@/ui/GameBar";
import { Navbar } from "react-bootstrap";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GameBar />
        {children}

        <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
      </Navbar>
      </body>
    </html>
  );
}
