import Link from "next/link";

import styles from "./banner.module.scss";
import { PrimaryButton } from "components/Buttons";
import Logo from "../Logo";

import theme from "../../styles/theme";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.container} container`}>
        <div className="row align-items-center justify-content-center">
          <div className={`${styles.content} col-7`}>
            <div className={styles.body}>
              <Logo
                className={styles.image}
                textColor={theme.logoColors.white}
                iconColor={theme.logoColors.primary}
              />

              <div className={styles.title}>
                O melhor jeito de cuidar do seu negócio imobiliário
              </div>
            </div>

            <Link className={`${styles.link} col-5`} href="/contact">
              <PrimaryButton className={styles.button} size="large">
                Adquira já
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
