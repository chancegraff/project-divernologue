import classNames from "classnames";
import styles from "./Button.module.scss";

export const ButtonColor = {
  FILLED: "filled",
};

export default function Button({
  className,
  colorName,
  buttonType = "submit",
  pre: Pre,
  children,
}) {
  return (
    <button type={buttonType} className={classNames(className, styles[colorName])}>
      <Pre className={styles.pre} />
      {children}
    </button>
  )
};
