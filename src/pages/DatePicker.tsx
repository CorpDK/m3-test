import { FunctionComponent } from "react";
import styles from "./DatePicker.module.css";
const DatePicker: FunctionComponent = () => {
  return (
    <div className={styles.datePicker}>
      <div className={styles.header}>
        <img className={styles.logoIcon} alt="" src="/logo26.svg" />
        <div className={styles.title}>
          <div className={styles.componentName}>Date pickers</div>
          <a
            className={styles.link}
            href="https://m3.material.io/components/date-pickers/overview"
            target="_blank"
          >
            See design guideline
          </a>
          <div className={styles.definition}>
            Date pickers let users select a date, or a range of dates.
          </div>
        </div>
      </div>
      <div className={styles.components}>
        <div className={styles.lightScheme}>
          <div className={styles.components1}>
            <div className={styles.modalDatePicker}>
              <div className={styles.typefullScreenRange}>
                <div className={styles.header1}>
                  <div className={styles.closeIconParent}>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconsclose-24px3.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.button}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.labelText}>Save</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.labeDateIconButton}>
                    <div className={styles.labelDate}>
                      <div className={styles.labelText}>
                        Depart - Return dates
                      </div>
                      <div className={styles.selectedDate}>Aug 17 – Aug 23</div>
                    </div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconsmode-edit-24px.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.daysOfTheWeek}>
                  <div className={styles.sunday}>
                    <div className={styles.date}>S</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>M</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>T</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>W</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>T</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>F</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>S</div>
                  </div>
                </div>
                <div className={styles.months}>
                  <div className={styles.monthGroup}>
                    <div className={styles.month1}>
                      <div className={styles.header2}>
                        <div className={styles.monthYear}>August 2023</div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.sun}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat}>
                          <div className={styles.container6}>
                            <div className={styles.stateLayer7}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu2}>
                          <div className={styles.rangeHighlightEnd} />
                          <div className={styles.rangeHighlightStart} />
                          <div className={styles.container18}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fri2}>
                          <div className={styles.rangeHighlightEnd1} />
                          <div className={styles.rangeHighlightMiddle} />
                          <div className={styles.rangeHighlightStart1} />
                          <div className={styles.stateLayer20}>
                            <div className={styles.date}>18</div>
                          </div>
                        </div>
                        <div className={styles.sat2}>
                          <div className={styles.rangeHighlightEnd1} />
                          <div className={styles.rangeHighlightMiddle} />
                          <div className={styles.rangeHighlightStart1} />
                          <div className={styles.stateLayer20}>
                            <div className={styles.date}>19</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week4}>
                        <div className={styles.sun3}>
                          <div className={styles.rangeHighlightEnd1} />
                          <div className={styles.rangeHighlightMiddle} />
                          <div className={styles.rangeHighlightStart1} />
                          <div className={styles.stateLayer20}>
                            <div className={styles.date}>20</div>
                          </div>
                        </div>
                        <div className={styles.sun3}>
                          <div className={styles.rangeHighlightEnd1} />
                          <div className={styles.rangeHighlightMiddle} />
                          <div className={styles.rangeHighlightStart1} />
                          <div className={styles.stateLayer20}>
                            <div className={styles.date}>21</div>
                          </div>
                        </div>
                        <div className={styles.sun3}>
                          <div className={styles.rangeHighlightEnd1} />
                          <div className={styles.rangeHighlightMiddle} />
                          <div className={styles.rangeHighlightStart5} />
                          <div className={styles.stateLayer20}>
                            <div className={styles.date}>22</div>
                          </div>
                        </div>
                        <div className={styles.wed3}>
                          <div className={styles.rangeHighlightEnd6} />
                          <div className={styles.rangeHighlightStart6} />
                          <div className={styles.container18}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>31</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fri4}>
                          <div className={styles.date7}>28</div>
                        </div>
                        <div className={styles.sun}>
                          <div className={styles.date7}>29</div>
                        </div>
                      </div>
                      <div className={styles.week6}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header2}>
                        <div className={styles.monthYear}>September 2023</div>
                      </div>
                      <div className={styles.week11}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.thu3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week6}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header2}>
                        <div className={styles.monthYear}>October 2023</div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week11}>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>31</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>27</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>28</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>29</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                      </div>
                      <div className={styles.week6}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header2}>
                        <div className={styles.monthYear}>November 2023</div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.sun}>
                          <div className={styles.date7}>1</div>
                        </div>
                        <div className={styles.sun}>
                          <div className={styles.date7}>2</div>
                        </div>
                        <div className={styles.sun}>
                          <div className={styles.date7}>3</div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fri4}>
                          <div className={styles.date7}>29</div>
                        </div>
                        <div className={styles.sun}>
                          <div className={styles.date7}>30</div>
                        </div>
                      </div>
                      <div className={styles.week6}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header2}>
                        <div className={styles.monthYear}>December 2023</div>
                      </div>
                      <div className={styles.week11}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>1</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>2</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>3</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>1</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>2</div>
                        </div>
                        <div className={styles.thu3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week11}>
                        <div className={styles.sat3}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>31</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions}>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typeyear}>
                <div className={styles.header7}>
                  <div className={styles.labelAndDate}>
                    <div className={styles.supportingText}>Select date</div>
                    <div className={styles.weekDayDay}>Mon, Aug 17</div>
                  </div>
                  <div className={styles.closeIcon}>
                    <div className={styles.container}>
                      <div className={styles.stateLayer}>
                        <img
                          className={styles.iconsclose24px}
                          alt=""
                          src="/iconsmode-edit-24px.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localSelectionRow}>
                  <div className={styles.buildingBlocksmenuButton}>
                    <div className={styles.stateLayer159}>
                      <div className={styles.labelText}>August 2023</div>
                      <img className={styles.icon} alt="" src="/icon100.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.yearsContainer}>
                  <div className={styles.years}>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2019</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2020</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2022</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear4}>
                        <div className={styles.container155}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.year4}>2023</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2024</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2025</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2026</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2027</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2028</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2029</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2030</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2031</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2032</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2033</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2023</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2023</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions1}>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typeday}>
                <div className={styles.header7}>
                  <div className={styles.labelAndDate}>
                    <div className={styles.supportingText}>Select date</div>
                    <div className={styles.weekDayDay}>Mon, Aug 17</div>
                  </div>
                  <div className={styles.closeIcon}>
                    <div className={styles.container}>
                      <div className={styles.stateLayer}>
                        <img
                          className={styles.iconsclose24px}
                          alt=""
                          src="/iconsmode-edit-24px.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localSelectionRow1}>
                  <div className={styles.buildingBlocksmenuButton}>
                    <div className={styles.stateLayer159}>
                      <div className={styles.labelText}>August 2023</div>
                      <img className={styles.icon} alt="" src="/icon101.svg" />
                    </div>
                  </div>
                  <div className={styles.controls}>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-before.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-next.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localCalendarGrid}>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>S</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>M</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>T</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>W</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>T</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>F</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>S</div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday2}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday2}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>1</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>4</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.saturday2}>
                      <div className={styles.container6}>
                        <div className={styles.stateLayer7}>
                          <div className={styles.date}>5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>6</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>7</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>8</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>9</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>10</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>11</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>13</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>14</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>15</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>16</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.thursday4}>
                      <div className={styles.rangeHighlightEnd} />
                      <div className={styles.rangeHighlightStart6} />
                      <div className={styles.container18}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.labelText}>17</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>18</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>19</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>20</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>21</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>22</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>23</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>24</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>25</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>26</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>27</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>28</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>29</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>30</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>31</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday2}>
                      <div className={styles.date7}>28</div>
                    </div>
                    <div className={styles.sunday2}>
                      <div className={styles.date7}>24</div>
                    </div>
                  </div>
                  <div className={styles.week65}>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>30</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>31</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions2}>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputDatePicker}>
              <div className={styles.typerange}>
                <div className={styles.header9}>
                  <div className={styles.selectDate}>Select date</div>
                  <div className={styles.date266}>
                    <div className={styles.weekDayDay2}>Enter dates</div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconstoday-24px.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dateReturn}>
                  <div className={styles.textField}>
                    <div className={styles.textField1}>
                      <div className={styles.stateLayer218}>
                        <div className={styles.content}>
                          <div className={styles.inputText}>
                            <div className={styles.date}>mm/dd/yyyy</div>
                            <img
                              className={styles.caretIcon}
                              alt=""
                              src="/caret.svg"
                            />
                          </div>
                          <div className={styles.labelText9}>
                            <div className={styles.labelText10}>Date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText2}>
                      <div className={styles.supportingText3}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                  <div className={styles.textField2}>
                    <div className={styles.textField3}>
                      <div className={styles.stateLayer218}>
                        <div className={styles.content1}>
                          <div className={styles.labelText11}>
                            <div className={styles.date}>End date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText4}>
                      <div className={styles.supportingText3}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions3}>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typesingleInput}>
                <div className={styles.header9}>
                  <div className={styles.labelText}>Select date</div>
                  <div className={styles.weekDayDayParent}>
                    <div className={styles.weekDayDay2}>Enter date</div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconstoday-24px.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.date267}>
                  <div className={styles.textField4}>
                    <div className={styles.textField1}>
                      <div className={styles.stateLayer218}>
                        <div className={styles.content}>
                          <div className={styles.inputText}>
                            <div className={styles.date}>mm/dd/yyyy</div>
                            <img
                              className={styles.caretIcon}
                              alt=""
                              src="/caret.svg"
                            />
                          </div>
                          <div className={styles.labelText9}>
                            <div className={styles.labelText10}>Date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText2}>
                      <div className={styles.supportingText3}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions3}>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondayButton}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dockedInputDatePickerDesk}>
              <div className={styles.typeyear1}>
                <div className={styles.dropDownList}>
                  <div className={styles.selectionRow}>
                    <div className={styles.monthDropDown}>
                      <div className={styles.monthDropdown}>
                        <div className={styles.labelText}>Aug</div>
                      </div>
                    </div>
                    <div className={styles.buildingBlocksmenuButton2}>
                      <div className={styles.stateLayer159}>
                        <div className={styles.labelText}>2023</div>
                        <img
                          className={styles.icon}
                          alt=""
                          src="/icon101.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconButton7}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-before.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconButton7}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-next1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listContainer}>
                    <div className={styles.list}>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2022</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay}>
                          <div
                            className={styles.buildingBlocksstateLayer2Child}
                          />
                        </div>
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconscheck-24px4.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2023</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2024</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2025</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2026</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2027</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2028</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2029</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2030</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2031</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2032</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px2.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>2033</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.scrollBar}>
                    <div className={styles.group}>
                      <img className={styles.scrollBackgroundIcon} alt="" />
                      <div className={styles.scrollBar1} />
                    </div>
                  </div>
                </div>
                <div className={styles.textField6}>
                  <div className={styles.textField1}>
                    <div className={styles.stateLayer241}>
                      <div className={styles.content}>
                        <div className={styles.inputText}>
                          <div className={styles.date}>08/17/2023</div>
                          <img
                            className={styles.caretIcon}
                            alt=""
                            src="/caret.svg"
                          />
                        </div>
                        <div className={styles.labelText20}>
                          <div className={styles.labelText10}>Date</div>
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer242}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconstoday-24px.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.supportingText20}>
                    <div className={styles.supportingText3}>MM/DD/YYYY</div>
                  </div>
                </div>
              </div>
              <div className={styles.typemonth}>
                <div className={styles.dropDownList1}>
                  <div className={styles.selectionRow}>
                    <div className={styles.buildingBlocksmenuButton}>
                      <div className={styles.stateLayer159}>
                        <div className={styles.labelText}>Aug</div>
                        <img
                          className={styles.icon}
                          alt=""
                          src="/icon101.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.year18}>
                      <div className={styles.yearDropdown}>
                        <div className={styles.labelText}>2023</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listContainer1}>
                    <div className={styles.list1}>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>{`January `}</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>February</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>March</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>April</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>May</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>June</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>July</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay}>
                          <div
                            className={styles.buildingBlocksstateLayer2Child}
                          />
                        </div>
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconscheck-24px5.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>August</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>September</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>October</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>November</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline}>List item</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur.
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.scrollBar}>
                    <div className={styles.group}>
                      <img className={styles.scrollBackgroundIcon} alt="" />
                      <div className={styles.scrollBar1} />
                    </div>
                  </div>
                </div>
                <div className={styles.textField8}>
                  <div className={styles.textField1}>
                    <div className={styles.stateLayer241}>
                      <div className={styles.content}>
                        <div className={styles.inputText}>
                          <div className={styles.date}>08/17/2023</div>
                          <img
                            className={styles.caretIcon}
                            alt=""
                            src="/caret.svg"
                          />
                        </div>
                        <div className={styles.labelText20}>
                          <div className={styles.labelText10}>Date</div>
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer242}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconstoday-24px.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.supportingText20}>
                    <div className={styles.supportingText3}>MM/DD/YYYY</div>
                  </div>
                </div>
              </div>
              <div className={styles.typeday1}>
                <div className={styles.datePicker1}>
                  <div className={styles.selectionRow2}>
                    <div className={styles.leadingElement}>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-before.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksmenuButton}>
                        <div className={styles.stateLayer159}>
                          <div className={styles.labelText}>Aug</div>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/icon101.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-next.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.leadingElement}>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-before.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksmenuButton}>
                        <div className={styles.stateLayer159}>
                          <div className={styles.labelText}>2023</div>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/icon101.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-next.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.calendarGrid}>
                    <div className={styles.daysOfTheWeek2}>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>S</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>M</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>T</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>W</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>T</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>F</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>S</div>
                      </div>
                    </div>
                    <div className={styles.week11}>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>26</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>27</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>28</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>29</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>30</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>31</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.saturday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>2</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>4</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>5</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>6</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>7</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>8</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>9</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>10</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>11</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>13</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>14</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>16</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.monday12}>
                        <div className={styles.rangeHighlightEnd} />
                        <div className={styles.rangeHighlightStart6} />
                        <div className={styles.container18}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>17</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>18</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>19</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>20</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>21</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>22</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>23</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>24</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>25</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>26</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>27</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>28</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>29</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week11}>
                      <div className={styles.saturday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>30</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>1</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>2</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>4</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>5</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.localActions5}>
                    <div className={styles.secondayButton}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.labelText}>Cancel</div>
                      </div>
                    </div>
                    <div className={styles.secondayButton}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.labelText}>OK</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textField8}>
                  <div className={styles.textField1}>
                    <div className={styles.stateLayer241}>
                      <div className={styles.content}>
                        <div className={styles.inputText}>
                          <div className={styles.date}>08/17/2023</div>
                          <img
                            className={styles.caretIcon}
                            alt=""
                            src="/caret.svg"
                          />
                        </div>
                        <div className={styles.labelText20}>
                          <div className={styles.labelText10}>Date</div>
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer242}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconstoday-24px.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.supportingText20}>
                    <div className={styles.supportingText3}>MM/DD/YYYY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.labels}>
              <div className={styles.label}>Modal Date Picker</div>
              <div className={styles.label1}>Input Date Picker</div>
              <div className={styles.label2}>
                Docked Input Date Picker [desktop]
              </div>
            </div>
          </div>
          <div className={styles.buildingBlocks}>
            <div className={styles.buildingBlockslocalM3Calen}>
              <div className={styles.typetodayStatedisabled}>
                <div className={styles.container256}>
                  <div className={styles.stateLayer7}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStatedisabled}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer3}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typeselectedMiddleState}>
                <div className={styles.rangeHighlightEnd1} />
                <div className={styles.rangeHighlightMiddle} />
                <div className={styles.rangeHighlightStart1} />
                <div className={styles.stateLayer312}>
                  <div className={styles.date319}>00</div>
                  <img
                    className={styles.rippleIcon}
                    alt=""
                    src="/ripple4.svg"
                  />
                </div>
              </div>
              <div className={styles.typeselectedStatepressed}>
                <div className={styles.rangeHighlightEnd} />
                <div className={styles.rangeHighlightStart6} />
                <div className={styles.container18}>
                  <div className={styles.stateLayer313}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typetodayStatepressed}>
                <div className={styles.container6}>
                  <div className={styles.stateLayer314}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStatepressed}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer315}>
                    <div className={styles.date319}>00</div>
                    <img
                      className={styles.rippleIcon1}
                      alt=""
                      src="/ripple5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.typeselectedMiddleState1}>
                <div className={styles.rangeHighlightEnd1} />
                <div className={styles.rangeHighlightMiddle} />
                <div className={styles.rangeHighlightStart1} />
                <div className={styles.stateLayer316}>
                  <div className={styles.date}>00</div>
                </div>
              </div>
              <div className={styles.typeselectedStatefocused}>
                <div className={styles.rangeHighlightEnd} />
                <div className={styles.rangeHighlightStart6} />
                <div className={styles.container18}>
                  <div className={styles.stateLayer313}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
                <div className={styles.focus} />
              </div>
              <div className={styles.typetodayStatefocused}>
                <div className={styles.container262}>
                  <div className={styles.stateLayer314}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
                <div className={styles.focus1} />
              </div>
              <div className={styles.typedefaultStatefocused}>
                <div className={styles.container263}>
                  <div className={styles.stateLayer319}>
                    <div className={styles.date}>00</div>
                  </div>
                  <div className={styles.focus1} />
                </div>
              </div>
              <div className={styles.typeselectedMiddleState2}>
                <div className={styles.rangeHighlightEnd1} />
                <div className={styles.rangeHighlightMiddle} />
                <div className={styles.rangeHighlightStart1} />
                <div className={styles.stateLayer320}>
                  <div className={styles.date}>00</div>
                </div>
              </div>
              <div className={styles.typeselectedStatehovered}>
                <div className={styles.rangeHighlightEnd} />
                <div className={styles.rangeHighlightStart6} />
                <div className={styles.container18}>
                  <div className={styles.stateLayer321}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typetodayStatehovered}>
                <div className={styles.container6}>
                  <div className={styles.stateLayer322}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStatehovered}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer323}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typenullStateenabled}>
                <div className={styles.date7}>00</div>
              </div>
              <div className={styles.typeprevnextStateenabled}>
                <div className={styles.container213}>
                  <div className={styles.stateLayer7}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typeselectedMiddleState3}>
                <div className={styles.rangeHighlightEnd1} />
                <div className={styles.rangeHighlightMiddle} />
                <div className={styles.rangeHighlightStart1} />
                <div className={styles.stateLayer20}>
                  <div className={styles.date}>00</div>
                </div>
              </div>
              <div className={styles.typeselectedStateenabled}>
                <div className={styles.rangeHighlightEnd} />
                <div className={styles.rangeHighlightStart6} />
                <div className={styles.container18}>
                  <div className={styles.stateLayer3}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typetodayStateenabled}>
                <div className={styles.container6}>
                  <div className={styles.stateLayer7}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStateenabled}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer3}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buildingBlocksyear18}>
              <div className={styles.selectedfalseStatedisabled}>
                <div className={styles.container151}>
                  <div className={styles.stateLayer329}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedtrueStatepressed}>
                <div className={styles.container272}>
                  <div className={styles.stateLayer330}>
                    <div className={styles.year4}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedfalseStatepressed}>
                <div className={styles.secondayButton}>
                  <div className={styles.stateLayer331}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedtrueStatefocused}>
                <div className={styles.container274}>
                  <div className={styles.stateLayer332}>
                    <div className={styles.year4}>2023</div>
                  </div>
                  <div className={styles.focus3} />
                </div>
              </div>
              <div className={styles.selectedfalseStatefocused}>
                <div className={styles.container275}>
                  <div className={styles.stateLayer333}>
                    <div className={styles.date}>2023</div>
                  </div>
                  <div className={styles.focus4} />
                </div>
              </div>
              <div className={styles.selectedtrueStatehovered}>
                <div className={styles.container272}>
                  <div className={styles.stateLayer334}>
                    <div className={styles.year4}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedfalseStatehovered}>
                <div className={styles.secondayButton}>
                  <div className={styles.stateLayer335}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedtrueStateenabled}>
                <div className={styles.container155}>
                  <div className={styles.stateLayer160}>
                    <div className={styles.year4}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedfalseStateenabled}>
                <div className={styles.container151}>
                  <div className={styles.stateLayer160}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buildingBlocksmenuButton6}>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer159}>
                  <div className={styles.labelText}>Label</div>
                  <img className={styles.icon} alt="" src="/icon101.svg" />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer339}>
                  <div className={styles.labelText}>Label</div>
                  <img className={styles.icon} alt="" src="/icon101.svg" />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer340}>
                  <div className={styles.labelText}>Label</div>
                  <img className={styles.icon} alt="" src="/icon101.svg" />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer340}>
                  <div className={styles.labelText}>Label</div>
                  <img className={styles.icon} alt="" src="/icon101.svg" />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer342}>
                  <div className={styles.labelText}>Label</div>
                  <img className={styles.icon} alt="" src="/icon101.svg" />
                </div>
              </div>
            </div>
            <div className={styles.labels1}>
              <div className={styles.label3}>Disabled</div>
              <div className={styles.label4}>
                <p className={styles.range}>Range</p>
                <p className={styles.range}>(Middle)</p>
              </div>
              <div className={styles.label5}>Default (day)</div>
              <div className={styles.label6}>Unselected</div>
              <div className={styles.label7}>Selected</div>
              <div className={styles.label8}>Menu Button</div>
              <div className={styles.label9}>Enabled</div>
              <div className={styles.label10}>Hovered</div>
              <div className={styles.label11}>Focused</div>
              <div className={styles.label12}>Pressed</div>
              <div className={styles.label13}>Today</div>
              <div className={styles.label14}>Selected</div>
              <div className={styles.label15}>Prev/Next</div>
              <div className={styles.label16}>Null</div>
            </div>
            <div className={styles.title1}>
              <div className={styles.label17}>Building Blocks</div>
            </div>
          </div>
        </div>
        <div className={styles.darkScheme}>
          <div className={styles.components1}>
            <div className={styles.modalDatePickerDark}>
              <div className={styles.typefullScreenRange1}>
                <div className={styles.header11}>
                  <div className={styles.closeIconParent}>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconsclose-24px7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.button}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.labelText}>Save</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.labeDateIconButton1}>
                    <div className={styles.labelDate}>
                      <div className={styles.labelText}>
                        Depart - Return dates
                      </div>
                      <div className={styles.selectedDate1}>
                        Aug 17 – Aug 23
                      </div>
                    </div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconsmode-edit-24px1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.daysOfTheWeek3}>
                  <div className={styles.sunday}>
                    <div className={styles.date}>S</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>M</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>T</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>W</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>T</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>F</div>
                  </div>
                  <div className={styles.sunday}>
                    <div className={styles.date}>S</div>
                  </div>
                </div>
                <div className={styles.months1}>
                  <div className={styles.monthGroup}>
                    <div className={styles.month1}>
                      <div className={styles.header12}>
                        <div className={styles.monthYear}>August 2023</div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat30}>
                          <div className={styles.container286}>
                            <div className={styles.stateLayer7}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu32}>
                          <div className={styles.rangeHighlightEnd17} />
                          <div className={styles.rangeHighlightStart17} />
                          <div className={styles.container298}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fri32}>
                          <div className={styles.rangeHighlightEnd18} />
                          <div className={styles.rangeHighlightMiddle9} />
                          <div className={styles.rangeHighlightStart18} />
                          <div className={styles.date363}>18</div>
                        </div>
                        <div className={styles.sat32}>
                          <div className={styles.rangeHighlightEnd18} />
                          <div className={styles.rangeHighlightMiddle9} />
                          <div className={styles.rangeHighlightStart18} />
                          <div className={styles.date363}>19</div>
                        </div>
                      </div>
                      <div className={styles.week46}>
                        <div className={styles.sun5}>
                          <div className={styles.rangeHighlightEnd18} />
                          <div className={styles.rangeHighlightMiddle9} />
                          <div className={styles.rangeHighlightStart18} />
                          <div className={styles.date363}>20</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.rangeHighlightEnd18} />
                          <div className={styles.rangeHighlightMiddle9} />
                          <div className={styles.rangeHighlightStart18} />
                          <div className={styles.date363}>21</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.rangeHighlightEnd18} />
                          <div className={styles.rangeHighlightMiddle9} />
                          <div className={styles.rangeHighlightStart22} />
                          <div className={styles.date363}>22</div>
                        </div>
                        <div className={styles.wed33}>
                          <div className={styles.rangeHighlightEnd23} />
                          <div className={styles.rangeHighlightStart23} />
                          <div className={styles.container298}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>31</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                      <div className={styles.week67}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header12}>
                        <div className={styles.monthYear}>September 2023</div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.thu33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header12}>
                        <div className={styles.monthYear}>October 2023</div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>31</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>27</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>28</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>29</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header12}>
                        <div className={styles.monthYear}>November 2023</div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>1</div>
                        </div>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>2</div>
                        </div>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>3</div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.fri52}>
                          <div className={styles.date7}>29</div>
                        </div>
                        <div className={styles.sun30}>
                          <div className={styles.date7}>30</div>
                        </div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>30</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.month1}>
                      <div className={styles.header12}>
                        <div className={styles.monthYear}>December 2023</div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>1</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>2</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>3</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>1</div>
                        </div>
                        <div className={styles.thu6}>
                          <div className={styles.date7}>2</div>
                        </div>
                        <div className={styles.thu33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>1</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>3</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>4</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>5</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>6</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>7</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>8</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>9</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>10</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>11</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>12</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>13</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>14</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>15</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>17</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>18</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>19</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>20</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>21</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>22</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>23</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week1}>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>24</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>25</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>26</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>27</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>28</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.thu}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>29</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.tue}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.week18}>
                        <div className={styles.sat33}>
                          <div className={styles.container2}>
                            <div className={styles.stateLayer3}>
                              <div className={styles.date}>31</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>31</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                        <div className={styles.sun5}>
                          <div className={styles.date7}>00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions6}>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typeyear2}>
                <div className={styles.header17}>
                  <div className={styles.labelAndDate}>
                    <div className={styles.supportingText}>Select date</div>
                    <div className={styles.weekDayDay4}>Mon, Aug 17</div>
                  </div>
                  <div className={styles.closeIcon}>
                    <div className={styles.container}>
                      <div className={styles.stateLayer}>
                        <img
                          className={styles.iconsclose24px}
                          alt=""
                          src="/iconsmode-edit-24px2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localSelectionRow}>
                  <div className={styles.buildingBlocksmenuButton}>
                    <div className={styles.stateLayer159}>
                      <div className={styles.labelText}>August 2023</div>
                      <img className={styles.icon} alt="" src="/icon102.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.yearsContainer}>
                  <div className={styles.years}>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2019</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2020</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2022</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyearDark4}>
                        <div className={styles.container435}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.year4}>2023</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2024</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2025</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2026</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2027</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2028</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2029</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2030</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2031</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2032</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2033</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2023</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2023</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksyear}>
                        <div className={styles.container151}>
                          <div className={styles.stateLayer160}>
                            <div className={styles.date}>2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions7}>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typeday2}>
                <div className={styles.header17}>
                  <div className={styles.labelAndDate}>
                    <div className={styles.supportingText}>Select date</div>
                    <div className={styles.weekDayDay4}>Mon, Aug 17</div>
                  </div>
                  <div className={styles.closeIcon}>
                    <div className={styles.container}>
                      <div className={styles.stateLayer}>
                        <img
                          className={styles.iconsclose24px}
                          alt=""
                          src="/iconsmode-edit-24px1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localSelectionRow1}>
                  <div className={styles.buildingBlocksmenuButton}>
                    <div className={styles.stateLayer159}>
                      <div className={styles.labelText}>August 2023</div>
                      <img className={styles.icon} alt="" src="/icon103.svg" />
                    </div>
                  </div>
                  <div className={styles.controls}>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-before1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-next2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localCalendarGrid1}>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>S</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>M</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>T</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>W</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>T</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>F</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.date}>S</div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday17}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday17}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>1</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>4</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.saturday17}>
                      <div className={styles.container286}>
                        <div className={styles.stateLayer7}>
                          <div className={styles.date}>5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>6</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>7</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>8</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>9</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>10</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>11</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>13</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>14</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>15</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>16</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buildingBlocksm3CalendarCe}>
                      <div className={styles.rangeHighlightEnd17} />
                      <div className={styles.rangeHighlightStart23} />
                      <div className={styles.container298}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>17</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>18</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>19</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>20</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>21</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>22</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>23</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>24</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>25</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>26</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.daysOfTheWeek1}>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>27</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>28</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>29</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>30</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday1}>
                      <div className={styles.container2}>
                        <div className={styles.stateLayer3}>
                          <div className={styles.date}>31</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.sunday17}>
                      <div className={styles.date7}>28</div>
                    </div>
                    <div className={styles.sunday17}>
                      <div className={styles.date7}>24</div>
                    </div>
                  </div>
                  <div className={styles.week612}>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>30</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>31</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                    <div className={styles.sunday7}>
                      <div className={styles.date7}>00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions8}>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputDatePickerDark}>
              <div className={styles.typerange1}>
                <div className={styles.header19}>
                  <div className={styles.selectDate}>Select date</div>
                  <div className={styles.date603}>
                    <div className={styles.weekDayDay2}>Enter dates</div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconstoday-24px1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.dateReturn1}>
                  <div className={styles.textFieldDark}>
                    <div className={styles.textField12}>
                      <div className={styles.stateLayer218}>
                        <div className={styles.content}>
                          <div className={styles.inputText}>
                            <div className={styles.date}>mm/dd/yyyy</div>
                            <img
                              className={styles.caretIcon}
                              alt=""
                              src="/caret2.svg"
                            />
                          </div>
                          <div className={styles.labelText45}>
                            <div className={styles.labelText10}>Date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText40}>
                      <div className={styles.supportingText3}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                  <div className={styles.textFieldDark1}>
                    <div className={styles.textField13}>
                      <div className={styles.stateLayer218}>
                        <div className={styles.content1}>
                          <div className={styles.labelText11}>
                            <div className={styles.date}>End date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText4}>
                      <div className={styles.supportingText3}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions9}>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typesingleInput1}>
                <div className={styles.header19}>
                  <div className={styles.labelText}>Select date</div>
                  <div className={styles.weekDayDayGroup}>
                    <div className={styles.weekDayDay2}>Enter dates</div>
                    <div className={styles.closeIcon}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsclose24px}
                            alt=""
                            src="/iconstoday-24px1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.date604}>
                  <div className={styles.textField4}>
                    <div className={styles.textField12}>
                      <div className={styles.stateLayer218}>
                        <div className={styles.content}>
                          <div className={styles.inputText}>
                            <div className={styles.date}>mm/dd/yyyy</div>
                            <img
                              className={styles.caretIcon}
                              alt=""
                              src="/caret2.svg"
                            />
                          </div>
                          <div className={styles.labelText45}>
                            <div className={styles.labelText10}>Date</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.supportingText40}>
                      <div className={styles.supportingText3}>
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.localActions9}>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>Cancel</div>
                    </div>
                  </div>
                  <div className={styles.secondaryButton3}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText}>OK</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dockedInputDatePickerDark}>
              <div className={styles.typeyear3}>
                <div className={styles.dropDownList2}>
                  <div className={styles.selectionRow3}>
                    <div className={styles.monthDropDown}>
                      <div className={styles.monthDropdown}>
                        <div className={styles.labelText}>Aug</div>
                      </div>
                    </div>
                    <div className={styles.buildingBlocksmenuButton2}>
                      <div className={styles.stateLayer159}>
                        <div className={styles.labelText}>2023</div>
                        <img
                          className={styles.icon}
                          alt=""
                          src="/trailing-icon7.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.iconButton7}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-before2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconButton7}>
                      <div className={styles.container}>
                        <div className={styles.stateLayer}>
                          <img
                            className={styles.iconsnavigateBefore}
                            alt=""
                            src="/iconsnavigate-next3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listContainer2}>
                    <div className={styles.list2}>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2022</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay}>
                          <div
                            className={styles.buildingBlocksstateLayerDaChild}
                          />
                        </div>
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconscheck-24px6.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2023</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2024</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2025</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2026</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2027</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2028</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2029</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2030</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2031</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2032</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px3.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>2033</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.scrollBar}>
                    <div className={styles.group}>
                      <img className={styles.scrollBackgroundIcon} alt="" />
                      <div className={styles.scrollBar5} />
                    </div>
                  </div>
                </div>
                <div className={styles.textFieldDark3}>
                  <div className={styles.textField12}>
                    <div className={styles.stateLayer241}>
                      <div className={styles.content}>
                        <div className={styles.inputText}>
                          <div className={styles.date}>08/17/2023</div>
                          <img
                            className={styles.caretIcon}
                            alt=""
                            src="/caret2.svg"
                          />
                        </div>
                        <div className={styles.labelText56}>
                          <div className={styles.labelText10}>Date</div>
                        </div>
                      </div>
                      <div className={styles.trailingIcon3}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer580}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconstoday-24px1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.supportingText58}>
                    <div className={styles.supportingText3}>
                      Supporting text
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.typemonth1}>
                <div className={styles.dropDownList3}>
                  <div className={styles.selectionRow3}>
                    <div className={styles.buildingBlocksmenuButton}>
                      <div className={styles.stateLayer159}>
                        <div className={styles.labelText}>Aug</div>
                        <img
                          className={styles.icon}
                          alt=""
                          src="/trailing-icon7.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.year18}>
                      <div className={styles.yearDropdown}>
                        <div className={styles.labelText}>2023</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listContainer3}>
                    <div className={styles.list1}>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>January</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>February</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>March</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>April</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>May</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>June</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>July</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay}>
                          <div
                            className={styles.buildingBlocksstateLayerDaChild}
                          />
                        </div>
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconscheck-24px7.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>August</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>September</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>October</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>November</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                      <div className={styles.listItem1}>
                        <div className={styles.stateLayerOverlay} />
                        <div className={styles.stateLayer229}>
                          <div className={styles.leadingElement}>
                            <img
                              className={styles.iconspersonOutline24px}
                              alt=""
                              src="/iconsperson-outline-24px1.svg"
                            />
                          </div>
                          <div className={styles.content3}>
                            <div className={styles.overline}>Overline</div>
                            <div className={styles.headline24}>December</div>
                            <div className={styles.supportingText8}>
                              Supporting line text lorem ipsum dolor sit amet,
                              consectetur
                            </div>
                          </div>
                          <div className={styles.trailingSupportingText24}>
                            100+
                          </div>
                        </div>
                        <div className={styles.horizontalfullWidth}>
                          <div className={styles.divider24} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.scrollBar}>
                    <div className={styles.group}>
                      <img className={styles.scrollBackgroundIcon} alt="" />
                      <div className={styles.scrollBar5} />
                    </div>
                  </div>
                </div>
                <div className={styles.textFieldDark4}>
                  <div className={styles.textField12}>
                    <div className={styles.stateLayer241}>
                      <div className={styles.content}>
                        <div className={styles.inputText}>
                          <div className={styles.date}>08/17/2023</div>
                          <img
                            className={styles.caretIcon}
                            alt=""
                            src="/caret2.svg"
                          />
                        </div>
                        <div className={styles.labelText56}>
                          <div className={styles.labelText10}>Date</div>
                        </div>
                      </div>
                      <div className={styles.trailingIcon3}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer580}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconstoday-24px1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.supportingText58}>
                    <div className={styles.supportingText3}>MM/DD/YYYY</div>
                  </div>
                </div>
              </div>
              <div className={styles.typeday1}>
                <div className={styles.datePicker2}>
                  <div className={styles.selectionRow5}>
                    <div className={styles.leadingElement}>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-before2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksmenuButton}>
                        <div className={styles.stateLayer159}>
                          <div className={styles.labelText}>Aug</div>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/trailing-icon7.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-next3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.leadingElement}>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-before2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.buildingBlocksmenuButton}>
                        <div className={styles.stateLayer159}>
                          <div className={styles.labelText}>2023</div>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/trailing-icon7.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.closeIcon}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer}>
                            <img
                              className={styles.iconsnavigateBefore}
                              alt=""
                              src="/iconsnavigate-next3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.calendarGrid1}>
                    <div className={styles.daysOfTheWeek2}>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>S</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>M</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>T</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>W</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>T</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>F</div>
                      </div>
                      <div className={styles.sunday8}>
                        <div className={styles.date}>S</div>
                      </div>
                    </div>
                    <div className={styles.week18}>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>26</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>27</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>28</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>29</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>30</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>31</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.saturday24}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>2</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>4</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>5</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>6</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>7</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>8</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>9</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>10</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>11</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>13</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>14</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>16</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.monday27}>
                        <div className={styles.rangeHighlightEnd17} />
                        <div className={styles.rangeHighlightStart23} />
                        <div className={styles.container298}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>17</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>18</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>19</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>20</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>21</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>22</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week1}>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>23</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>24</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>25</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>26</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>27</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>28</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>29</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.week18}>
                      <div className={styles.saturday24}>
                        <div className={styles.container2}>
                          <div className={styles.stateLayer3}>
                            <div className={styles.date}>30</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>1</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>2</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>4</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>5</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.sunday9}>
                        <div className={styles.container213}>
                          <div className={styles.stateLayer7}>
                            <div className={styles.date}>6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.localActions11}>
                    <div className={styles.secondaryButton3}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.labelText}>Cancel</div>
                      </div>
                    </div>
                    <div className={styles.secondaryButton3}>
                      <div className={styles.stateLayer1}>
                        <div className={styles.labelText}>OK</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textFieldDark4}>
                  <div className={styles.textField12}>
                    <div className={styles.stateLayer241}>
                      <div className={styles.content}>
                        <div className={styles.inputText}>
                          <div className={styles.date}>08/17/2023</div>
                          <img
                            className={styles.caretIcon}
                            alt=""
                            src="/caret2.svg"
                          />
                        </div>
                        <div className={styles.labelText56}>
                          <div className={styles.labelText10}>Date</div>
                        </div>
                      </div>
                      <div className={styles.trailingIcon3}>
                        <div className={styles.container}>
                          <div className={styles.stateLayer580}>
                            <img
                              className={styles.iconsclose24px}
                              alt=""
                              src="/iconstoday-24px1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.supportingText58}>
                    <div className={styles.supportingText3}>MM/DD/YYYY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.labels2}>
              <div className={styles.label}>Modal Date Picker</div>
              <div className={styles.label1}>Input Date Picker</div>
              <div className={styles.label2}>
                Docked Input Date Picker [desktop]
              </div>
            </div>
          </div>
          <div className={styles.buildingBlocks1}>
            <div className={styles.buildingBlocksm3CalendarCe1}>
              <div className={styles.typetodayStatedisabled}>
                <div className={styles.container536}>
                  <div className={styles.stateLayer7}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStatedisabled}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer3}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typeselectedMiddleState4}>
                <div className={styles.rangeHighlightEnd18} />
                <div className={styles.rangeHighlightMiddle9} />
                <div className={styles.rangeHighlightStart18} />
                <div className={styles.highlight} />
                <div className={styles.stateLayer650}>
                  <div className={styles.date656}>00</div>
                  <img
                    className={styles.rippleIcon}
                    alt=""
                    src="/ripple6.svg"
                  />
                </div>
              </div>
              <div className={styles.typeselectedStatepressed1}>
                <div className={styles.rangeHighlightEnd17} />
                <div className={styles.rangeHighlightStart23} />
                <div className={styles.container298}>
                  <div className={styles.stateLayer651}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typetodayStatepressed1}>
                <div className={styles.container286}>
                  <div className={styles.stateLayer652}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStatepressed}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer653}>
                    <div className={styles.date319}>00</div>
                    <img
                      className={styles.rippleIcon1}
                      alt=""
                      src="/ripple7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.typeselectedMiddleState5}>
                <div className={styles.rangeHighlightEnd18} />
                <div className={styles.rangeHighlightMiddle9} />
                <div className={styles.rangeHighlightStart18} />
                <div className={styles.stateLayer654}>
                  <div className={styles.date660}>00</div>
                </div>
              </div>
              <div className={styles.typeselectedStatefocused1}>
                <div className={styles.rangeHighlightEnd17} />
                <div className={styles.rangeHighlightStart23} />
                <div className={styles.container541}>
                  <div className={styles.stateLayer655}>
                    <div className={styles.date}>00</div>
                  </div>
                  <div className={styles.focus5} />
                </div>
              </div>
              <div className={styles.typetodayStatefocused1}>
                <div className={styles.container542}>
                  <div className={styles.stateLayer656}>
                    <div className={styles.date}>00</div>
                  </div>
                  <div className={styles.focus6} />
                </div>
              </div>
              <div className={styles.typedefaultStatefocused}>
                <div className={styles.container263}>
                  <div className={styles.stateLayer657}>
                    <div className={styles.date}>00</div>
                  </div>
                  <div className={styles.focus6} />
                </div>
              </div>
              <div className={styles.typeselectedMiddleState6}>
                <div className={styles.rangeHighlightEnd18} />
                <div className={styles.rangeHighlightMiddle9} />
                <div className={styles.rangeHighlightStart18} />
                <div className={styles.stateLayer658}>
                  <div className={styles.date660}>00</div>
                </div>
              </div>
              <div className={styles.typeselectedStatehovered1}>
                <div className={styles.rangeHighlightEnd17} />
                <div className={styles.rangeHighlightStart23} />
                <div className={styles.container298}>
                  <div className={styles.stateLayer659}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typetodayStatehovered1}>
                <div className={styles.container286}>
                  <div className={styles.stateLayer660}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStatehovered}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer661}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typenullStateenabled1}>
                <div className={styles.date7}>00</div>
              </div>
              <div className={styles.typeprevnextStateenabled1}>
                <div className={styles.container213}>
                  <div className={styles.stateLayer7}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typeselectedMiddleState7}>
                <div className={styles.rangeHighlightEnd18} />
                <div className={styles.rangeHighlightMiddle9} />
                <div className={styles.rangeHighlightStart18} />
                <div className={styles.date363}>00</div>
              </div>
              <div className={styles.typeselectedStateenabled1}>
                <div className={styles.rangeHighlightEnd17} />
                <div className={styles.rangeHighlightStart23} />
                <div className={styles.container298}>
                  <div className={styles.stateLayer3}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typetodayStateenabled1}>
                <div className={styles.container286}>
                  <div className={styles.stateLayer7}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
              <div className={styles.typedefaultStateenabled}>
                <div className={styles.container2}>
                  <div className={styles.stateLayer3}>
                    <div className={styles.date}>00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buildingBlocksyear18}>
              <div className={styles.selectedfalseStatedisabled}>
                <div className={styles.container151}>
                  <div className={styles.stateLayer329}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedtrueStatepressed1}>
                <div className={styles.container552}>
                  <div className={styles.stateLayer667}>
                    <div className={styles.year4}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedfalseStatepressed}>
                <div className={styles.secondayButton}>
                  <div className={styles.stateLayer668}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedfalseStatefocused}>
                <div className={styles.container275}>
                  <div className={styles.stateLayer669}>
                    <div className={styles.date}>2023</div>
                  </div>
                  <div className={styles.focus8} />
                </div>
              </div>
              <div className={styles.selectedtrueStateenabled1}>
                <div className={styles.container435}>
                  <div className={styles.stateLayer160}>
                    <div className={styles.year4}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedfalseStateenabled}>
                <div className={styles.container151}>
                  <div className={styles.stateLayer160}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedtrueStatehovered1}>
                <div className={styles.container552}>
                  <div className={styles.stateLayer672}>
                    <div className={styles.year4}>2023</div>
                  </div>
                </div>
              </div>
              <div className={styles.selectedtrueStatefocused1}>
                <div className={styles.container558}>
                  <div className={styles.stateLayer673}>
                    <div className={styles.year4}>2023</div>
                  </div>
                  <div className={styles.focus9} />
                </div>
              </div>
              <div className={styles.selectedfalseStatehovered}>
                <div className={styles.secondayButton}>
                  <div className={styles.stateLayer674}>
                    <div className={styles.date}>2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buildingBlocksmenuButton6}>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer159}>
                  <div className={styles.labelText}>Label</div>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/trailing-icon7.svg"
                  />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer676}>
                  <div className={styles.labelText}>Label</div>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/trailing-icon7.svg"
                  />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer677}>
                  <div className={styles.labelText}>Label</div>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/trailing-icon7.svg"
                  />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer677}>
                  <div className={styles.labelText}>Label</div>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/trailing-icon7.svg"
                  />
                </div>
              </div>
              <div className={styles.buildingBlocksmenuButton}>
                <div className={styles.stateLayer342}>
                  <div className={styles.labelText}>Label</div>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/trailing-icon7.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.labels3}>
              <div className={styles.label5}>Default (day)</div>
              <div className={styles.label6}>Unselected</div>
              <div className={styles.label7}>Selected</div>
              <div className={styles.label24}>Menu Button</div>
              <div className={styles.label9}>Enabled</div>
              <div className={styles.label10}>Hovered</div>
              <div className={styles.label11}>Focused</div>
              <div className={styles.label12}>Pressed</div>
              <div className={styles.label3}>Disabled</div>
              <div className={styles.label13}>Today</div>
              <div className={styles.label14}>Selected</div>
              <div className={styles.label4}>
                <p className={styles.range}>Range</p>
                <p className={styles.range}>(Middle)</p>
              </div>
              <div className={styles.label15}>Prev/Next</div>
              <div className={styles.label16}>Null</div>
            </div>
            <div className={styles.title2}>
              <div className={styles.label17}>Building Blocks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
