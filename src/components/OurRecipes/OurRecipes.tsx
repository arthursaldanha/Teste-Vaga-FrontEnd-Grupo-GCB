import { CardProduct } from "../CardProducts/CardProduct";
import { contentCardProduct } from "./contentCardProduct";

import "./styles.scss";

export const OurRecipes = () => {
  return (
    <section className="c-our-recipes" id="our-services">
      <h2>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts
      </p>
      <div className="c-cards-products">
        {contentCardProduct.map(({ text, image }) => {
          return <CardProduct key={text} text={text} image={image} />;
        })}
      </div>
    </section>
  );
};
