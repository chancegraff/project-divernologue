import { useCallback } from "react";
import {
  NAME_INPUT_PLACEHOLDER,
  ORGANIZATION_INPUT_PLACEHOLDER,
  SUBMIT_BUTTON_PLACEHOLDER,
} from "../utils/constants";
import useUserInput from "../hooks/UserInput";
import useSubmitForm from "../hooks/SubmitForm";
import CheckmarkSVG from "../svg/icons/checkmark.svg";
import Input from "./Input";
import Button, { ButtonColor } from "./Button";
import styles from "./Form.module.scss";

export default function Form() {
  const validateCharLength = useCallback((v) => v.length < 125 && v, []);
  const [name, changeName] = useUserInput(validateCharLength);
  const [org, changeOrg] = useUserInput(validateCharLength);
  const submitForm = useSubmitForm(name, org);

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <Input placeholder={NAME_INPUT_PLACEHOLDER} inputValue={name} changeInput={changeName} />
      <Input placeholder={ORGANIZATION_INPUT_PLACEHOLDER} inputValue={org} changeInput={changeOrg} />
      <Button colorName={ButtonColor.FILLED} pre={CheckmarkSVG}>
        {SUBMIT_BUTTON_PLACEHOLDER}
      </Button>
    </form>
  );
}
