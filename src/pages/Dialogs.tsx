import { FunctionComponent } from "react";
import styles from "./Dialogs.module.css";
const Dialogs: FunctionComponent = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo31.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Dialogs</div>
          <a
            className={styles.link}
            href="http://m3.material.io/components/dialogs/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Dialogs provide important prompts in a user flow. They can require
            an action, communicate information for making decisions, or help
            users accomplish a focused task.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.basicDialog}>
            <div className={styles.iconfalse}>
              <div className={styles.textContent}>
                <div className={styles.titleDescription}>
                  <div className={styles.headline}>Basic dialog title</div>
                  <div className={styles.supportingText}>
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.
                  </div>
                </div>
              </div>
              <div className={styles.divider}>
                <div className={styles.horizontalfullWidth}>
                  <div className={styles.divider1} />
                </div>
              </div>
              <div className={styles.actions}>
                <div className={styles.actions1}>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 2</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.icontrue}>
              <div className={styles.titleDescription1}>
                <img className={styles.icon} alt="" src="/icon106.svg" />
                <div className={styles.headline}>Dialog with hero icon</div>
                <div
                  className={styles.supportingText1}
                >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
              </div>
              <div className={styles.divider}>
                <div className={styles.horizontalfullWidth}>
                  <div className={styles.divider1} />
                </div>
              </div>
              <div className={styles.actions2}>
                <div className={styles.actions1}>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 2</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.listDialog}>
            <div className={styles.iconfalse}>
              <div className={styles.content}>
                <div className={styles.headline2}>Dialog Title</div>
                <div
                  className={styles.supportingText}
                >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
              </div>
              <div className={styles.list}>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
              </div>
              <div className={styles.actions4}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconfalse}>
              <div className={styles.content13}>
                <img className={styles.icon} alt="" src="/icon106.svg" />
                <div className={styles.headline}>Dialog with hero icon</div>
                <div
                  className={styles.supportingText1}
                >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
              </div>
              <div className={styles.list}>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement}>
                      <div className={styles.buildingBlocksmonogram}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline3}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer5}>
                          <div className={styles.container} />
                          <img
                            className={styles.iconscheckSmall}
                            alt=""
                            src="/iconscheck-small.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalfullWidth2}>
                    <div className={styles.divider1} />
                  </div>
                </div>
              </div>
              <div className={styles.actions4}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.basicDialog}>
            <div className={styles.iconfalse2}>
              <div className={styles.content26}>
                <div className={styles.textContent1}>
                  <div className={styles.headline2}>Dialog Title</div>
                  <div className={styles.supportingText}>
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or ask for a
                    decision.
                  </div>
                </div>
                <div className={styles.listContainer}>
                  <div className={styles.list2}>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small5.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small5.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset15}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.actions6}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.icontrue2}>
              <div className={styles.content26}>
                <div className={styles.content13}>
                  <img className={styles.icon} alt="" src="/icon106.svg" />
                  <div className={styles.headline}>Dialog with hero icon</div>
                  <div
                    className={styles.supportingText1}
                  >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
                </div>
                <div className={styles.listContainer1}>
                  <div className={styles.list2}>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset15}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small5.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement}>
                          <div className={styles.buildingBlocksmonogram}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content1}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline3}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer5}>
                              <div className={styles.container} />
                              <img
                                className={styles.iconscheckSmall}
                                alt=""
                                src="/iconscheck-small5.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset15}>
                        <div className={styles.divider1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.actions4}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.basicDialogDark}>
            <div className={styles.iconfalse3}>
              <div className={styles.textContent}>
                <div className={styles.titleDescription}>
                  <div className={styles.headline}>Basic dialog title</div>
                  <div className={styles.supportingText54}>
                    A dialog is a type of modal window that appears in front of
                    app content to provide critical information, or prompt for a
                    decision to be made.
                  </div>
                </div>
              </div>
              <div className={styles.actions8}>
                <div className={styles.actions1}>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 2</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.icontrue3}>
              <div className={styles.textContent}>
                <div className={styles.titleDescription3}>
                  <img
                    className={styles.iconFrame}
                    alt=""
                    src="/icon-frame.svg"
                  />
                  <div className={styles.headline}>Dialog with hero icon</div>
                  <div
                    className={styles.supportingText55}
                  >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
                </div>
              </div>
              <div className={styles.actions10}>
                <div className={styles.actions1}>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 2</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Action 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.listDialogDark}>
            <div className={styles.iconfalse3}>
              <div className={styles.content52}>
                <div className={styles.textContent1}>
                  <div className={styles.headline2}>Dialog Title</div>
                  <div
                    className={styles.supportingText54}
                  >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
                </div>
              </div>
              <div className={styles.listDark}>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
              </div>
              <div className={styles.actions12}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconfalse3}>
              <div className={styles.content65}>
                <div className={styles.content13}>
                  <img className={styles.icon} alt="" src="/icon107.svg" />
                  <div className={styles.headline}>Dialog with hero icon</div>
                  <div
                    className={styles.supportingText55}
                  >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
                </div>
              </div>
              <div className={styles.listDark}>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem1}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
                <div className={styles.listItem4}>
                  <div className={styles.stateLayerOverlay} />
                  <div className={styles.stateLayer4}>
                    <div className={styles.leadingElement48}>
                      <div className={styles.buildingBlocksmonogramDark}>
                        <div className={styles.initial}>A</div>
                      </div>
                    </div>
                    <div className={styles.content53}>
                      <div className={styles.overline}>Overline</div>
                      <div className={styles.headline57}>List item</div>
                      <div className={styles.supportingText3}>
                        Supporting line text lorem ipsum dolor sit amet,
                        consectetur.
                      </div>
                    </div>
                    <div className={styles.trailingElement48}>
                      <div className={styles.metadata3}>100+</div>
                      <div className={styles.checkboxes}>
                        <div className={styles.stateLayer113}>
                          <div className={styles.container48} />
                          <img
                            className={styles.iconscheckSmall48}
                            alt=""
                            src="/iconscheck-small1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.horizontalmiddleInset15}>
                    <div className={styles.divider52} />
                  </div>
                </div>
              </div>
              <div className={styles.actions12}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.basicDialogDark}>
            <div className={styles.iconfalse5}>
              <div className={styles.content78}>
                <div className={styles.content79}>
                  <div className={styles.textContent1}>
                    <div className={styles.headline2}>Dialog Title</div>
                    <div className={styles.supportingText54}>
                      A dialog is a type of modal window that appears in front
                      of app content to provide critical information, or ask for
                      a decision.
                    </div>
                  </div>
                </div>
                <div className={styles.listContainer2}>
                  <div className={styles.list2}>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small6.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small6.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset15}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.actions14}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.icontrue5}>
              <div className={styles.content92}>
                <div className={styles.content13}>
                  <img className={styles.icon} alt="" src="/icon107.svg" />
                  <div className={styles.headline}>Dialog with hero icon</div>
                  <div
                    className={styles.supportingText55}
                  >{`A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. `}</div>
                </div>
                <div className={styles.listContainer3}>
                  <div className={styles.content79}>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small1.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small6.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                    <div className={styles.listItem1}>
                      <div className={styles.stateLayerOverlay} />
                      <div className={styles.stateLayer4}>
                        <div className={styles.leadingElement48}>
                          <div className={styles.buildingBlocksmonogramDark}>
                            <div className={styles.initial}>A</div>
                          </div>
                        </div>
                        <div className={styles.content53}>
                          <div className={styles.overline}>Overline</div>
                          <div className={styles.headline57}>List item</div>
                          <div className={styles.supportingText3}>
                            Supporting line text lorem ipsum dolor sit amet,
                            consectetur.
                          </div>
                        </div>
                        <div className={styles.trailingElement48}>
                          <div className={styles.metadata3}>100+</div>
                          <div className={styles.checkboxes}>
                            <div className={styles.stateLayer113}>
                              <div className={styles.container48} />
                              <img
                                className={styles.iconscheckSmall48}
                                alt=""
                                src="/iconscheck-small6.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.horizontalmiddleInset15}>
                        <div className={styles.divider52} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.actions15}>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 2</div>
                  </div>
                </div>
                <div className={styles.secondaryButton}>
                  <div className={styles.stateLayer}>
                    <div className={styles.labelText}>Action 1</div>
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

export default Dialogs;
