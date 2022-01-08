// Components
import { Header } from "./components/Header/Header";
import { BannerHome } from "./components/BannerHome/BannerHome";
import { OurRecipes } from "./components/OurRecipes/OurRecipes";
import { AboutServices } from "./components/AboutServices/AboutServices";
import { ReadOurBlog } from "./components/ReadBlog/ReadOutBlog";
import { OpenMenuProvider } from "./contexts/OpenSidebarMenu";

function App() {
  return (
    <div className="App">
      <OpenMenuProvider>
        <Header />
        <BannerHome />
        <OurRecipes />
        <AboutServices />
        <ReadOurBlog />
      </OpenMenuProvider>
    </div>
  );
}

export default App;
