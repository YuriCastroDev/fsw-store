import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      className="h-auto w-full p-5"
      sizes="100vw"
      height={0}
      width={0}
      {...props}
    ></Image>
  );
};

export default PromoBanner;
