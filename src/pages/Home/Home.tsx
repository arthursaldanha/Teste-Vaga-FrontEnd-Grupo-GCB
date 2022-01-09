import {
  Header,
  BannerHome,
  OurRecipes,
  AboutServices,
  ReadOurBlog,
  SubscribeMembership,
  Footer,
} from "../../components/Index";

export function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <OurRecipes />
      <AboutServices />
      <ReadOurBlog />
      <SubscribeMembership />
      <Footer />
    </>
  );
}
