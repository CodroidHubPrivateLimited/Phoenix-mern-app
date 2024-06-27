import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'; 

const Carousel = () => {
    const settings = {
        dots: true, //allows user to see dot below picture to see in which picture he is
        infinite: true, //enables infinite looping of slides
        speed: 500, // slides will change 500ms
        slidesToShow: 1, // specifies how many number of slides to show which one currently
        slidesToScroll: 1 //clicking the next it change the slides by one
    };

    const slidesData = [
        { text: "Welcome to our platform!", image: "./images/users/slider-page/slider1.jpg" },
        { text: "Join our scholarship program!", image: "./images/users/slider-page/slider2.jpg" },
        { text: "Enroll today and start learning!", image: "./images/users/slider-page/slider3.jpg" },
        { text: "Don't miss the chance", image: "./images/users/slider-page/slider4.png" },
    ];

    return (
        <Slider {...settings}>
            {slidesData.map((slide, index) => (
                <div key={index} className="slide">
                    <img src={slide.image} alt={`slide-${index}`} />
                    <div className="slide-overlay"></div>
                    <div className="slide-content">
                        <h2>{slide.text}</h2>
                        <button className="enroll-button">Enroll</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;
