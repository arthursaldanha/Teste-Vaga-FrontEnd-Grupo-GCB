import "./styles.scss";
import image from "../../assets/images/bloco_services.svg";

export const AboutServices = () => {
  return (
    <section className="about-services">
      <div className="c-image-about">
        <img src={image} alt="About services" />
      </div>
      <div className="c-about-content">
        <div className="c-content">
          <div>
            <h3>The best services ready</h3>
            <h3>To serve you</h3>
          </div>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button>Know More</button>
        </div>
      </div>
    </section>
  );
};
