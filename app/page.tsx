import BlogSections from "@/components/sections/BlogSections";
import CategoriesSection from "@/components/sections/CategoriesSection";
import HeroSection from "@/components/sections/HeroSection";
import NeedHelpSection from "@/components/sections/NeedHelpSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

const HomePage = async () => {
  return (
    <div className="xl:px-16 lg:px-12 md:px-8 px-4">
      <HeroSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <NeedHelpSection />
      <BlogSections />
      <NewsLetterSection />
    </div>
  );
};

export default HomePage;
