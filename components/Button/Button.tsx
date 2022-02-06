import { ReactFragment } from "react";
import classes from "./button.module.css";

interface Props {
  title: string | ReactFragment;
  onClick: () => void;
  styles?: any;
  className?: string;
  "data-testid"?: string;
}

function Button(props: Props) {
  const { title, onClick, styles = {}, className = "" } = props;
  return (
    <button
      style={styles}
      onClick={onClick}
      className={`${classes.btn} ${className}`}
      data-testid={props["data-testid"]}
    >
      {title}
    </button>
  );
}

export default Button;
