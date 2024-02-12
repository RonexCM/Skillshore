type Props = {
  image: any;
};

const ThumbnailPreview = ({ image }: Props) => {
  return (
    <img
      className="w-[100px] h-[50px] object-cover col-start-2 justify-self-start  border-4   border-primary-light rounded-md mt-4 "
      src={image}
      alt="thumbnail"
    />
  );
};

export default ThumbnailPreview;
