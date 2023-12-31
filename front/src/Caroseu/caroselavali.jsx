import '../style/CaroselAva.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Ajuste o número de slides a serem mostrados simultaneamente
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
  };

  const items = Array.from({ length: 10 }, (_, index) => (
    <li key={index}>
      <p>Item {index + 1}</p>
    </li>
  ));

  return (
    <div className="caroselhorizontal"> {/* Adiciona uma classe ao contêiner do carrossel */}
      <Slider {...settings}>
        {items}
      </Slider>
    </div>
  );
}; 

export default VerticalCarousel;
