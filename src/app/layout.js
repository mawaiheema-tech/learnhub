
import "./globals.css";

export const metadata = {
  title: "LearnHub | Learn Without Limits",
  description:
    "Discover thoughtfully designed courses, master valuable skills, and build your future with LearnHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
