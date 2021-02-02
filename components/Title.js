import styles from "./title.module.scss";
import classNames from "classnames";

export const TitleColor = {
  ON_DARK: "on-dark",
  ON_LIGHT: "on-light",
};

export default function Title({
  className,
  colorName,
  children,
}) {
  return (
    <h1 className={classNames(className, styles.title, styles[colorName])}>
      {children}
    </h1>
  );
}
