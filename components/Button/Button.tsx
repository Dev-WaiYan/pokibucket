import { ReactFragment } from "react";
import classes from "./button.module.css";

interface Props {
  title: string | ReactFragment;
  onClick: () => void;
  styles?: any;
  className?: string;
}

function Button({ title, onClick, styles = {}, className = "" }: Props) {
  return (
    <button
      style={styles}
      onClick={onClick}
      className={`${classes.btn} ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
