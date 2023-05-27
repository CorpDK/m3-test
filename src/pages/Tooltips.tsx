import { FunctionComponent } from "react";
import styles from "./Tooltips.module.css";
const Tooltips: FunctionComponent = () => {
  return (
    <div className={styles.tooltips}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo20.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Tooltips</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/tooltips/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Tooltips are informative, specific, and action-oriented text labels
            that provide contextual support
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.richTooltip}>
            <div className={styles.richTooltip1}>
              <div className={styles.content}>
                <div className={styles.subhead}>Title</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.primaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.primaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.richTooltip1}>
              <div className={styles.content}>
                <div className={styles.subhead}>Title</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.actions1}>
                <div className={styles.primaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.secondaryButton1}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.plainTooltip}>
            <div className={styles.plainTooltip1}>
              <div className={styles.typesingleLine}>
                <div className={styles.supportingText2}>Supporting text</div>
              </div>
              <div className={styles.typemultiLine}>
                <div className={styles.supportingText3}>Supporting text</div>
              </div>
            </div>
            <div className={styles.plainTooltip2}>
              <div className={styles.supportingText3}>
                Supporting text Body text string goes here psum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <div className={styles.label}>
            <div className={styles.label1}>Rich tooltip</div>
            <div className={styles.label2}>Plain tooltip</div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.richTooltip}>
            <div className={styles.richTooltipDark}>
              <div className={styles.content}>
                <div className={styles.subhead}>Title</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.actions2}>
                <div className={styles.primaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.primaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.richTooltipDark}>
              <div className={styles.content}>
                <div className={styles.subhead}>Title</div>
                <div className={styles.supportingText}>
                  Supporting line text lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
              <div className={styles.actions3}>
                <div className={styles.primaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.secondaryButton1}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.plainTooltip3}>
            <div className={styles.plainTooltipDark}>
              <div className={styles.typesingleLine1}>
                <div className={styles.supportingText2}>Supporting text</div>
              </div>
              <div className={styles.typemultiLine1}>
                <div className={styles.supportingText3}>Supporting text</div>
              </div>
            </div>
            <div className={styles.plainTooltipDark1}>
              <div className={styles.supportingText3}>
                Supporting text Body text string goes here psum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <div className={styles.label3}>
            <div className={styles.label4}>Rich tooltip</div>
            <div className={styles.label5}>Plain tooltip</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltips;
