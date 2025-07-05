import {
  useFormState,
  type UseFormSetValue,
  type UseFormWatch,
} from "react-hook-form";
import { useState } from "react";
import ErrorInput from "./ErrorInput";
import type { IInputProps } from "../interfaces/IInputProps";
import type { IModel } from "../interfaces/IModel";

interface IPhoneInputProps extends IInputProps<IModel> {
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
}

const PhoneInput = ({
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
  setValue,
  watch,
  ...rest
}: IPhoneInputProps) => {
  const [touched, setTouched] = useState(false);
  const { errors } = useFormState({ control });

  const currentValue = watch(attribute);

  const currentLabelClass = `${
    labelClass || "block text-sm font-semibold text-gray-700 mb-2"
  } ${touched && errors[attribute] ? "text-red-500" : ""}`;
  const currentInputClass = `${
    inputClass ||
    "w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
  } ${touched && errors[attribute] ? "border-red-500" : ""}`;

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);

    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return numbers.replace(/(\d{2})(\d{1,4})/, "($1) $2");
    } else if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    onChange?.(formattedValue);
  };

  const onChange = (value: string) => {
    setValue(attribute, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const isPhoneValidate = (value: string) => {
    const required = rules.required ? rules.required.value : true;
    if (value.length === 0 && !required) return true;

    const numbers = value.replace(/[^\d]/g, "");
    if (numbers.length > 2 && numbers[2] === "9") {
      return numbers.length === 11;
    }
    return numbers.length === 10;
  };

  rules.validate = isPhoneValidate;

  return (
    <div>
      <label className={currentLabelClass}>
        {`${label} ${rules.required ? "*" : ""}`}
      </label>
      <input
        type={type || "tel"}
        {...register(attribute, rules)}
        placeholder={placeholder || label}
        className={currentInputClass}
        onFocus={() => (!touched ? setTouched(true) : null)}
        onChange={handleChange}
        disabled={disabled}
        value={currentValue || ""}
        {...rest}
      />
      <ErrorInput error={errors[attribute]} />
    </div>
  );
};

export default PhoneInput;
