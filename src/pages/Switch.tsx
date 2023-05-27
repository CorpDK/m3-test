import { FunctionComponent } from "react";
import styles from "./Switch.module.css";
const Switch: FunctionComponent = () => {
  return (
    <div className={styles.switch}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo2.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Switch</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/switch/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Switches toggle the state of a single item on or off.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.switch1}>
            <div className={styles.selectedfalseStatedisabled}>
              <div className={styles.track} />
              <div className={styles.handleContainer}>
                <div className={styles.handle} />
                <img
                  className={styles.iconsclose24px}
                  alt=""
                  src="/iconsclose-24px.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatepressed}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer} />
                <div className={styles.handle1} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatefocused}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer} />
                <div className={styles.handle2} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatehovered}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer2} />
                <div className={styles.handle2} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStateenabled}>
              <div className={styles.track1} />
              <div className={styles.handleContainer4}>
                <div className={styles.handle4} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatedisabled1}>
              <div className={styles.track} />
              <div className={styles.handleContainer}>
                <div className={styles.handle5} />
              </div>
            </div>
            <div className={styles.selectedfalseStatepressed1}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer} />
                <div className={styles.handle1} />
              </div>
            </div>
            <div className={styles.selectedfalseStatefocused1}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer} />
                <div className={styles.handle7} />
              </div>
            </div>
            <div className={styles.selectedfalseStatehovered1}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer2} />
                <div className={styles.handle7} />
              </div>
            </div>
            <div className={styles.selectedfalseStateenabled1}>
              <div className={styles.track1} />
              <div className={styles.handleContainer}>
                <div className={styles.handle9} />
              </div>
            </div>
            <div className={styles.selectedtrueStatedisabled}>
              <div className={styles.track10} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle10} />
                <img
                  className={styles.iconsclose24px}
                  alt=""
                  src="/iconscheck-24px.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatepressed}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer6} />
                <div className={styles.handle11} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatefocused}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer6} />
                <div className={styles.handle12} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatehovered}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer8} />
                <div className={styles.handle12} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStateenabled}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle14} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px1.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatedisabled1}>
              <div className={styles.track10} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle10} />
              </div>
            </div>
            <div className={styles.selectedtrueStatepressed1}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer6} />
                <div className={styles.handle11} />
              </div>
            </div>
            <div className={styles.selectedtrueStatefocused1}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer6} />
                <div className={styles.handle12} />
              </div>
            </div>
            <div className={styles.selectedtrueStatehovered1}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer8} />
                <div className={styles.handle12} />
              </div>
            </div>
            <div className={styles.selectedtrueStateenabled1}>
              <div className={styles.track11} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle14} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.switchDark}>
            <div className={styles.selectedfalseStatedisabled2}>
              <div className={styles.track20} />
              <div className={styles.handleContainer}>
                <div className={styles.handle20} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px2.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatepressed2}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer12} />
                <div className={styles.handle21} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px2.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatefocused2}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer12} />
                <div className={styles.handle22} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px2.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatehovered2}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer14} />
                <div className={styles.handle22} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px2.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStateenabled2}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.handle24} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconsclose-24px2.svg"
                />
              </div>
            </div>
            <div className={styles.selectedfalseStatedisabled3}>
              <div className={styles.track20} />
              <div className={styles.handleContainer}>
                <div className={styles.handle25} />
              </div>
            </div>
            <div className={styles.selectedfalseStatepressed3}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer12} />
                <div className={styles.handle21} />
              </div>
            </div>
            <div className={styles.selectedfalseStatefocused3}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer12} />
                <div className={styles.handle27} />
              </div>
            </div>
            <div className={styles.selectedfalseStatehovered3}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.stateLayer14} />
                <div className={styles.handle27} />
              </div>
            </div>
            <div className={styles.selectedfalseStateenabled3}>
              <div className={styles.track21} />
              <div className={styles.handleContainer}>
                <div className={styles.handle29} />
              </div>
            </div>
            <div className={styles.selectedtrueStatedisabled2}>
              <div className={styles.track30} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle30} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px2.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatepressed2}>
              <div className={styles.track31} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer18} />
                <div className={styles.handle31} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px3.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatefocused2}>
              <div className={styles.track31} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer18} />
                <div className={styles.handle32} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px3.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatehovered2}>
              <div className={styles.track31} />
              <div className={styles.handleContainer10}>
                <div className={styles.stateLayer20} />
                <div className={styles.handle32} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px3.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStateenabled2}>
              <div className={styles.track31} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle34} />
                <img
                  className={styles.iconsclose24px1}
                  alt=""
                  src="/iconscheck-24px3.svg"
                />
              </div>
            </div>
            <div className={styles.selectedtrueStatedisabled3}>
              <div className={styles.track30} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle30} />
              </div>
            </div>
            <div className={styles.selectedtrueStatepressed3}>
              <div className={styles.track31} />
              <div className={styles.handleContainer36}>
                <div className={styles.stateLayer18} />
                <div className={styles.handle36} />
              </div>
            </div>
            <div className={styles.selectedtrueStatefocused3}>
              <div className={styles.track31} />
              <div className={styles.handleContainer36}>
                <div className={styles.stateLayer18} />
                <div className={styles.handle37} />
              </div>
            </div>
            <div className={styles.selectedtrueStatehovered3}>
              <div className={styles.track31} />
              <div className={styles.handleContainer36}>
                <div className={styles.stateLayer20} />
                <div className={styles.handle37} />
              </div>
            </div>
            <div className={styles.selectedtrueStateenabled3}>
              <div className={styles.track31} />
              <div className={styles.handleContainer10}>
                <div className={styles.handle34} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
