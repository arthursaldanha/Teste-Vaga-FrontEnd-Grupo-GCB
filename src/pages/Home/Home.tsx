import { BsArrowUp } from "react-icons/bs";
import { useHome } from "../../contexts/OpenSidebarMenu";
import {
  Header,
  BannerHome,
  OurRecipes,
  AboutServices,
  ReadOurBlog,
  SubscribeMembership,
  Footer,
} from "../../components/Index";

import "./styles.scss";

export function Home() {
  const { isScrollToTopActive, handleClickedScrollToTop } = useHome();

  return (
    <>
      <Header onRegister={false} />
      <BannerHome />
      <OurRecipes />
      <AboutServices />
      <ReadOurBlog />
      <SubscribeMembership />
      <Footer />
      {isScrollToTopActive && (
        <div className="button-scroll-to-top">
          <button onClick={handleClickedScrollToTop}>
            <BsArrowUp color="#fff" className="button-fixed-scroll-to-top" />
          </button>
        </div>
      )}
    </>
  );
}
