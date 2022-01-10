import axios from "axios";
import { Formik, Form, FormikHelpers } from "formik";
import { RegisterUserSchema } from "./SchemaYup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Components
import { Input, Row } from "../Index";

import "./styles.scss";

interface RegisterUser {
  nome: string;
  dataDeNascimento: string;
  cpf: string;
  email: string;
  telefone: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export const RegisterNewUser = () => {
  const navigate = useNavigate();
  async function getCEP(event, setFieldValue: Function) {
    const { value } = event.target;

    const CEP = value?.replace(/[^0-9]/g, "");

    if (CEP?.length !== 8) {
      return;
    }

    const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json`);
    const { logradouro, bairro, localidade, uf } = response.data;

    setFieldValue("logradouro", logradouro);
    setFieldValue("bairro", bairro);
    setFieldValue("cidade", localidade);
    setFieldValue("uf", uf);
  }

  return (
    <div className="form-new-user">
      <h2>Preencha os campos abaixo com seus dados</h2>
      <Formik
        initialValues={{
          nome: "",
          dataDeNascimento: "",
          cpf: "",
          email: "",
          telefone: "",
          cep: "",
          bairro: "",
          cidade: "",
          complemento: "",
          logradouro: "",
          uf: "",
        }}
        validationSchema={RegisterUserSchema}
        onSubmit={(
          values: RegisterUser,
          { setSubmitting, resetForm }: FormikHelpers<RegisterUser>
        ) => {
          // localStorage
          let userLocalStorage = JSON.parse(
            localStorage.getItem("userLS") || "[]"
          );
          userLocalStorage.push(values);
          localStorage.setItem("user", JSON.stringify(userLocalStorage));

          // cookies
          Cookies.set("userCok", JSON.stringify(values));
          console.log(Cookies.get("userCok"));

          toast.success(
            "Usuário criado com suscesso! Em instantes, você será redirecionado para a página inicial!",
            {
              position: "bottom-right",
              autoClose: 5000,
              theme: "colored",
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );

          setTimeout(() => {
            setSubmitting(false);
            navigate("/");
            resetForm();
          }, 5000);
        }}
        render={({ errors, touched, setFieldValue }) => (
          <Form>
            <Row justify="flex-start" align="start">
              <Input
                label="Nome completo:"
                name="nome"
                type="text"
                placeholder="Ex. João Guilherme de Araújo"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
            </Row>
            <Row justify="flex-start" align="start">
              <Input
                label="Email:"
                name="email"
                type="text"
                placeholder="exemplo@exemplo.com"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
            </Row>
            <Row justify="flex-start" align="start">
              <Input
                label="CPF:"
                name="cpf"
                type="text"
                placeholder="Ex. 616.289.880-61"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Data de Nascimento:"
                name="dataDeNascimento"
                type="date"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
            </Row>
            <Row justify="flex-start" align="start">
              <Input
                label="Telefone:"
                name="telefone"
                type="text"
                placeholder="Ex. (11) 91234-5678"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
              <Input
                label="CEP:"
                name="cep"
                type="text"
                placeholder="Ex. 12345-678"
                width={100}
                autoComplete="off"
                onBlur={(event) => getCEP(event, setFieldValue)}
                errors={errors}
                touched={touched}
              />
            </Row>
            <Row justify="flex-start" align="start">
              <Input
                label="Logradouro:"
                name="logradouro"
                type="text"
                placeholder="Ex. Rua Pedro Abreu de Souza"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
            </Row>
            <Row justify="flex-start" align="start">
              <Input
                label="Complemento:"
                name="complemento"
                type="text"
                placeholder="Ex. Casa, apartamento, flat..."
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
              <Input
                label="Bairro:"
                name="bairro"
                type="text"
                placeholder="Ex. Ibirapuera"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
            </Row>
            <Row justify="flex-start" align="start">
              <Input
                label="Cidade:"
                name="cidade"
                type="text"
                placeholder="Ex. São Paulo"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
              <Input
                label="UF:"
                name="uf"
                type="text"
                placeholder="Ex. SP"
                width={100}
                autoComplete="off"
                errors={errors}
                touched={touched}
              />
            </Row>

            <Row justify="center" align="center">
              <button type="submit">Submit</button>
            </Row>
          </Form>
        )}
      />
    </div>
  );
};
