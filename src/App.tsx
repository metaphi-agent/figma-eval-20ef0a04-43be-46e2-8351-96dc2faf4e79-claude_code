import TopBar from './components/blocks/TopBar';
import Header from './components/blocks/Header';
import CategoryNav from './components/blocks/CategoryNav';
import HeroSection from './components/blocks/HeroSection';
import SmartphonesSection from './components/blocks/SmartphonesSection';
import TopCategoriesSection from './components/blocks/TopCategoriesSection';
import TopBrandsSection from './components/blocks/TopBrandsSection';
import DailyEssentialsSection from './components/blocks/DailyEssentialsSection';
import Footer from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <CategoryNav />
      <main>
        <HeroSection />
        <SmartphonesSection />
        <TopCategoriesSection />
        <TopBrandsSection />
        <DailyEssentialsSection />
      </main>
      <Footer />
    </div>
  );
}
