import * as Yup from "yup";

export const RegisterUserSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "O nome precisa de no mínimo 2 caracteres!")
    .required("Este campo é obrigatório!"),

  dataDeNascimento: Yup.date()
    .max(new Date(), "A data limite é o do dia atual!")
    .required("Este campo é obrigatório!"),

  cpf: Yup.string()
    .min(14, "O CPF possui 11 dígitos!")
    .required("Este campo é obrigatório!"),

  email: Yup.string()
    .email("Digite um email válido!")
    .required("Este campo é obrigatório!"),

  telefone: Yup.string()
    .min(15, "O telefone possui 11 dígitos!")
    .required("Este campo é obrigatório!"),

  cep: Yup.string()
    .min(9, "O CEP possui 8 dígitos!")
    .max(9, "O CEP possui 8 dígitos!")
    .required("Este campo é obrigatório!"),

  bairro: Yup.string()
    .min(3, "Digite um bairro válido!")
    .required("Este campo é obrigatório!"),

  cidade: Yup.string()
    .min(3, "Digite uma cidade válida")
    .required("Este campo é obrigatório!"),

  complemento: Yup.string(),

  logradouro: Yup.string()
    .min(5, "Digite um bairro válido!")
    .required("Este campo é obrigatório!"),

  uf: Yup.string()
    .min(2, "Digite a UF corretamente!")
    .max(2, "Digite a UF corretamente!")
    .required("Este campo é obrigatório!"),
});
