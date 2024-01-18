import Image from "next/image";

import styles from "./stores.module.scss";

import { SecondaryButton } from "components/Buttons";

import IlustrationStores from "../../assets/images/desktop/IlustrationStores.png";
import AndroidBrand from "../../assets/icons/AndroidBrand.svg";
import AppleBrand from "../../assets/icons/AppleBrand.svg";
import DevicesBrand from "../../assets/icons/DevicesBrand.svg";

export function Stores() {
  return (
    <div className={styles.stores} id="aplicativo">
      <div className={`${styles.container} container`}>
        <div className={`row align-items-center justify-content-between`}>
          <div className={`${styles.imageContainer} col-7`}>
            <Image
              src={IlustrationStores}
              className={styles.image}
              alt="Ilustração mostrando dois celulares"
            />
          </div>

          <div className={`${styles.content} col-5`}>
            <div className={styles.body}>
              <h1 className={styles.title}>
                É muito mais fácil <br /> gerenciar o seu loteamento pelo <br />
                Quadra A
              </h1>
            </div>

            <div className={`${styles.buttons} row align-items-center`}>
              <SecondaryButton
                Icon={AndroidBrand}
                className={`${styles.button} col`}
                href="/#"
                size="medium"
              >
                Android
              </SecondaryButton>

              <SecondaryButton
                Icon={AppleBrand}
                className={`${styles.button} col`}
                href="/#"
                size="medium"
              >
                IOS
              </SecondaryButton>

              <SecondaryButton
                Icon={DevicesBrand}
                className={`${styles.button} col`}
                href="/#"
                size="medium"
              >
                Web
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
