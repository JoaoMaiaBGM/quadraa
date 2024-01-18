import Link from "next/link";

import styles from "./portfolioManagement.module.scss";
import ArrowRight from "assets/icons/ArrowRigth.svg";

export function PortfolioManagement() {
  return (
    <div className={styles.portfolio}>
      <div className={`${styles.container} container`}>
        <div className={`row align-items-center justify-content-start`}>
          <div className={`${styles.content} col-5`}>
            <div className={styles.body}>
              <h1 className={styles.title}>Controle de carteira</h1>

              <p className={styles.paragraph}>
                Monitore e acompanhe seus <br /> contratos e títulos.
              </p>
            </div>

            <div className={`${styles.linkContainer} col`}>
              <Link className={styles.link} href="/contact">
                Adquira já
              </Link>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
