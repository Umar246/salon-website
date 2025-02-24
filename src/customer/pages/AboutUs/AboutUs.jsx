import AboutGallery from "@/customer/components/AboutUsComponents/AboutGallery/AboutGallery";
import AboutUsHero from "@/customer/components/AboutUsComponents/AboutUsHero/AboutUsHero";
import Careers from "@/customer/components/AboutUsComponents/Careers/Careers";
import FreeTrial from "@/customer/components/AboutUsComponents/FreeTrial/FreeTrial";
import VisionSection from "@/customer/components/AboutUsComponents/VisionSection/VisionSection";
import WhereWeAre from "@/customer/components/AboutUsComponents/WhereWeAre/WhereWeAre";

export default function AboutUs() {
  return (
    <>
    <AboutUsHero/>
    <AboutGallery/>
    <VisionSection/>
    <WhereWeAre/>
    <Careers/>
    <FreeTrial/>
    </>
  )
}
