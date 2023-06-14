
import Slider from "react-slick";
import img1 from "../../../assets/slider-images/football.jpg";
import img2 from "../../../assets/slider-images/cricket.png";
import img3 from "../../../assets/slider-images/basketball.jpg";

const TopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="mb-14">
      <div>
        <img className="h-[200px] md:h-[300px] lg:h-[600px] w-full object-cover" src={img1} alt="" />
      </div>
      <div>
      <img className="h-[200px] md:h-[300px] lg:h-[600px] w-full object-cover" src={img2} alt="" />
      </div>
      <div>
      <img className="h-[200px] md:h-[300px] lg:h-[600px] w-full object-cover" src={img3} alt="" />
      </div>
    </Slider>
  );
};

export default TopSlider;
