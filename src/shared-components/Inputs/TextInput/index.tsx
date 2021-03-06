import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import { BaseInput } from "../BaseInput";
import styles from "../BaseInput/styles.module.scss";

type TextInputProps = {
  name: string;
  id: string;
  label: string;

  disabled?: boolean;
  fieldArray?: boolean;
  type?: string;
  vertical?: boolean;
};

const TextInput: FC<TextInputProps> = ({
  name,
  id,
  label,
  disabled,
  fieldArray,
  type = "text",
  vertical,
  ...rest
}) => {
  const { register } = useFormContext();

  return (
    <BaseInput name={name} id={id} label={label} vertical={vertical} textInput>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        ref={fieldArray ? register() : register}
        {...rest}
      />
    </BaseInput>
  );
};

export { TextInput };
