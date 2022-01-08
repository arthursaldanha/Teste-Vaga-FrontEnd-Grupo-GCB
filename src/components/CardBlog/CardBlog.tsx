import "./styles.scss";

interface CardBlogProps {
  cardImage: string;
  text: string;
  author: string;
  authorImage: string;
}

export const CardBlog = ({
  cardImage,
  text,
  author,
  authorImage,
}: CardBlogProps) => {
  return (
    <div className="card-blog">
      <div className="c-card-blog">
        <div className="card-blog-image">
          <img src={cardImage} alt="Imagem do Card de Blog" />
        </div>
        <div className="card-blog-content">
          <h3>{text}</h3>
          <div className="c-card-author">
            <img src={authorImage} alt="Imagem do autor" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
