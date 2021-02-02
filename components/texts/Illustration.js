import classNames from "classnames";
import styles from "./Illustration.module.scss";

export default function Illustration({
  className,
  svg: SVG,
}) {
  return (
    <SVG className={classNames(className, styles.illustration)} />
  );
}
