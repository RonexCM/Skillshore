import { Field } from "formik";

type Props = {
  id: number;
  totalOptions: number;
  setTotalOptions: (a: number) => void;
};
const OptionField = ({ id }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <label htmlFor="slug" className="text-sm">
        {`${id + 1}.)`}
      </label>
      <Field
        type="text"
        id={`option-${id + 1}`}
        autoComplete="current-slug"
        name={`option-${id + 1}`}
        className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
      />

      {/* button to delete option. disabled for now as total options is always 4 */}
      {/* <button
        type="button"
        className="bg-dark text-sm text-white py-[4px] px-[10px] rounded-full"
        onClick={() => setTotalOptions(totalOptions - 1)}
      >
        x
      </button> */}
    </div>
  );
};

export default OptionField;
