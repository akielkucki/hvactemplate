import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jeff Bass Plumbing | Expert Residential & Commercial Plumbing Services",
    description:
        "Jeff Bass Plumbing provides expert residential and commercial plumbing services — from leak repairs to full system installations. Reliable, fast, and professional plumbing done right the first time.",
    keywords: [
        "Jeff Bass Plumbing",
        "Plumbing Services",
        "Leak Repair",
        "Drain Cleaning",
        "Water Heater Installation",
        "Emergency Plumbing",
        "Residential Plumbing",
        "Commercial Plumbing",
    ],
    openGraph: {
        title: "Jeff Bass Plumbing | Trusted Local Plumbing Experts",
        description:
            "Get reliable plumbing solutions from Jeff Bass Plumbing — your trusted professionals for residential and commercial plumbing needs.",
        url: "https://www.jeffbassplumbing.com",
        siteName: "Jeff Bass Plumbing",
        images: [
            {
                url: "/static/logo/img.png",
                width: 1200,
                height: 630,
                alt: "Jeff Bass Plumbing Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jeff Bass Plumbing | Expert Residential & Commercial Services",
        description:
            "Professional plumbing done right — fast, reliable, and affordable. Jeff Bass Plumbing handles everything from leaks to installations.",
        images: ["/static/logo/img.png"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://www.jeffbassplumbing.com"),
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
