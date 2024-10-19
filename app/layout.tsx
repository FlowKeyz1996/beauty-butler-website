import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



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
        className={`$${euclidsemibold.variable} ${euclidlight.variable} ${euclidmedium.variable} ${euclid.variable} ${apfel.variable} ${apfelmedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
