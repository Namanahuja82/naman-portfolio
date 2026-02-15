import "./globals.css";

export const metadata = {
  title: "Naman Ahuja | Product Engineer",
  description: "I build production SaaS and AI products for startup founders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
