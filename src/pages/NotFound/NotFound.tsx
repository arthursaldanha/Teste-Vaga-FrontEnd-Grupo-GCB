import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-404">
        <div
          className="c-arrow-back"
          onClick={() => {
            navigate("/");
          }}
        >
          <button>
            <BsArrowLeft className="arrow-back" />
            Página Inicial
          </button>
        </div>
        <div className="content">
          <div>
            <h1>Página não encontrada 😞</h1>
            <h1>Lamentamos o ocorrido.</h1>
          </div>
        </div>
      </div>
    </>
  );
}
