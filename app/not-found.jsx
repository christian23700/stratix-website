import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#0A1930] text-white font-sans">
        <div className="text-center px-6">
          <p className="text-sm tracking-widest text-[#00D4E5] uppercase mb-3">404</p>
          <h1 className="text-3xl font-semibold mb-4">Page not found</h1>
          <Link href="/en" className="inline-flex items-center rounded-full bg-[#00D4E5] px-6 py-3 text-sm font-semibold text-[#0A1930]">
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
