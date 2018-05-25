import React from 'react';
import Quotes from '../assets/images/Quotes-01.svg';

const Testimonial = (props) => {
  return (
    <div>
      <div className="testimonials__card">
        <img src={Quotes} alt="quotes" />
        <p>{props.text}</p>
        <div className="testimonials__card-hr" />
        <p className="testimonials__author">{props.author}</p>
        <p className="testimonials__subauthor">{props.subAuthor}</p>
      </div>
      <style jsx>{`
        .testimonials__card {
          background-color: #FCFCFC;
          height: 280px;
          width: 500px;
          box-shadow: 0 0 20px #E6E6E6;
          padding: 40px;
        }

        .testimonials__card img {
          width: 45px;
        }

        .testimonials__card p {
          font-size: 14px;
          font-weight: 100;
          margin-bottom: 0;
        }

        .testimonials__author {
          margin-top: 10px;
          font-family: GothamProBold;
        }

        .testimonials__subauthor {
          font-family: GothamProBold;
        }

        .testimonials__card-hr {
          width: 40px;
          height: 1px;
          margin-top: 50px;
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
