import styles from './Button.module.scss';

export function Button({ text, active = true, type="button", onClick}) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return <button onClick={onClick} type={type} className={`${styles.btn} ${btnStyles}`}>{text}</button>;
}
