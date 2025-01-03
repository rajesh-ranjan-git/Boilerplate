import "./globals.css";

export const metadata = {
  title: "Boilerplate Next + React + JS",
  description: "This is boilerplate code for Next + React + JS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
