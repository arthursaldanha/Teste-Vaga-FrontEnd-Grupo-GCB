import axios from "axios";
import { Formik, Form, FormikHelpers } from "formik";
import { RegisterUserSchema } from "./SchemaYup";

// Components
import { Input } from "../InputRegister/Input";

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
    <div>
      <h1>Signup</h1>
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
          { setSubmitting }: FormikHelpers<RegisterUser>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        render={({ errors, touched, isValid, setFieldValue }) => (
          <Form>
            <Input
              label="Nome completo:"
              name="nome"
              type="text"
              placeholder="Seu nome completo"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Data de Nascimento:"
              name="dataDeNascimento"
              type="date"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="CPF:"
              name="cpf"
              type="text"
              placeholder="Seu CPF"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Email:"
              name="email"
              type="text"
              placeholder="Seu email"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Telefone:"
              name="telefone"
              type="text"
              placeholder="Seu telefone"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="CEP:"
              name="cep"
              type="text"
              placeholder="Seu CEP"
              width={100}
              onBlur={(event) => getCEP(event, setFieldValue)}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Logradouro:"
              name="logradouro"
              type="text"
              placeholder="Seu logradouro"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Complemento:"
              name="complemento"
              type="text"
              placeholder="Casa, apartamento, flat..."
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Bairro:"
              name="bairro"
              type="text"
              placeholder="Bairro onde mora"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="Cidade:"
              name="cidade"
              type="text"
              placeholder="Cidade onde mora"
              width={100}
              errors={errors}
              touched={touched}
            />
            <Input
              label="UF:"
              name="uf"
              type="text"
              placeholder="Digite a UF de sua cidade!"
              width={100}
              errors={errors}
              touched={touched}
            />
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      />
    </div>
  );
};
