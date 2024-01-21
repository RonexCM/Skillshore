import * as Yup from "yup";

const userProfileValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

export default userProfileValidationSchema;
