import styles from "./features.module.scss";
import { Feature } from "./Feature";

import HandSelect from "assets/icons/HandSelect.svg";
import Check from "assets/icons/Check.svg";
import Pin from "assets/icons/Pin.svg";
import Devices from "assets/icons/Devices.svg";

export function Features() {
  return (
    <div className={`${styles.container} container-fluid`} id="beneficios">
      <ul className={`${styles.features} row align-self-center`}>
        <li className={`${styles.item} col`}>
          <Feature
            Icon={HandSelect}
            title={"Simples"}
            content={
              "Com um uso intuitivo, explore todas as funcionalidades de forma rápida e fácil"
            }
          />
        </li>

        <li className={`${styles.item} col`}>
          <Feature
            Icon={Check}
            title={"Completo"}
            content={"Desde a prospecção até a gestão de carteira"}
          />
        </li>

        <li className={`${styles.item} col`}>
          <Feature
            Icon={Pin}
            title={"Preciso"}
            content={
              "Funcionalidades direcionadas para cada tipo de usuário. Maximizando os resultados e minimizando perdas"
            }
          />
        </li>

        <li className={`${styles.item} col`}>
          <Feature
            Icon={Devices}
            title={"Multi - plataforma"}
            content={
              "Acesso em qualquer lugar, de qualquer forma - smartphone, computador e tablets"
            }
          />
        </li>
      </ul>
    </div>
  );
}
