import { ErrorMessage, Field } from "formik";

type Props = {
  label: string;
  type: string;
  name: string;
};

const FormikInputField = ({ label, type, name }: Props) => {
  return (
    <div className="h-[76px]">
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-base text-dark">
          {label}
        </label>
        <Field
          type={type}
          id={name}
          autoComplete={`current-${name}`}
          name={name}
          className="p-1 px-2 text-sm rounded-md w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
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

export default FormikInputField;
