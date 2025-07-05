import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface IProps {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  customMessage?: string;
}

const ErrorInput = ({ error, customMessage }: IProps) => {
  if (!error) return null;

  const getCustomMessage = () => {
    return customMessage ? customMessage : `Formato inválido`;
  };

  return (
    <p className="text-red-500 text-sm mt-1">
      {error?.type === "validate" ? getCustomMessage() : `${error?.message}`}
    </p>
  );
};

export default ErrorInput;
