import styles from "./features.module.scss";

export function Feature({ Icon, title, content }) {
  return (
    <div className={styles.feature}>
      <div className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}
