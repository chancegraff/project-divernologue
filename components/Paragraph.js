import styles from "./paragraph.module.scss";
import classNames from "classnames";

export const ParagraphColor = {
  ON_DARK: "on-dark",
  ON_LIGHT: "on-light",
};

export const ParagraphMargin = {
  ON_TOP: "margin-top",
  ON_BOTTOM: "margin-bottom",
};

export default function Paragraph({
  className,
  colorName,
  marginName,
  children,
}) {
  return (
    <p className={classNames(className, styles.paragraph, styles[colorName], styles[marginName])}>
      {children}
    </p>
  );
}
