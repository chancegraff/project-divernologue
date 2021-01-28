import styles from "./section.module.scss";
import classNames from "classnames";

export const SectionColor = {
  DARK: "bg-dark",
  LIGHT: "bg-light",
  LIGHT_BLUE: "bg-light-blue",
  LIGHT_CAMEL: "bg-light-camel",
};

export default function Section({
  className,
  colorName,
  children,
}) {
  return (
    <div className={classNames(className, styles.section, styles[colorName])}>
      {children}
    </div>
  );
}
