import Link from "next/link";

import styles from "./salesManagement.module.scss";
import ArrowRight from "assets/icons/ArrowRigth.svg";

export function SalesManagement() {
  return (
    <div className={styles.sales}>
      <div className={`${styles.container} container`}>
        <div className={`row align-items-center justify-content-end`}>
          <div className={`${styles.content} col-5`}>
            <div className={styles.body}>
              <h1 className={styles.title}>Gestão de vendas</h1>

              <p className={styles.paragraph}>
                Permita que a sua força de venda comercialize os imóveis através
                do aplicativo celular, tablet ou Web, e tenha o controle de todo
                o processo <br /> em tempo real
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
