import { CardProduct } from "../CardProducts/CardProduct";
import "./styles.scss";

// Images
import firstImage from "../../assets/images/comida_1.svg";
import secondImage from "../../assets/images/comida_2.svg";
import thirdImage from "../../assets/images/comida_3.svg";
import fourthImage from "../../assets/images/comida_4.svg";

export const OurRecipes = () => {
  return (
    <section className="c-our-recipes">
      <h2>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts
      </p>
      <div className="c-cards-products">
        <CardProduct text="Broccoli Salad With Bacon" image={firstImage} />
        <CardProduct text="Classic Beef Burgers" image={secondImage} />
        <CardProduct text="Classic Potato Salad" image={thirdImage} />
        <CardProduct text="Cherry Cobbler on the Grill" image={fourthImage} />
      </div>
    </section>
  );
};
