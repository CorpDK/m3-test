import { FunctionComponent } from "react";
import styles from "./BottomSheets.module.css";
const BottomSheets: FunctionComponent = () => {
  return (
    <div className={styles.bottomSheets}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo27.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Bottom sheets</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/bottom-sheets/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Bottom sheets are surfaces containing supplementary content,
            anchored to the bottom of the screen.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.bottomSheet}>
            <div className={styles.modaltrue}>
              <div className={styles.scrim} />
              <div className={styles.bottomSheet1}>
                <div className={styles.sheetHeader}>
                  <div className={styles.dragHandle} />
                </div>
              </div>
            </div>
            <div className={styles.modalfalse}>
              <div className={styles.bottomSheet2}>
                <div className={styles.sheetHeader}>
                  <div className={styles.dragHandle} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.bottomSheetDark}>
            <div className={styles.modaltrue1}>
              <div className={styles.scrim1} />
              <div className={styles.bottomSheet3}>
                <div className={styles.sheetHeader}>
                  <div className={styles.dragHandle2} />
                </div>
              </div>
            </div>
            <div className={styles.modalfalse1}>
              <div className={styles.bottomSheet4}>
                <div className={styles.sheetHeader}>
                  <div className={styles.dragHandle2} />
                </div>
              </div>
              <div className={styles.scrim2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheets;
