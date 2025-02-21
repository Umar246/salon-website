import AboutSalon from "@/customer/components/HomeComponents/AboutSalon/AboutSalon";
import HeroCards from "@/customer/components/HomeComponents/HeroCards/HeroCards";
import HeroSection from "@/customer/components/HomeComponents/HeroSection/HeroSection";
import MarketingSection from "@/customer/components/HomeComponents/MarketingSection/MarketingSection";
import OnlineBooking from "@/customer/components/HomeComponents/OnlineBooking/OnlineBooking";
import ProvidersPage from "@/customer/components/HomeComponents/ProvidersPage/ProvidersPage";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <HeroCards />
        <AboutSalon />
        <OnlineBooking />
        <ProvidersPage />
        <MarketingSection />
      </main>
    </>
  );
}

export default Home;
