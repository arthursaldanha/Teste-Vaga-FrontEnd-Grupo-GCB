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
      <Header onRegister={false} />
      <BannerHome />
      <OurRecipes />
      <AboutServices />
      <ReadOurBlog />
      <SubscribeMembership />
      <Footer />
    </>
  );
}
