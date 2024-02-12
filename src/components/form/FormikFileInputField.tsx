import { ErrorMessage, Field } from "formik";
import { FormEvent } from "react";
import { ImCross } from "react-icons/im";
type Props = {
  name: string;
  label?: string;
  handleChange: (event: FormEvent) => void;
  setThumbnail: React.Dispatch<React.SetStateAction<string | File>>;
  resetBtn?: boolean;
  setPreview: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
};

const FormikFileInputField = ({
  name,

  handleChange,
  setThumbnail,
  setPreview,
  resetBtn,
}: Props) => {
  return (
    <div className="h-[76px]">
      <div className="relative flex flex-col gap-2  ">
        <label
          htmlFor={name}
          className=" text-base text-[#626262] bg-[#e8e8e85c] text-center cursor-pointer h-[62px] leading-[62px] rounded-md transition-all hover:bg-primary hover:text-white"
        >
          Click to choose thumbnail...
        </label>
        <Field
          hidden
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          id={name}
          autoComplete={`current-${name}`}
          name={name}
          onChange={(event: FormEvent<HTMLInputElement>) => {
            if (event.currentTarget.files === null) return;
            const file = event.currentTarget.files[0];
            setThumbnail(file);
            const fileReader = new FileReader();
            fileReader.onload = function () {
              setPreview(fileReader.result);
            };
            fileReader.readAsDataURL(file);
            handleChange(event);
          }}
          className=" text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
        />
        {resetBtn && (
          <ImCross
            className="absolute top-[48px] right-[10px] text-[#ec6161] text-xs cursor-pointer"
            onClick={() => setThumbnail("")}
          />
        )}
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
