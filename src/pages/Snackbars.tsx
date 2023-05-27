import { FunctionComponent } from "react";
import styles from "./Snackbars.module.css";
const Snackbars: FunctionComponent = () => {
  return (
    <div className={styles.snackbars}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo21.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Snackbars</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/snackbar/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Snackbars provide brief messages about app processes at the bottom
            of the screen.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.examples}>
            <div className={styles.snackbar}>
              <div className={styles.content}>
                <div className={styles.supportingText}>
                  <p
                    className={styles.twoLineSnackbarWith}
                  >{`Two-line snackbar with longer `}</p>
                  <p className={styles.twoLineSnackbarWith}>
                    action and close affordance
                  </p>
                </div>
              </div>
              <div className={styles.actionCloseAffordance}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar1}>
              <div className={styles.content}>
                <div className={styles.supportingText}>
                  <p
                    className={styles.twoLineSnackbarWith}
                  >{`Two-line snackbar with `}</p>
                  <p className={styles.twoLineSnackbarWith}>longer action</p>
                </div>
              </div>
              <div className={styles.action}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar2}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar with `}</p>
                <p className={styles.twoLineSnackbarWith}>
                  action and close affordance
                </p>
              </div>
              <div className={styles.actionCloseAffordance1}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar3}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar `}</p>
                <p className={styles.twoLineSnackbarWith}>with action</p>
              </div>
              <div className={styles.inverseButton3}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar4}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar with `}</p>
                <p className={styles.twoLineSnackbarWith}>close affordance</p>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar5}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar `}</p>
                <p className={styles.twoLineSnackbarWith}>without action</p>
              </div>
            </div>
            <div className={styles.snackbar6}>
              <div className={styles.label}>
                Single-line snackbar with action
              </div>
              <div className={styles.actionCloseAffordance1}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar7}>
              <div className={styles.label}>
                Single-line snackbar with action
              </div>
              <div className={styles.inverseButton3}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar8}>
              <div className={styles.label}>
                Single-line snackbar with close affordance
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbar9}>
              <div className={styles.label}>Single-line snackbar</div>
            </div>
          </div>
          <div className={styles.snackbar10}>
            <div className={styles.configurationtextLongerAc}>
              <div className={styles.content}>
                <div className={styles.supportingText}>
                  Snackbar supporting text
                </div>
              </div>
              <div className={styles.actionCloseAffordance}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextLongerAc1}>
              <div className={styles.content}>
                <div className={styles.supportingText}>
                  Snackbar supporting text
                </div>
              </div>
              <div className={styles.action}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextAction}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
              <div className={styles.actionCloseAffordance1}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextAction1}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
              <div className={styles.inverseButton3}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf1}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
            </div>
            <div className={styles.configurationtextAction2}>
              <div className={styles.label}>Snackbar supporting text</div>
              <div className={styles.actionCloseAffordance1}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextAction3}>
              <div className={styles.label}>Snackbar supporting text</div>
              <div className={styles.inverseButton3}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf2}>
              <div className={styles.label}>Snackbar supporting text</div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf3}>
              <div className={styles.label}>Snackbar supporting text</div>
            </div>
          </div>
          <div className={styles.buildingBlocks}>
            <div className={styles.buildingBlocks1}>Building Blocks</div>
            <div className={styles.buildingBlockslightSchemes}>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer23}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer24}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer24}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
            </div>
            <div className={styles.buildingBlockslightSchemes1}>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container11}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container12}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container12}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.examples1}>
            <div className={styles.snackbarDark}>
              <div className={styles.content4}>
                <div className={styles.supportingText}>
                  <p
                    className={styles.twoLineSnackbarWith}
                  >{`Two-line snackbar with longer `}</p>
                  <p className={styles.twoLineSnackbarWith}>
                    action and close affordance
                  </p>
                </div>
              </div>
              <div className={styles.actionCloseAffordance6}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark1}>
              <div className={styles.content}>
                <div className={styles.supportingText}>
                  <p
                    className={styles.twoLineSnackbarWith}
                  >{`Two-line snackbar with `}</p>
                  <p className={styles.twoLineSnackbarWith}>longer action</p>
                </div>
              </div>
              <div className={styles.action2}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark2}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar with `}</p>
                <p className={styles.twoLineSnackbarWith}>
                  action and close affordance
                </p>
              </div>
              <div className={styles.actionCloseAffordance7}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark3}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar `}</p>
                <p className={styles.twoLineSnackbarWith}>with action</p>
              </div>
              <div className={styles.inverseButton15}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark4}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar with `}</p>
                <p className={styles.twoLineSnackbarWith}>close affordance</p>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark5}>
              <div className={styles.supportingText}>
                <p
                  className={styles.twoLineSnackbarWith}
                >{`Two-line snackbar `}</p>
                <p className={styles.twoLineSnackbarWith}>without action</p>
              </div>
            </div>
            <div className={styles.snackbarDark6}>
              <div className={styles.label}>
                Single-line snackbar with action
              </div>
              <div className={styles.actionCloseAffordance7}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark7}>
              <div className={styles.label}>
                Single-line snackbar with action
              </div>
              <div className={styles.inverseButton15}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark8}>
              <div className={styles.label}>
                Single-line snackbar with close affordance
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.snackbarDark9}>
              <div className={styles.label}>Single-line snackbar</div>
            </div>
          </div>
          <div className={styles.snackbarDark10}>
            <div className={styles.configurationtextLongerAc2}>
              <div className={styles.content4}>
                <div className={styles.supportingText}>
                  Snackbar supporting text
                </div>
              </div>
              <div className={styles.actionCloseAffordance6}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextLongerAc3}>
              <div className={styles.content}>
                <div className={styles.supportingText}>
                  Snackbar supporting text
                </div>
              </div>
              <div className={styles.action2}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Longer Action</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextAction4}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
              <div className={styles.actionCloseAffordance7}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextAction5}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
              <div className={styles.inverseButton15}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf4}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf5}>
              <div className={styles.supportingText}>
                Snackbar supporting text
              </div>
            </div>
            <div className={styles.configurationtextAction6}>
              <div className={styles.label}>Snackbar supporting text</div>
              <div className={styles.actionCloseAffordance7}>
                <div className={styles.inverseButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action</div>
                  </div>
                </div>
                <div className={styles.closeAffordance}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsclose24px}
                        alt=""
                        src="/iconsclose-24px6.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextAction7}>
              <div className={styles.label}>Snackbar supporting text</div>
              <div className={styles.inverseButton15}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Action</div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf6}>
              <div className={styles.label}>Snackbar supporting text</div>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.configurationtextOnlyOf7}>
              <div className={styles.label}>Snackbar supporting text</div>
            </div>
          </div>
          <div className={styles.buildingBlocks2}>
            <div className={styles.buildingBlocks1}>Building Blocks</div>
            <div className={styles.buildingBlocksdarkSchemesn}>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer53}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer54}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
              <div className={styles.inverseButton}>
                <div className={styles.stateLayer54}>
                  <div className={styles.labelText}>Label</div>
                </div>
              </div>
            </div>
            <div className={styles.buildingBlocksdarkSchemesn1}>
              <div className={styles.closeAffordance}>
                <div className={styles.container}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container25}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container26}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.closeAffordance}>
                <div className={styles.container26}>
                  <div className={styles.stateLayer1}>
                    <img
                      className={styles.iconsclose24px}
                      alt=""
                      src="/iconsclose-24px6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snackbars;
