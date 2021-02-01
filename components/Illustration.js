import styles from "./illustration.module.scss";
import classNames from "classnames";

export const IllustrationSource = {
  MESSAGES: "/illustration-messages.svg",
  SUCCESS: "/illustration-success.svg",
  IDEA: "/illustration-idea-group.svg",
  RECRUITMENT: "/illustration-recruitment-group.svg",
  FALLING: "/illustration-falling-group.svg",
};

export default function Illustration({
  className,
  sourceName,
}) {
  return (
    <img className={classNames(className, styles.illustration)} src={sourceName} />
  );
}
