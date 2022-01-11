import "./styles.scss";
import image from "../../assets/images/bloco_final_image.svg";

export const SubscribeMembership = () => {
  return (
    <section className="subscribe-membership" id="join">
      <div className="subscribe-membership-content">
        <div className="c-subscribe-membership">
          <h2>Join our membership to get special offer</h2>
          <div>
            <input type="text" placeholder="Enter your email adress" />
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className="subscribe-image">
        <img src={image} alt="h" />
      </div>
    </section>
  );
};
