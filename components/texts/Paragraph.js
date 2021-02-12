import styles from "./paragraph.module.scss";
import classNames from "classnames";

export default function Paragraph({
  className,
  colorName,
  children,
}) {
  return (
    <p className={classNames(className, styles.paragraph)}>
      {children}
    </p>
  );
}
