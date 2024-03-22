
import "@/assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export const metadata = {
  title: "Property Pulse",
  description: "Get the Best Property Rental in town",
  keywords:"Property as the Best Rental in The country"
};

export default function mainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
