import { bodyFont, headingFont } from "@/app/fonts";
import { ReactNode } from "react";
import "./globals.css";

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${bodyFont.variable} ${headingFont.variable} flex min-h-screen flex-col font-sans text-lg text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
