import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Components
import { Header, RegisterNewUser, Footer } from "../../components/Index";

import "./styles.scss";

export function Register() {
  const navigate = useNavigate();

  return (
    <>
      <div className="register">
        {/* <Header onRegister={true} /> */}
        <main className="c-register-form">
          <section className="content-register-page">
            <div
              className="c-arrow-back"
              onClick={() => {
                navigate(-1);
              }}
            >
              <button>
                <BsArrowLeft className="arrow-back" />
                Voltar
              </button>
            </div>
            <h1>Sign Up</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia
            </p>
          </section>

          <section className="form-register-page">
            <RegisterNewUser />
          </section>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
