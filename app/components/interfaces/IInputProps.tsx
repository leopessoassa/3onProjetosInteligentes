import { type Control, type UseFormRegister } from "react-hook-form";
import type { IModel } from "./IModel";

export interface IInputProps<T extends IModel> {
  label: string;
  attribute: string;
  register: UseFormRegister<any>;
  control?: Control<any, any>
  placeholder?: string;
  rules?: any;
  labelClass?:string;
  inputClass?:string;
  //size?: "sm" | "lg";
  disabled?: boolean;
  //max?: string;
  //maxLength?: number;
  //min?: string;
  //minLength?: number;
  //name?: string;
  //required?: boolean;
  type?: string;
  //customMessage?: string;
}