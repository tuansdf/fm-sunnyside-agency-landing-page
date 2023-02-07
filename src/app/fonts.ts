import { Barlow, Fraunces } from "@next/font/google";

export const bodyFont = Barlow({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-body",
});

export const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});
