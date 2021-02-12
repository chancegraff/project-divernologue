import styles from "./Form.module.scss";

export default function Form({
  submitForm,
  children,
}) {
  return (
    <form className={styles.form} onSubmit={submitForm}>
      {children}
    </form>
  );
}
