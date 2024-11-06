import React from 'react';
import Slider from "react-slick";
import '../App.css';
import Image1 from '../Assets/about-img-22.jpg';
import Image2 from '../Assets/about-imgg.jpg';
import Image3 from '../Assets/about-img-22.jpg';
import { FaBeer } from "react-icons/fa";
import { FiAirplay } from "react-icons/fi";

function Owlcarousel() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
       
      };

      const Workdata = [
        {
          image : Image1,
          title : "Testing",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },

        {
          image : Image2,
          title : "Testing 2",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },

        {
          image : Image3,
          title : "Testing 3",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        }
      ]
  
  return (
    <div className='container'>
        <Slider {...settings}>

          {
            Workdata.map((data) => (
                <div>
                  <span> Lets go for a <FiAirplay />?</span>
                  <img src={data.image} alt="" />
                  <h3>{data.title}</h3>
                  <p>
                    {data.text}
                  </p>
                </div>
            ))
          }
      
    </Slider>
    </div>
  )
}

export default Owlcarousel