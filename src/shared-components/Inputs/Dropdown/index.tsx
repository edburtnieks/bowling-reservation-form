import React, { FC } from "react";
import classNames from "classnames";

import { InputButton } from "../InputButton";
import { Caret } from "../../Icons/Caret";
import { Cross } from "../../Icons/Cross";

import baseInputStyles from "../BaseInput/styles.module.scss";
import styles from "./styles.module.scss";

type DropdownProps = {
  isOpen: boolean;
  label: string;

  closeDropdown: () => void;
  toggleDropdown: () => void;

  id?: string;
  value?: string;
};

const Dropdown: FC<DropdownProps> = ({
  isOpen,
  label,
  closeDropdown,
  toggleDropdown,
  id,
  value,
  children,
  ...rest
}) => {
  return (
    <div className={baseInputStyles.field}>
      {value ? (
        <>
          <label className={baseInputStyles.label} htmlFor={id}>
            {label}
          </label>

          <div className={classNames(styles.toggle)}>
            <input
              type="button"
              className={classNames(baseInputStyles.input, styles.input)}
              id={id}
              value={value}
              onClick={() => toggleDropdown()}
              {...rest}
            />

            <Caret className={styles.caret} active={isOpen} />
          </div>
        </>
      ) : (
        <InputButton onClick={() => toggleDropdown()}>
          <span>{value || label}</span>
        </InputButton>
      )}

      <div
        className={classNames(styles.overlay, { [styles.active]: isOpen })}
      />

      <div className={classNames(styles.content, { [styles.active]: isOpen })}>
        {children}

        <InputButton
          className={styles.closeButton}
          onClick={() => closeDropdown()}
          aria-label="Close dropdown"
        >
          <Cross />
        </InputButton>
      </div>
    </div>
  );
};

export { Dropdown };