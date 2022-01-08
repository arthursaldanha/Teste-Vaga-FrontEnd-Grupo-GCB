import { GoSearch } from "react-icons/go";
import "./styles.scss";
import image from "../../assets/images/Illustration.svg";

export const BannerHome = () => {
  return (
    <section className="banner-home">
      <div className="banner-content">
        <div className="c-banner-content">
          <h2>Ready for trying a new recipe?</h2>
          <div>
            <input type="text" placeholder="Search healthy recipes" />
            <button>
              <GoSearch color="#fff" className="magnifier-search" />
            </button>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src={image} alt="h" />
      </div>
    </section>
  );
};
