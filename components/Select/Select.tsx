import { ChangeEvent } from "react";

interface Props {
  name: string;
  input: string;
  options: { text: string; value: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultSelectOption?: {
    text: string;
    value: string;
  };
  "data-testid"?: string;
  styles?: any;
  className?: string;
}

function Select(props: Props) {
  const {
    name,
    input,
    options,
    onChange,
    defaultSelectOption,
    styles,
    className,
  } = props;
  return (
    <select
      name={name}
      value={input}
      onChange={onChange}
      data-testid={props["data-testid"]}
      className={className}
      style={styles}
    >
      {defaultSelectOption && (
        <option value={defaultSelectOption.value} disabled>
          {defaultSelectOption.text}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
