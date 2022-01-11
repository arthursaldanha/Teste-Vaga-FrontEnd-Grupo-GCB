import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Components
import { RegisterNewUser } from "../../components/Index";

import "./styles.scss";

export function Register() {
  const navigate = useNavigate();

  return (
    <>
      <div className="register">
        <main className="c-register-form">
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
          <section className="content-register-page">
            <h1>Sign Up</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              nihil, incidunt laboriosam repudiandae a suscipit totam delectus
              inventore reprehenderit sapiente dolor eaque aperiam dolores non
              fugiat facilis quisquam praesentium mollitia? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Doloribus, vitae illum,
              illo, accusamus omnis quisquam tempora optio officiis ducimus
              nihil facere. Saepe dolorem cumque blanditiis nostrum sequi fuga
              natus aliquid!
            </p>
          </section>

          <section className="form-register-page">
            <RegisterNewUser />
          </section>
        </main>
      </div>
    </>
  );
}
