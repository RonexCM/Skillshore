import { ErrorMessage, Field } from "formik";
import { FormEvent } from "react";

type Props = {
  name: string;
  label: string;
  handleChange: (event: FormEvent) => void;
  setThumbnail: (file: File) => void;
};

const FormikFileInputField = ({
  name,
  label,
  handleChange,
  setThumbnail,
}: Props) => {
  return (
    <div className="h-[76px]">
      <div className=" flex flex-col gap-2  ">
        <label htmlFor={name} className="text-base text-dark">
          {label}
        </label>
        <Field
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          id={name}
          autoComplete={`current-${name}`}
          name={name}
          onChange={(event: FormEvent<HTMLInputElement>) => {
            if (event.currentTarget.files === null) return;
            const file = event.currentTarget.files[0];
            console.log({ file });
            setThumbnail(file);
            handleChange(event);
          }}
          className=" text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
        />
      </div>
      <ErrorMessage
        className="text-red-500 text-xs "
        component="div"
        name={name}
      />
    </div>
  );
};

export default FormikFileInputField;
