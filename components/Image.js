import styles from "./image.module.scss";
import classNames from "classnames";

export const ImageSource = {
  ILLUSTRATIONS: {
    MESSAGES: "/illustration-messages.svg",
    SUCCESS: "/illustration-success.svg",
    GROUPS: {
      IDEA: "/illustration-idea-group.svg",
      RECRUITMENT: "/illustration-recruitment-group.svg",
      FALLING: "/illustration-falling-group.svg",
    },
  },
};

export default function Image({
  className,
  sourceName,
}) {
  return (
    <img className={classNames(className, styles.image)} src={sourceName} />
  );
}
