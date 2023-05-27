import { FunctionComponent } from "react";
import styles from "./TableOfContents.module.css";
const TableOfContents: FunctionComponent = () => {
  return (
    <div className={styles.tableOfContents}>
      <div className={styles.modularDesignPrinciples}>
        <img className={styles.logoIcon} alt="" src="/logo24.svg" />
        <b className={styles.buildBeautifulProductsContainer}>
          <p className={styles.build}>Build</p>
          <p className={styles.build}>Beautiful</p>
          <p className={styles.build}>Products</p>
        </b>
        <div className={styles.headerBodyCopy}>
          <b className={styles.personal}>Personal</b>
          <div className={styles.devicesShouldFeel}>
            Devices should feel personal. Individual choices for device color
            and form are brought to life through software. Dynamic color
            extraction imbues the system with a personal aesthetic, while
            changes in shape and lighting combine to create a holistic, resonant
            experience.
          </div>
        </div>
        <div className={styles.headerBodyCopy}>
          <b className={styles.personal}>Spirited</b>
          <div className={styles.devicesShouldFeel}>
            Enliven everyday interactions. A spirited energy animates routine
            interactions like the response of a ripple or a FAB state change.
            Updates to shape and motion lend an active, alive quality to
            elements that react and adapt to user input and contexts.
          </div>
        </div>
        <div className={styles.headerBodyCopy}>
          <b className={styles.personal}>Unexpected</b>
          <div className={styles.devicesShouldFeel}>
            Design for emerging ecosystems. The blurring of device boundaries
            and expanded motion system is noticeably new. The system is reframed
            as a means for adaptation, discovery, and experimentation – it
            thrives through change.
          </div>
        </div>
      </div>
      <div className={styles.systemOverviewCardContainer}>
        <div className={styles.column}>
          <div className={styles.systemOverviewCard}>
            <div className={styles.headerContainer}>
              <b className={styles.components}>Components</b>
              <b className={styles.components1}>Components</b>
            </div>
            <div className={styles.bodyContainer}>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Badges</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Bottom app bars</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Bottom sheets</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Buttons</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Cards</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Carousel</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Checkboxes</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Chips</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Date picker</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Dialogs</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Dividers</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>
                  Floating action buttons (FAB)
                </div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Icon buttons</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Lists</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Menus</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Navigation bars</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Navigation drawer</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Navigation rail</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Progress indicators</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Radio buttons</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Search</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Segmented buttons: outlined</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Side Sheets</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Sliders</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Snackbars</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Switch</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Tabs</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Text fields</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Time picker</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Tooltips</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
              <div className={styles.linkToComponents}>
                <div className={styles.badges}>Top app bars</div>
                <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
