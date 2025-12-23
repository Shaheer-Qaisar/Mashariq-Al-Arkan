import Navbar from "@/components/website/Navbar";
import ThemeRegistry from "@/components/ThemeRegistry";
import Footer from "@/components/website/Footer";

export default function WebsiteLayout({ children }) {
    return (
   
    <>
     <Navbar/>
        {children}
        <Footer/>
    </>
    );
  }
  