import { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

export default forwardRef(function Input({
  className,
  placeholder,
  inputValue,
  changeInput,
}, ref) {
  return (
    <input
      type="text"
      ref={ref}
      className={classNames(className, styles.input)}
      value={inputValue}
      onChange={changeInput}
      placeholder={placeholder}
    />
  )
});
