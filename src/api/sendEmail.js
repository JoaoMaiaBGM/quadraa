import { createTransport } from "nodemailer";

export const mailer = async (formData) => {
  const transporter = createTransport({
    service: "Gmail",
    auth: {
      user: "joaocarlosbgm@gmail.com",
      pass: "jbarrosj87",
    },
  });

  try {
    await transporter.sendMail({
      from: formData.email,
      to: "joaocarlosbgm@gmail.com",
      subject: "Novo formulário de contato",
      text: `
      Nome do usuário: ${formData.name}
      E-mail: ${formData.email}
      Telefone para contato: ${formData.phone}
    `,
    });

    console.log("E-mail enviado com sucesso");
  } catch (err) {
    console.error(err);
    throw new Error("Erro ao enviar e-mail, tente novamente!");
  }
};
