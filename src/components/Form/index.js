import InputMask from "react-input-mask";
import { useState } from "react";

import { validateInputs } from "utils/Form/validateInputs";
import { mailer } from "api/sendEmail";

import { PrimaryButton } from "components/Buttons";

import styles from "./form.module.scss";
import { Success } from "modules/AlertModule/success";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    //verificação de erros
    const errors = validateInputs(data);

    if (errors) {
      setErrors(errors);
    } else {
      setErrors("");
    }

    if (!errors) {
      //toast
      Success();

      //enviando email
      //mailer(data);

      //limpando inputs
      /* setName("");
      setEmail("");
      setPhone("");
      setErrors({}); */
    }
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Conheça o Quadra A</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label htmlFor="name" className={styles.label}>
            Nome
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome completo"
          />
          {errors.type === "name" && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <div className={styles.item}>
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          {errors.type === "email" && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <div className={styles.item}>
          <label htmlFor="phone" className={styles.label}>
            Telefone
          </label>
          <InputMask
            className={styles.input}
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="(99) 99999-9999 "
            placeholder="Digite seu número de telefone"
          ></InputMask>
          {errors.type === "phone" && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>

        <PrimaryButton type="submit" size="large" className={styles.button}>
          Enviar
        </PrimaryButton>
      </form>
    </div>
  );
}
