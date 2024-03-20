
import "@/assets/styles/globals.css";
import Navbar from "../components/Navbar";



export const metadata = {
  title: "Property Pulse",
  description: "Get the Best Property Rental in town",
  keywords:"Property as the Best Rental in The country"
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
