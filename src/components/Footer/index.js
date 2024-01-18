import styles from "./footer.module.scss";
import ArrowUp from "assets/icons/ArrowUp.svg";

import ScrollToTop from "utils/Footer/scrollToTop";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className="row align-items-start justify-content-between">
          <div className={`${styles.content} col-3`}>
            <h3 className={styles.title}>Informações</h3>
            <a className={styles.link} href={"/#politica_privacidade"}>
              Política de privacidade
            </a>
            <a className={styles.link} href={"/#termos_condicoes"}>
              Termos e condições
            </a>
          </div>

          <div className={`${styles.content} col-4`}>
            <h3 className={styles.title}>Contato</h3>
            <p className={styles.paragraph}> email: suporte@quadraa.com.br</p>
            <p className={styles.paragraph}>telefone: (00)00000-0000</p>
          </div>

          <div className={`${styles.link} col-2`}>
            <button className={styles.backToTop} onClick={() => ScrollToTop()}>
              <ArrowUp className={styles.icon} />
              <p className={styles.paragraph}>Voltar ao topo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
