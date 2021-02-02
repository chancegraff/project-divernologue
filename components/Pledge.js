import { useCallback } from "react";
import {
  PLEDGE_TITLE,
  PLEDGE_PARAGRAPH_1,
  PLEDGE_PARAGRAPH_2,
  NAME_INPUT_PLACEHOLDER,
  ORGANIZATION_INPUT_PLACEHOLDER,
  SUBMIT_BUTTON_PLACEHOLDER,
} from "utils/constants";
import IllustrationSuccessSVG from "svg/illustration-success.svg";
import CheckmarkSVG from "svg/icons/checkmark.svg";
import useUserInput from "./hooks/UserInput";
import useSubmitPledge from "./hooks/SubmitPledge";
import Section from "./groups/Section";
import Title from "./texts/Title";
import Illustration from "./texts/Illustration";
import Paragraph from "./texts/Paragraph";
import Form from "./inputs/Form";
import Input from "./inputs/Input";
import Button from "./inputs/Button";
import styles from "./Pledge.module.scss";

export default function Pledge() {
  const validateCharLength = useCallback((v) => v.length < 125 && v, []);
  const [name, changeName] = useUserInput(validateCharLength);
  const [org, changeOrg] = useUserInput(validateCharLength);
  const submitPledge = useSubmitPledge(name, org);

  return (
    <Section className={styles.section}>
      <Illustration svg={IllustrationSuccessSVG} />
      <Title className={styles.title}>{PLEDGE_TITLE}</Title>
      <Paragraph className={styles.paragraph}>{PLEDGE_PARAGRAPH_1}</Paragraph>
      <Paragraph className={styles.paragraph}>{PLEDGE_PARAGRAPH_2}</Paragraph>
      <Form submitForm={submitPledge}>
        <Input placeholder={NAME_INPUT_PLACEHOLDER} inputValue={name} changeInput={changeName} />
        <Input placeholder={ORGANIZATION_INPUT_PLACEHOLDER} inputValue={org} changeInput={changeOrg} />
        <Button className={styles.button} pre={CheckmarkSVG}>
          {SUBMIT_BUTTON_PLACEHOLDER}
        </Button>
      </Form>
    </Section>
  );
}
