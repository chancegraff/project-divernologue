import classNames from "classnames";
import styles from "./Button.module.scss";

export default function Button({
  className,
  buttonType = "submit",
  pre: Pre = () => <></>,
  children,
}) {
  return (
    <button type={buttonType} className={classNames(className, styles.button)}>
      <Pre className={styles.pre} />
      {children}
    </button>
  )
};
