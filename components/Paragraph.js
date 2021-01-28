import styles from "./paragraph.module.scss";
import classNames from "classnames";

export const ParagraphColor = {
  ON_DARK: "on-dark",
  ON_LIGHT: "on-light",
};

export default function Paragraph({
  className,
  colorName,
  children,
}) {
  return (
    <p className={classNames(className, styles[colorName])}>
      {children}
    </p>
  );
}
