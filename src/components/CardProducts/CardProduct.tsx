import "./styles.scss";

interface CardProductProps {
  text: string;
  image: string;
}

export const CardProduct = ({ text, image }: CardProductProps) => {
  return (
    <div className="card-product">
      <div>
        <img src={image} alt="Food" />
      </div>
      <div>
        <h3>{text}</h3>
        <button>See Recipe</button>
      </div>
    </div>
  );
};
