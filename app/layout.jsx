
import "@/assets/styles/globals.css";



export const metadata = {
  title: "Property Pulse",
  description: "Get the Best Property Rental in town",
  keywords:"Property as the Best Rental in The country"
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
