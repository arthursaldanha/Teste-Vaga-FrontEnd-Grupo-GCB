// Components
import { Header } from "./components/Header/Header";
import { BannerHome } from "./components/BannerHome/BannerHome";
import { OurRecipes } from "./components/OurRecipes/OurRecipes";
import { AboutServices } from "./components/AboutServices/AboutServices";
import { ReadOurBlog } from "./components/ReadBlog/ReadOutBlog";
import { OpenMenuProvider } from "./contexts/OpenSidebarMenu";
import { SubscribeMembership } from "./components/SubscribeMermership/BannerHome";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <OpenMenuProvider>
        <Header />
      </OpenMenuProvider>
      <BannerHome />
      <OurRecipes />
      <AboutServices />
      <ReadOurBlog />
      <SubscribeMembership />
      <Footer />
    </div>
  );
}

export default App;
