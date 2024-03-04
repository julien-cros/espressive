import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PenkleAnalytics } from "../components/PenkleAnalytics";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://espressive.fr"),
  title: "Espressive",
  description: "A blog for the world of espresso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
			<head>
				<PenkleAnalytics domain="koffy.app" />
			</head>
      <body className={poppins.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
