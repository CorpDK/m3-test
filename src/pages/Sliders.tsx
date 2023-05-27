import { FunctionComponent } from "react";
import styles from "./Sliders.module.css";
const Sliders: FunctionComponent = () => {
  return (
    <div className={styles.sliders}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo8.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Sliders</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/sliders/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Sliders allow users to make selections from a range of values.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.slider}>
            <div className={styles.typediscreteStatedisabled}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack}>
                  <div className={styles.stateLayer1} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack5}>
                  <div className={styles.stateLayer1} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack5}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack5}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack5}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack5}>
                  <div className={styles.stateLayer3} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer1} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer1} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled1}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer1} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack10}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer1} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled2}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack30}>
                  <div className={styles.stateLayer1} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                    <div className={styles.tick811} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack30}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack30}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack30}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack30}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                    <div className={styles.tick813} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                  <div className={styles.tick1} />
                </div>
              </div>
              <img
                className={styles.buildingBlockshandleIcon14}
                alt=""
                src="/building-blockshandle.svg"
              />
            </div>
            <div className={styles.typediscreteStatepressed4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                  <div className={styles.tick12} />
                </div>
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer1} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled3}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer} />
              </div>
              <img
                className={styles.buildingBlockshandleIcon14}
                alt=""
                src="/building-blockshandle.svg"
              />
            </div>
            <div className={styles.typecontinuousStatepressed4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon18}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled4}>
              <div className={styles.inactiveTrack}>
                <div className={styles.stateLayer2} />
              </div>
              <div className={styles.progressIndicator35}>
                <div className={styles.activeTrack15}>
                  <div className={styles.stateLayer3} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.buildingBlocks}>
            <div className={styles.title1}>
              <div className={styles.buildingBlocks1}>Building Blocks</div>
            </div>
            <div className={styles.lightScheme1}>
              <div className={styles.buildingBlockslabelContaine}>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                <div className={styles.number}>0</div>
              </div>
              <div className={styles.buildingBlockstrack}>
                <div className={styles.typecontinuousStatedefault}>
                  <div className={styles.stateLayer3} />
                </div>
                <div className={styles.typecontinuousStatedefault}>
                  <div className={styles.stateLayer1} />
                </div>
                <div className={styles.typecontinuousStatedefault1}>
                  <div className={styles.stateLayer2} />
                </div>
                <div className={styles.typecontinuousStatedefault1}>
                  <div className={styles.stateLayer} />
                </div>
                <div className={styles.typecontinuousStatedefault}>
                  <div className={styles.stateLayer3} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                    <div className={styles.tick13} />
                  </div>
                </div>
                <div className={styles.typecontinuousStatedefault}>
                  <div className={styles.stateLayer1} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                  </div>
                </div>
                <div className={styles.typecontinuousStatedefault1}>
                  <div className={styles.stateLayer2} />
                  <div className={styles.tickMarks}>
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                    <div className={styles.tick12} />
                  </div>
                </div>
                <div className={styles.typecontinuousStatedefault1}>
                  <div className={styles.stateLayer} />
                  <div className={styles.tickMarks}>
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                    <div className={styles.tick1} />
                  </div>
                </div>
              </div>
              <div className={styles.buildingBlockshandle30}>
                <div className={styles.statepressed}>
                  <div className={styles.stateLayer4} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
                <div className={styles.statehover}>
                  <div className={styles.stateLayer10} />
                  <img
                    className={styles.handleContainerIcon}
                    alt=""
                    src="/handle-container.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape1.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
                <img
                  className={styles.statedefaultIcon}
                  alt=""
                  src="/building-blockshandle1.svg"
                />
                <img
                  className={styles.statedisabledIcon}
                  alt=""
                  src="/building-blockshandle.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.sliderDark}>
            <div className={styles.typediscreteStatedisabled7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack48}>
                  <div className={styles.stateLayer139} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack48}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack48}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack48}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack48}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack53}>
                  <div className={styles.stateLayer139} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack53}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack53}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack53}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>100</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled5}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator}>
                <div className={styles.activeTrack53}>
                  <div className={styles.stateLayer141} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer139} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator62}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer139} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator10}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>75</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled6}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator62}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer139} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack58}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer139} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled7}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator20}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon4}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled10}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack78}>
                  <div className={styles.stateLayer139} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                    <div className={styles.tick860} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatepressed8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack78}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack78}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack78}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack78}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                    <div className={styles.tick862} />
                  </div>
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typediscreteStatedisabled11}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                  <div className={styles.tick149} />
                </div>
              </div>
              <img
                className={styles.buildingBlockshandleIcon14}
                alt=""
                src="/building-blockshandledark.svg"
              />
            </div>
            <div className={styles.typediscreteStatepressed9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatefocused9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStatehovered9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typediscreteStateenabled9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
                <div className={styles.tickMarks}>
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                  <div className={styles.tick151} />
                </div>
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable10}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer139} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatepressed8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>25</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled8}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator30}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
            <div className={styles.typecontinuousStatedisable11}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer138} />
              </div>
              <img
                className={styles.buildingBlockshandleIcon14}
                alt=""
                src="/building-blockshandledark.svg"
              />
            </div>
            <div className={styles.typecontinuousStatepressed9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatefocused9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer142} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStatehovered9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.buildingBlockshandleIcon4}>
                  <div className={styles.stateLayer148} />
                  <img
                    className={styles.handleIcon18}
                    alt=""
                    src="/handle.svg"
                  />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typecontinuousStateenabled9}>
              <div className={styles.inactiveTrack50}>
                <div className={styles.stateLayer140} />
              </div>
              <div className={styles.progressIndicator83}>
                <div className={styles.activeTrack63}>
                  <div className={styles.stateLayer141} />
                </div>
                <img
                  className={styles.buildingBlockshandleIcon12}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.buildingBlocks2}>
            <div className={styles.title1}>
              <div className={styles.buildingBlocks1}>Building Blocks</div>
            </div>
            <div className={styles.darkScheme1}>
              <div className={styles.buildingBlockslabelContaine}>
                <img className={styles.shapeIcon} alt="" src="/shape2.svg" />
                <div className={styles.number}>0</div>
              </div>
              <div className={styles.buildingBlockstrackDark}>
                <div className={styles.typecontinuousStatedefault2}>
                  <div className={styles.stateLayer141} />
                </div>
                <div className={styles.typecontinuousStatedefault2}>
                  <div className={styles.stateLayer139} />
                </div>
                <div className={styles.typecontinuousStatedefault3}>
                  <div className={styles.stateLayer140} />
                </div>
                <div className={styles.typecontinuousStatedefault3}>
                  <div className={styles.stateLayer138} />
                </div>
                <div className={styles.typecontinuousStatedefault2}>
                  <div className={styles.stateLayer141} />
                  <div className={styles.tickMarks52}>
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                    <div className={styles.tick152} />
                  </div>
                </div>
                <div className={styles.typecontinuousStatedefault2}>
                  <div className={styles.stateLayer139} />
                  <div className={styles.tickMarks1}>
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                  </div>
                </div>
                <div className={styles.typecontinuousStatedefault3}>
                  <div className={styles.stateLayer140} />
                  <div className={styles.tickMarks}>
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                    <div className={styles.tick151} />
                  </div>
                </div>
                <div className={styles.typecontinuousStatedefault3}>
                  <div className={styles.stateLayer138} />
                  <div className={styles.tickMarks}>
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                    <div className={styles.tick149} />
                  </div>
                </div>
              </div>
              <div className={styles.buildingBlockshandleDark30}>
                <div className={styles.statepressed1}>
                  <div className={styles.stateLayer142} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
                <div className={styles.statehover1}>
                  <div className={styles.stateLayer148} />
                  <img className={styles.handleIcon} alt="" src="/handle.svg" />
                  <div className={styles.labelContainer}>
                    <img
                      className={styles.shapeIcon}
                      alt=""
                      src="/shape2.svg"
                    />
                    <div className={styles.number}>0</div>
                  </div>
                </div>
                <img
                  className={styles.statedefaultIcon1}
                  alt=""
                  src="/building-blockshandledark1.svg"
                />
                <img
                  className={styles.statedisabledIcon1}
                  alt=""
                  src="/building-blockshandledark.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
