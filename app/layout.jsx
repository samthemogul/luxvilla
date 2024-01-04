import { Inter, IBM_Plex_Serif } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "500",
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
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
