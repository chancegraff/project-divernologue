import styles from "./section.module.scss";
import classNames from "classnames";

export default function Section({
  className,
  children,
}) {
  return (
    <div className={classNames(className, styles.section)}>
      {children}
    </div>
  );
}
