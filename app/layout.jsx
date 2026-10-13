import "./globals.css";

export const metadata = {
  title: "Stratix Digital Solutions FZ-LLC",
  description:
    "Software engineering, e-commerce and international student mobility — engineered from Ras Al Khaimah, UAE."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
