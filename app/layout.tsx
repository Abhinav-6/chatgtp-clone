import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="w-full min-h-screen flex">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
