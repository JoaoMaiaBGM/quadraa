import Link from "next/link";

import { Form } from "components/Form";

import styles from "./contactInformation.module.scss";

import Mail from "assets/icons/Mail.svg";
import ArrowLeft from "assets/icons/ArrowLeft.svg";

export function ContactInformation() {
  return (
    <div className={styles.contactInformation}>
      <div className={`${styles.container} container`}>
        <div className="row justify-content-between">
          <div className={`${styles.content} col-6`}>
            <Link className={styles.link} href="/">
              <ArrowLeft />
              voltar
            </Link>
            <h1 className={`${styles.title}`}>
              Adquira a sua ferramenta completa de gestão de loteamento
            </h1>
            <p className={`${styles.paragraph}`}>
              Tem interesse em adquirir o Quadra A? Preencha o formulário ao
              lado:
            </p>

            <div className={`${styles.contact}`}>
              <div className="icon">
                <Mail />
              </div>

              <div className="row">
                <label className={styles.label} htmlFor="contact">
                  Email
                </label>
                <span className={`${styles.contactText}`}>
                  contato@quadraa.com.br
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.form} col-5`}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
