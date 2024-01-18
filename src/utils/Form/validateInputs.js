export const validateInputs = (userData) => {
  const errorsList = [
    {
      type: "name",
      message: "O campo nome é obrigatório",
      isInvalid: !userData.name,
    },
    {
      type: "email",
      message: "O campo e-mail é obrigatório.",
      isInvalid: !userData.email,
    },
    {
      type: "phone",
      message: "O campo telefone é obrigatório.",
      isInvalid: !userData.phone,
    },
  ];

  const error = errorsList.find((item) => item.isInvalid);
  return error;
};
