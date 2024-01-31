// import { FilePond, registerPlugin } from "react-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import { baseUrl } from "../configs";
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// const FileUploader = (props: any) => {
//   const { files, setFiles } = props;
//   return (
//     <div className="App">
//       <FilePond
//         files={files}
//         onupdatefiles={setFiles}
//         allowMultiple={true}
//         maxFiles={1}
//         server={{
//           process: {
//             url: "/api/url",
//             headers: {
//               Authorization: `Bearer eyJH18ui0...`,
//             },
//             ondata: (formData) => {
//               formData.append("thumbnail", files);
//               return formData;
//             },
//             onload: () => {
//               props.onUploadComplete();
//             },
//           },
//         }}
//         name="files"
//         labelIdle='Drag & Drop images or <span class="filepond--label-action">Browse</span>'
//       />
//     </div>
//   );
// };

// export default FileUploader;
