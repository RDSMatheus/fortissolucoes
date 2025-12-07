import { HelperText, Label, TextInput } from "flowbite-react";
import { Controller, useFormContext } from "react-hook-form";

export type InpuptProps = {
  label: string;
  nameInSchema: string;
  placeholder?: string;
  required: boolean;
  type: "text" | "email" | "password";
};

const InputWithLabel = ({
  label,
  nameInSchema,
  required,
  placeholder,
  type,
}: InpuptProps) => {
  const { formState, control } = useFormContext();

  return (
    <>
      <div className="relative mb-10">
        <div className="mb-2 block relative">
          <Label
            className="absolute bg-white leading-none left-4 top-0 z-10 text-blue-900"
            htmlFor={nameInSchema}
          >
            {label}
          </Label>
        </div>
        <div className="relative">
          <Controller
            control={control}
            name={nameInSchema}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextInput
                name={nameInSchema}
                className="focus-visible:ring-cyan-500 focus-visible:ring-1 bg-white shadow-[0_0_1px_1px] shadow-black/20
               hover:ring-teal-300 hover:ring-1 rounded-xl hover:border-cyan-400 focus-visible:border-cyan-400"
                value={value ?? ""}
                onChange={onChange}
                onBlur={onBlur}
                id={nameInSchema}
                placeholder={placeholder}
                required={required}
                type={type}
                color={formState.errors[nameInSchema]?.message && "failure"}
              />
            )}
          />
        </div>

        {formState.errors[nameInSchema] && (
          <HelperText className="absolute">
            {formState.errors[nameInSchema]?.message?.toString()}
          </HelperText>
        )}
      </div>
    </>
  );
};

export default InputWithLabel;
