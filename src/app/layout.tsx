import { bodyFont, headingFont } from "@/app/fonts";
import "./globals.css";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
