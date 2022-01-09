import * as Yup from "yup";

export const RegisterUserSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "O nome precisa de no mínimo 2 caracteres!")
    .required("Este campo é obrigatório!"),

  dataDeNascimento: Yup.date()
    .max(new Date(), "A data limite é a do dia atual!")
    .required("Required"),

  cpf: Yup.string().max(14).required("Este campo é obrigatório!"),

  email: Yup.string()
    .email("Digite um email válido!")
    .required("Este campo é obrigatório!"),

  telefone: Yup.string().max(15).required("Este campo é obrigatório!"),

  cep: Yup.string().max(9).required("Este campo é obrigatório!"),

  bairro: Yup.string()
    .min(2, "Digite um bairro com no mínimo 2 caracteres")
    .required("Este campo é obrigatório!"),

  cidade: Yup.string()
    .min(2, "Digite um bairro com no mínimo 2 caracteres")
    .required("Este campo é obrigatório!"),

  complemento: Yup.string(),

  logradouro: Yup.string()
    .min(2, "Digite um bairro com no mínimo 2 caracteres")
    .required("Este campo é obrigatório!"),

  uf: Yup.string()
    .min(2, "Digite a UF corretamente")
    .max(2, "Digite a UF corretamente")
    .required("Este campo é obrigatório!"),
});
