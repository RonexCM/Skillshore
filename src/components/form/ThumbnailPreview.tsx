type Props = {
  image: any;
};

const ThumbnailPreview = ({ image }: Props) => {
  return (
    <img
      className="w-[100px] h-[60px] object-cover col-start-2 justify-self-start border-2 border-primary-light rounded-md mt-2"
      src={image}
      alt="thumbnail"
    />
  );
};

export default ThumbnailPreview;
