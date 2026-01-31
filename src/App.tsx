import './App.css';
import { TopBar } from './components/blocks/TopBar';
import { Header } from './components/blocks/Header';
import { HeroSection } from './components/blocks/HeroSection';
import { SmartphonesSection } from './components/blocks/SmartphonesSection';
import { CategoriesSection } from './components/blocks/CategoriesSection';
import { BrandsSection } from './components/blocks/BrandsSection';
import { EssentialsSection } from './components/blocks/EssentialsSection';
import { Footer } from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <SmartphonesSection />
        <CategoriesSection />
        <BrandsSection />
        <EssentialsSection />
      </main>
      <Footer />
    </div>
  );
}
