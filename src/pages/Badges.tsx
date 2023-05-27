import { FunctionComponent } from "react";
import styles from "./Badges.module.css";
const Badges: FunctionComponent = () => {
  return (
    <div className={styles.badges}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo29.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Badges</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/badges/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div
            className={styles.definition}
          >{`Badges are used to convey dynamic information, such as a count or status. A badge can include text, labels, or numbers. `}</div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.badge}>
            <div className={styles.sizesmall} />
            <div className={styles.sizelargeSingleDigit}>
              <div className={styles.badgeLabel}>3</div>
            </div>
            <div className={styles.sizemultipleDigits}>
              <div className={styles.badgeLabel1}>32</div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.badgeDark}>
            <div className={styles.sizesmall1} />
            <div className={styles.sizelargeSingleDigit1}>
              <div className={styles.badgeLabel}>3</div>
            </div>
            <div className={styles.sizemultipleDigits1}>
              <div className={styles.badgeLabel1}>32</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
