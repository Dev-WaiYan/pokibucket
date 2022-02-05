import { ReactFragment } from "react";
import classes from "./button.module.css";

interface Props {
  title: string | ReactFragment;
  onClick: () => void;
  styles?: any;
}

function Button({ title, onClick, styles = {} }: Props) {
  return (
    <button style={styles} onClick={onClick} className={classes.btn}>
      {title}
    </button>
  );
}

export default Button;
