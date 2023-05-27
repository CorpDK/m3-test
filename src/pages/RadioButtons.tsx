import { FunctionComponent } from "react";
import styles from "./RadioButtons.module.css";
const RadioButtons: FunctionComponent = () => {
  return (
    <div className={styles.radioButtons}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo9.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Radio buttons</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/radio-button/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Radio buttons allow users to select one option from a set. They’re a
            selection control that often appears when users are asked to make
            decisions or select a choice from options.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.radioButtons1}>
            <div className={styles.selectedfalseStatedisabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon} alt="" src="/icon28.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStatepressed}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img className={styles.icon1} alt="" src="/icon29.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStatefocused}>
              <div className={styles.container}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon29.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStatehovered}>
              <div className={styles.container}>
                <div className={styles.stateLayer3}>
                  <img className={styles.icon1} alt="" src="/icon29.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStateenabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon1} alt="" src="/icon30.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatedisabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon} alt="" src="/icon31.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatepressed}>
              <div className={styles.container}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon32.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatefocused}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img className={styles.icon1} alt="" src="/icon32.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatehovered}>
              <div className={styles.container}>
                <div className={styles.stateLayer8}>
                  <img className={styles.icon1} alt="" src="/icon32.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStateenabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon1} alt="" src="/icon32.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.radioButtonsDark}>
            <div className={styles.selectedfalseStatedisabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon} alt="" src="/icon33.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStatepressed}>
              <div className={styles.container}>
                <div className={styles.stateLayer11}>
                  <img className={styles.icon1} alt="" src="/icon34.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStatefocused}>
              <div className={styles.container}>
                <div className={styles.stateLayer12}>
                  <img className={styles.icon1} alt="" src="/icon34.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStatehovered}>
              <div className={styles.container}>
                <div className={styles.stateLayer13}>
                  <img className={styles.icon1} alt="" src="/icon34.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedfalseStateenabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon1} alt="" src="/icon35.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatedisabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon} alt="" src="/icon36.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatepressed}>
              <div className={styles.container}>
                <div className={styles.stateLayer12}>
                  <img className={styles.icon1} alt="" src="/icon37.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatefocused}>
              <div className={styles.container}>
                <div className={styles.stateLayer11}>
                  <img className={styles.icon1} alt="" src="/icon37.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStatehovered}>
              <div className={styles.container}>
                <div className={styles.stateLayer18}>
                  <img className={styles.icon1} alt="" src="/icon37.svg" />
                </div>
              </div>
            </div>
            <div className={styles.selectedtrueStateenabled}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img className={styles.icon1} alt="" src="/icon37.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;
