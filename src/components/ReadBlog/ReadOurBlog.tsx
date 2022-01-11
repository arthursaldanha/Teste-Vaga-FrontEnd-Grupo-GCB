import { useRef } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

//Components
import { CardBlog } from "../CardBlog/CardBlog";
import { dataCardsBlog } from "./dataCardsBlog";

import "./styles.scss";

export const ReadOurBlog = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section className="c-our-blog" id="read-blog">
      <h2>Read Our Blog</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts
      </p>
      <div className="cards-blogs">
        <div className="c-cards-blog" ref={carousel}>
          {dataCardsBlog.map(
            ({ cardImage, cardText, authorImage, authorPhost }, index) => {
              return (
                <CardBlog
                  key={index}
                  cardImage={cardImage}
                  text={cardText}
                  authorImage={authorImage}
                  author={authorPhost}
                />
              );
            }
          )}
        </div>
        <div className="c-arrow arrow-left" onClick={handleLeftClick}>
          <BsArrowLeft color="#8ed062" className="arrow" />
        </div>
        <div className="c-arrow arrow-right" onClick={handleRightClick}>
          <BsArrowRight color="#8ed062" className="arrow arrow-right" />
        </div>
      </div>
    </section>
  );
};
