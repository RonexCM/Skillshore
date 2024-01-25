import * as Yup from "yup";

const createProfileSchema = Yup.object({
  education: Yup.string().required("Education is required"),
  career: Yup.string().required("Career is required"),
  experience: Yup.string().required("Expereince is required"),
  skills: Yup.string().required("Skills is required"),
});


export default createProfileSchema;
