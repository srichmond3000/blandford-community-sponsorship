import Image from 'next/image';

const ImageDescription = ({
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  text,
}) => (
  <div>
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      priority={true}
    />
    <p>{text}</p>
  </div>
);
