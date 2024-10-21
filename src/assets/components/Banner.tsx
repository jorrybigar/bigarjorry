import { Carousel } from "react-bootstrap";

interface Props {
  images: string[];
}

const Banner: React.FC<Props> = ({ images }) => {
  return (
    <div className="px-2 mt-2">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 img-fluid px-1"
              src={image}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
