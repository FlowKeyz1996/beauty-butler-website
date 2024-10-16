import type { Metadata } from "next";
import localFont from "next/font/local";
import { Epilogue } from "next/font/google";
import "./globals.css";


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
const euclid = localFont({
  src:"./fonts/Euclid-Circular-A-Bold.ttf",
  variable:"--font-euclid",
  weight:"100, 300, 400, 500, 600"
});
const euclidlight = localFont({
  src:"./fonts/Euclid-Circular-A-Light.ttf",
  variable:"--font-euclid-light",
  weight:"100, 300, 400, 500, 600"
});
const euclidmedium = localFont({
  src:"./fonts/Euclid Circular A Medium.ttf",
  variable:"--font-euclid-medium",
  weight:"100, 300, 400, 500, 600"
});
const euclidsemibold = localFont({
  src:"./fonts/Euclid Circular A SemiBold.ttf",
  variable:"--font-euclid-semibold",
  weight:"100, 300, 400, 500, 600"
});

const apfel = localFont({
  src:"./fonts/ApfelGrotezk-Regular.otf",
  variable:"--font-apfel-regular",
  weight:"100, 300, 400, 500, 600"
});
const apfelmedium = localFont({
  src:"./fonts/ApfelGrotezk-Mittel.otf",
  variable:"--font-apfel-mittel",
  weight:"100, 300, 400, 500, 600"
});

const epilogue = Epilogue({
  subsets:['latin'],
  weight:['100','300','400','500','600','700'],
  variable:'--font-epilogue',
});

export const metadata: Metadata = {
  title: "Welcome to beauty butler",
  description: "Get beautiful without leaving the comfort of your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${epilogue.variable} ${euclidsemibold.variable} ${euclidlight.variable} ${euclidmedium.variable} ${euclid.variable} ${apfel.variable} ${apfelmedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
