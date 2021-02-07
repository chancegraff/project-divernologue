import { always, identity, ifElse, length, lte, partial, pipe, __ } from "ramda";
import {
  PLEDGE_TITLE,
  PLEDGE_PARAGRAPH_1,
  PLEDGE_PARAGRAPH_2,
  NAME_INPUT_PLACEHOLDER,
  ORGANIZATION_INPUT_PLACEHOLDER,
  SUBMIT_BUTTON_PLACEHOLDER,
  INPUT_CHAR_LENGTH,
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

const validateCharLength = ifElse(pipe(length, lte(__, INPUT_CHAR_LENGTH)), identity, always(null));
const createValidatedState = partial(useUserInput, [ validateCharLength ]);

export default function Pledge() {
  const [name, changeName] = createValidatedState();
  const [org, changeOrg] = createValidatedState();
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
