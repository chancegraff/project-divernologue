import { forwardRef } from "react";
import classNames from "classnames";
import useUserInput from "../hooks/UserInput";
import styles from "./Input.module.scss";

export default forwardRef(function Input({
  className,
}, ref) {
  const [userInput, changeInput] = useUserInput();

  return (
    <input ref={ref} className={classNames(className, styles.input)} type="text" value={userInput} onChange={changeInput} />
  )
});
