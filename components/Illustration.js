import styles from "./illustration.module.scss";
import classNames from "classnames";

import IllustrationFallingSVG from "../svg/illustration-falling-group.svg";
import IllustrationIdeaSVG from "../svg/illustration-idea-group.svg";
import IllustrationMessagesSVG from "../svg/illustration-messages.svg";
import IllustrationRecruitmentSVG from "../svg/illustration-recruitment-group.svg";
import IllustrationSuccessSVG from "../svg/illustration-success.svg";

export const IllustrationTypes = {
  FALLING: IllustrationFallingSVG,
  IDEA: IllustrationIdeaSVG,
  MESSAGES: IllustrationMessagesSVG,
  RECRUITMENT: IllustrationRecruitmentSVG,
  SUCCESS: IllustrationSuccessSVG,
};

export default function Illustration({
  className,
  illustrationName: IllustrationName,
}) {
  return (
    <IllustrationName className={classNames(className, styles.illustration)} />
  );
}
