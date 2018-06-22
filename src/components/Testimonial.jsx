import React from 'react';
import FaLeft from 'react-icons/lib/io/ios-arrow-left';
import FaRight from 'react-icons/lib/io/ios-arrow-right';
import Quotes from '../assets/images/Quotes-01.svg';
import colors from '../variables';

const Testimonial = (props) => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a className="left__arrow" onClick={() => props.onToggleTestimonials('prev')}><FaLeft color={'#E6E6E6'} size={50} /></a>
      <div className="testimonials__card">
        <img src={Quotes} alt="quotes" />
        <p className="testimonials__text">{props.text}</p>
        <p className="testimonials__author">{props.author}</p>
        <p className="testimonials__subauthor">{props.subAuthor}</p>
      </div>
      <a className="right__arrow" onClick={() => props.onToggleTestimonials('next')}><FaRight color={'#E6E6E6'} size={50} /></a>
      <style jsx>{`
        .testimonials__card {
          background-color: #FCFCFC;
          height: 350px;
          width: 60%;
          max-width: 950px;
          min-width: 650px;
          box-shadow: 0 0 20px #E6E6E6;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .left__arrow {
          padding: 0;
          border: none;
          margin-right: 20px;
        }

        .right__arrow {
          padding: 0;
          border: none;
          margin-left: 20px;
        }

        .testimonials__card img {
          width: 55px;
          margin-bottom: 40px;
        }

        .testimonials__text {
          margin-bottom: 30px;
          font-size: 18px;
          font-family: GothamProLight;
          text-align: center;
        }

        .testimonials__author {
          font-family: GothamProBold;
          color: ${colors.red};
          font-size: 18px;
          margin-bottom: 0;
        }

        .testimonials__subauthor {
          font-family: GothamPro;
          font-weight: bolder;
          font-size: 16px;
          color: ${colors.red};
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
