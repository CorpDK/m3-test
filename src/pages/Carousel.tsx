import { FunctionComponent } from "react";
import styles from "./Carousel.module.css";
const Carousel: FunctionComponent = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo23.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Carousel</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/carousel/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Carousels contains a collection of items that can be scrolled on and
            off the screen.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.labels}>
            <div className={styles.label}>Tablet (non-uniform layout)</div>
            <div className={styles.label1}>Mobile (uniform layout)</div>
            <div className={styles.label2}>Mobile (non-uniform layout)</div>
          </div>
          <div className={styles.carousel1}>
            <div className={styles.uniformfalseContexttablet}>
              <div className={styles.item1}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item2}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item3}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.itemLast}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content3}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.uniformtrueContextmobile}>
              <div className={styles.item11}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item21}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.itemLast1}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content3}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.uniformfalseContextmobile}>
              <div className={styles.item12}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item22}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.itemLast1}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content3}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buildingBlocks}>
            <div className={styles.label13}>Building blocks</div>
            <div className={styles.buildingBlocksCarouselItem}>
              <div className={styles.supportingTextfalse}>
                <div className={styles.content}>
                  <div className={styles.label3}>Label</div>
                  <div className={styles.supportingText}>Supporting Text</div>
                </div>
              </div>
              <div className={styles.supportingTextfalse}>
                <div className={styles.content}>
                  <div className={styles.label3}>Label</div>
                  <div className={styles.supportingText11}>Supporting Text</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.labels1}>
            <div className={styles.label}>Tablet (non-uniform layout)</div>
            <div className={styles.label1}>Mobile (uniform layout)</div>
            <div className={styles.label2}>Mobile (non-uniform layout)</div>
          </div>
          <div className={styles.carouselDark}>
            <div className={styles.uniformfalseContexttablet}>
              <div className={styles.item1}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item2}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item3}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.itemLast}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content3}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.uniformtrueContextmobile}>
              <div className={styles.item11}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item21}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.itemLast1}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content3}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.uniformfalseContextmobile}>
              <div className={styles.item12}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.item22}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
              <div className={styles.itemLast1}>
                <div className={styles.itemTextLast}>
                  <div className={styles.content3}>
                    <div className={styles.label3}>Label</div>
                    <div className={styles.supportingText}>Supporting Text</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buildingBlocks1}>
            <div className={styles.label13}>Building blocks</div>
            <div className={styles.buildingBlocksCarouselItem1}>
              <div className={styles.supportingTextfalse}>
                <div className={styles.content}>
                  <div className={styles.label3}>Label</div>
                  <div className={styles.supportingText}>Supporting Text</div>
                </div>
              </div>
              <div className={styles.supportingTextfalse}>
                <div className={styles.content}>
                  <div className={styles.label3}>Label</div>
                  <div className={styles.supportingText11}>Supporting Text</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
