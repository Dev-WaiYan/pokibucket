import { ReactFragment } from "react";

interface Props {
  title: string | ReactFragment;
  onClick: () => void;
}

function Button({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>;
}

export default Button;
