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
        className={`${bodyFont.variable} ${headingFont.variable} relative mx-auto flex min-h-screen w-full max-w-screen-mobile flex-col font-sans text-lg text-neutral-900 desktop:max-w-screen-desktop`}
      >
        {children}
      </body>
    </html>
  );
}
