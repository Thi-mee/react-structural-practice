import React from "react";
import style from "./Accordion.module.css";

/**
 *
 * @param {{
 * theme: "dark"|"light",
 * children: React.ReactNode
 * initialIndex: number
 * }} param0
 * @returns
 */
const Accordion = ({ children, theme, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = React.useState(initialIndex);
  return (
    <div
      className={`${style.accordion} ${
        theme === "dark" ? style.dark : style.light
      }`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            active: activeIndex === index + 1,
            index: index + 1,
            onPress: (i) => setActiveIndex(i),
          });
        }
        return child;
      })}
    </div>
  );
};

/**
 *
 * @param {{
 * title: string,
 * children: React.ReactNode,
 * active: boolean,
 * index: number,
 * onPress: (index: number) => void
 * }} param0
 * @returns
 */
const AccordionItem = ({ title, children, active, index, onPress }) => {
  return (
    <div className={`${style.accordionItem} ${active && style.active}`}>
      <div className={style.accordionItemTitle} onClick={() => onPress(index)}>
        {title}
      </div>
      <div className={style.accordionItemContent}>
        <div className={style.innerContent}>{children}</div>
      </div>
    </div>
  );
};

export { Accordion, AccordionItem };

export default Accordion;
