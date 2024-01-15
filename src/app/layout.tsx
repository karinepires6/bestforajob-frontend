import "./globals.css";
import { inter } from "@/app/ui/fonts";
import { ReactQueryProvider } from "./lib/providers/react-query";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
