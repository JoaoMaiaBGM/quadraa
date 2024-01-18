import Image from "next/image";
import Link from "next/link";

import styles from "./hero.module.scss";
import IlustrationHero from "assets/images/desktop/IlustrationHero.png";
import { PrimaryButton } from "components/Buttons";

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={`row align-items-center justify-content-start}`}>
          <div className={`${styles.content} col-5`}>
            <div className={styles.body}>
              <h1 className={styles.title}>
                Simplificando a venda e a gestão de loteamentos
              </h1>
              <Link href="/contact">
                <PrimaryButton size="large">Adquira já</PrimaryButton>
              </Link>
            </div>
          </div>

          <div className="col-7">
            <Image
              src={IlustrationHero}
              className={styles.image}
              alt="Ilustração mostrando partes de duas telas de computador com programas abertos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
