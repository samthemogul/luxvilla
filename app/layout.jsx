import { Inter, IBM_Plex_Serif} from "next/font/google";
import "@styles/globals.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Header from "@components/Header";
import Footer from "@components/Footer";
import SideBar from "@components/SideBar";
import SidePopup from "@containers/dashboard/SidePopups/SidePopup";
import CenterPopup from "@containers/dashboard/CenterPopups/CenterPopup";
import ScrollToTop from "@components/ScrollToTop";
import StoreProvider from "@redux/store/StoreProvider";
import { NotificationProvider } from "@context/NotificationContext";
import { ProfileProvider } from "@context/ProfileContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";


config.autoAddCss = false;



const interFont = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", '600'], 
  variable: "--font-inter",
});
const ibmPlexSerifFont = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm",
});

export const metadata = {
  title: "Luxvilla | Find Your Ideal Home",
  description:
    "Discover unparalleled luxury and comfort living with the Luxvilla app – your gateway to exclusive real estate experiences. Browse opulent homes, villas, and estates, meticulously curated for the discerning individual. Immerse yourself in stunning visuals, detailed property insights, and seamless navigation. From dreamy beachfront retreats to urban sanctuaries, Luxvilla offers a handpicked collection of the world's most prestigious properties. Elevate your lifestyle with our user-friendly interface, expertly designed to make your property search a delightful journey. Download the Luxvilla app now and embark on a sophisticated exploration of the finest residences, where luxury meets innovation.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      
      <body className={`${interFont.variable} ${ibmPlexSerifFont.variable}`}>
        <StoreProvider>
        <SidePopup />
        <CenterPopup />
        <ProfileProvider><NotificationProvider><Header /></NotificationProvider></ProfileProvider>
          
          <SideBar />
          {children}
          <ScrollToTop />
          <Footer />
          </StoreProvider>
      </body>
    </html>
  );
}
