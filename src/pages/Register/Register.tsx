import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Components
import { RegisterNewUser, Footer } from "../../components/Index";

import "./styles.scss";

export function Register() {
  const navigate = useNavigate();

  return (
    <>
      <div className="register">
        <div
          className="c-arrow-back"
          onClick={() => {
            navigate("/");
          }}
        >
          <button>
            <BsArrowLeft className="arrow-back" />
            Voltar
          </button>
        </div>
        <main className="c-register-form">
          <RegisterNewUser />
        </main>
        <Footer />
      </div>
    </>
  );
}
