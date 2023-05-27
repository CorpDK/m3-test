import { FunctionComponent } from "react";
import styles from "./ProgressIndicators.module.css";
const ProgressIndicators: FunctionComponent = () => {
  return (
    <div className={styles.progressIndicators}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo7.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Progress indicators</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/progress-indicators/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Progress indicators inform users about the status of ongoing
            processes, such as loading an app, submitting a form, or saving
            updates. They communicate an app’s state and indicate available
            actions, such as whether users can navigate away from the current
            screen.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.linearProgressIndicator}>
            <div className={styles.progresscustomAdvanced}>
              <div className={styles.progressBar} />
            </div>
            <div className={styles.progresscustomAdvanced}>
              <div className={styles.progressBar1} />
            </div>
            <div className={styles.progresscustomAdvanced}>
              <div className={styles.progressBar2} />
            </div>
            <div className={styles.progresscustomAdvanced}>
              <div className={styles.progressBar3} />
            </div>
            <div className={styles.progresscustomAdvanced}>
              <div className={styles.progressBar4}>
                <div className={styles.pixel} />
              </div>
            </div>
          </div>
          <div className={styles.circularProgressIndicator}>
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress25.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress50.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress75.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress100.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progresscustom-advanced.svg"
            />
          </div>
        </div>
        <div className={styles.lightScheme}>
          <div className={styles.linearProgressIndicatorDark}>
            <div className={styles.progress251}>
              <div className={styles.progressBar5} />
            </div>
            <div className={styles.progress251}>
              <div className={styles.progressBar6} />
            </div>
            <div className={styles.progress251}>
              <div className={styles.progressBar7} />
            </div>
            <div className={styles.progress251}>
              <div className={styles.progressBar8} />
            </div>
            <div className={styles.progress251}>
              <div className={styles.progressBar9}>
                <div className={styles.pixel} />
              </div>
            </div>
          </div>
          <div className={styles.circularProgressIndicatorDa}>
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress251.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress501.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress751.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progress1001.svg"
            />
            <img
              className={styles.progress25Icon}
              alt=""
              src="/progresscustom-advanced1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicators;
