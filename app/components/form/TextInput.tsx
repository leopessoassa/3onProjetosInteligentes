import { useFormState } from "react-hook-form";
import { useState } from "react";
import type { IInputProps } from "../interfaces/IInputProps";
import type { IModel } from "../interfaces/IModel";
import ErrorInput from "./ErrorInput";

const TextInput = ({
  label,
  attribute,
  register,
  control,
  rules = {},
  placeholder,
  type,
  labelClass,
  inputClass,
  disabled,
  ...rest
}: IInputProps<IModel>) => {
  const [touched, setTouched] = useState(false);
  const { errors } = useFormState({ control });

  const currentLabelClass = `${
    labelClass || "block text-sm font-semibold text-gray-700 mb-2"
  } ${touched && errors[attribute] ? "text-red-500" : ""}`;
  const currentInputClass = `${
    inputClass ||
    "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
  } ${touched && errors[attribute] ? "border-red-500" : ""}`;

  return (
    <div>
      <label className={currentLabelClass}>
        {`${label} ${rules.required ? "*" : ""}`}
      </label>
      <input
        type={type || "text"}
        {...register(attribute, rules)}
        placeholder={placeholder || label}
        className={currentInputClass}
        onFocus={() => (!touched ? setTouched(true) : null)}
        disabled={disabled}
        {...rest}
      />
      <ErrorInput error={errors[attribute]} />
    </div>
  );
};

export default TextInput;
