import { FunctionComponent } from "react";
import styles from "./Dividers.module.css";
const Dividers: FunctionComponent = () => {
  return (
    <div className={styles.dividers}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo14.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Dividers</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/divider/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            A divider is a thin line used to group content in lists and layouts.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.container}>
            <div className={styles.verticalmiddleInset}>
              <div className={styles.divider} />
            </div>
            <div className={styles.verticalinset}>
              <div className={styles.divider} />
            </div>
            <div className={styles.verticalfullWidth}>
              <div className={styles.divider} />
            </div>
            <div className={styles.horizontalwithSubhead}>
              <div className={styles.divider3} />
              <div className={styles.subheader}>Subheader</div>
            </div>
            <div className={styles.horizontalmiddleInset}>
              <div className={styles.divider3} />
            </div>
            <div className={styles.horizontalinset}>
              <div className={styles.divider3} />
            </div>
            <div className={styles.horizontalfullWidth}>
              <div className={styles.divider3} />
            </div>
            <div className={styles.label}>Horizontal</div>
            <div className={styles.label1}>Vertical</div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.container}>
            <div className={styles.verticalDarkmiddleInsetDar}>
              <div className={styles.divider7} />
            </div>
            <div className={styles.verticalDarkinsetDark}>
              <div className={styles.divider7} />
            </div>
            <div className={styles.verticalDarkfullWidthDark}>
              <div className={styles.divider7} />
            </div>
            <div className={styles.horizontalDarkwithSubheadD}>
              <div className={styles.divider10} />
              <div className={styles.subheader}>Subheader</div>
            </div>
            <div className={styles.horizontalDarkmiddleInsetD}>
              <div className={styles.divider10} />
            </div>
            <div className={styles.horizontalDarkinsetDark}>
              <div className={styles.divider10} />
            </div>
            <div className={styles.horizontalDarkfullWidthDar}>
              <div className={styles.divider10} />
            </div>
            <div className={styles.label}>Horizontal</div>
            <div className={styles.label3}>Vertical</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dividers;
