import React, { ChangeEvent, FC } from "react";

import { SWrapper, SSelect, SLabel } from "./styles";

interface ISelect {
  name: string;
  options: Array<number | string>;
  onChange: (name: string, value: string) => void;
  label?: string;
}

const Select: FC<ISelect> = ({ name, options, label, onChange }) => {
  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    onChange(target.name, target.value);
  };

  return (
    <SWrapper>
      {label ? <SLabel>{label}</SLabel> : null}
      <SSelect name={name} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SSelect>
    </SWrapper>
  );
};

export default Select;
