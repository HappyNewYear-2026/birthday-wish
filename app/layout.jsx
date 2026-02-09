import "./globals.css";
import StarryBackground from "../components/StarryBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StarryBackground />
        {children}
      </body>
    </html>
  );
}
