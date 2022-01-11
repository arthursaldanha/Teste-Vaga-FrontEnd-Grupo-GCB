import axios from "axios";

export async function getCEP(event, setFieldValue: Function) {
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
