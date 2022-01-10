import { Field } from "formik";
import { handleInputMask } from "../../utils/inputMasks";

import "./styles.scss";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  width: number;
  value?: any;
  errors: any;
  touched: any;
  defaultValue?: string;
  onChange?: (event) => void;
  onInput?: () => void;
  onBlur?: (event) => Promise<any>;
}

export const Input = ({
  label,
  name,
  placeholder,
  type,
  width,
  errors,
  touched,
  ...rest
}: InputProps) => {
  return (
    <div className="c-input-generic">
      <label htmlFor={name} className="input-generic-label">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`input-generic input-w-${width}`}
        onInput={(event) => handleInputMask(name, event)}
        {...rest}
      />
      {errors[name] && touched[name] && (
        <div className="input-feedback">{errors[name]}</div>
      )}
    </div>
  );
};
