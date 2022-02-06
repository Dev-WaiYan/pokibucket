import { ChangeEvent } from "react";

interface Props {
  type?: string;
  name: string;
  styles?: any;
  className?: string;
  input: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type = "text",
  name,
  input,
  placeholder,
  onChange,
  styles,
  className,
}: Props) {
  return (
    <input
      type={type}
      name={name}
      value={input}
      onChange={onChange}
      placeholder={placeholder}
      style={styles}
      className={className}
    />
  );
}

export default Input;
