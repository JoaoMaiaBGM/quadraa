import Link from "next/link";
import { useState } from "react";
import { RiUser3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../Logo";

import { PrimaryButton, SecondaryButton } from "components/Buttons";
import { BaseHeader } from "./BaseHeader";

import styles from "./header.module.scss";
import theme from "../../styles/theme";

export function Header({ size, dark }) {
  const [active, setActive] = useState(false);

  return (
    <BaseHeader size={size} dark={dark}>
      {dark === "active" ? (
        <>
          <Link className="col-2" href={"/"}>
            <Logo
              className={styles.logo}
              textColor={theme.logoColors.white}
              iconColor={theme.logoColors.primary}
              alt="logo do Quadra A"
            />
          </Link>

          <SecondaryButton
            className={`${styles.button} col-2`}
            size="medium"
            Icon={RiUser3Line}
          >
            Acessar
          </SecondaryButton>
        </>
      ) : (
        <>
          <Link className="col-2" href={"/"}>
            <Logo
              textColor={theme.logoColors.blueDark}
              iconColor={theme.logoColors.primary}
              alt="logo do Quadra A"
            />
          </Link>

          <nav className={`${styles.nav} col-9`} id="nav">
            <RxHamburgerMenu
              className={styles.hamburguerIcon}
              onClick={() => setActive(!active)}
            />

            <ul className={active ? styles.navbarActive : styles.navbar}>
              <li>
                <a className={styles.navbarItem} href={"/#beneficios"}>
                  Benefícios
                </a>
              </li>

              <li>
                <a className={styles.navbarItem} href={"/#aplicativo"}>
                  Aplicativo
                </a>
              </li>

              <li>
                <a
                  className={styles.navbarItem}
                  href={"/#perguntas_frequentes"}
                >
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <SecondaryButton Icon={RiUser3Line}>Acessar</SecondaryButton>
              </li>
              <li>
                <Link href="/contact">
                  <PrimaryButton>Entrar em contato</PrimaryButton>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </BaseHeader>
  );
}
