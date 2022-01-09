export function handleInputMask(name: string, event: any) {
  const {
    target: { value },
  } = event;

  const masks = {
    nome: (value: string) => value,
    email: (value: string) => value,
    dataDeNascimento: (value: string) => value,
    cpf: (value: string) =>
      value
        .replace(/\D+/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1"),
    telefone: (value: string) =>
      value
        .replace(/\D+/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})\d+?$/, "$1"),
    cep: (value: string) =>
      value
        .replace(/\D+/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1"),
    logradouro: (value: string) => value,
    complemento: (value: string) => value,
    bairro: (value: string) => value,
    cidade: (value: string) => value,
    uf: (value: string) => value,
  };

  return (event.target.value = masks[name](value));
}
