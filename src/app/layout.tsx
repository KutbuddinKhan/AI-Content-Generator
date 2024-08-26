import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "The Creative AI Content Generator is an innovative tool designed to help users effortlessly create high-quality, engaging content for various purposes, including blogs, social media posts, marketing materials, and more. Powered by advanced artificial intelligence, this platform analyzes user inputs to generate well-structured, relevant, and creative content tailored to specific needs and preferences. Whether you're a professional writer, marketer, or simply someone looking for content ideas, the Creative AI Content Generator is your go-to solution for seamless content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
