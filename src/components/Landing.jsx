import React from 'react';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import FaCircle from 'react-icons/lib/fa/circle';
import Testimonial from './Testimonial';
import ContactUsBlock from './ContactUsBlock';
import LogoWhite from '../assets/images/logo_full_white.svg';
import PictureMain from '../assets/images/HOME_PAGE_PICTURE.jpg';
import LandingVideo from '../assets/landing_video_final.mp4';
import colors from '../variables';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      activeDot: 1,
      testimonials: [
        {
          id: 1,
          text: "You were able to help plan around the portion of social security that was lost due to my Teacher Retirement plan. Thanks for all your help!",
          author: "David Schuelke",
          subAuthor: "Tomball ISD Assistant Superintendent, retired",
        },
        {
          id: 2,
          text: "Extremely important information to know.",
          author: "Nancy Philbrick, Klein Collins",
          subAuthor: "School Secretary",
        },
        {
          id: 3,
          text: "I would recommend this seminar to teachers and faculty!",
          author: "Paula Alexander",
          subAuthor: "Krimmel Intermediate, teacher",
        },
        {
          id: 4,
          text: "I learned a lot about retirement and social security that I was unaware of.",
          author: "James Fobbs",
          subAuthor: "Wunderlich Elementary, Administrator",
        },
        {
          id: 5,
          text: "I gained more knowledge than I expected from the seminar. The information is extremely important for public employees to know!",
          author: "Otila Gonzales",
          subAuthor: "Klein Oak High School, AP Secretary",
        },
      ]
    };
  }

  onRenderTestimonials = () => {
    const { activeDot, testimonials } = this.state;
    return testimonials.map((item) => {
      if (item.id === activeDot) {
        return (
          <React.Fragment key={item.id}>
            <Testimonial
              author={item.author}
              subAuthor={item.subAuthor}
              text={item.text}
              onToggleTestimonials={this.onToggleTestimonials}
            />
          </React.Fragment>
        );
      }
    });
  }

  onToggleTestimonials = status => {
    const { activeDot, testimonials } = this.state;
    if (status === 'prev' && activeDot > 1) {
      this.setState({
        activeDot: activeDot - 1,
      })
    } else if (status === 'next' && activeDot < testimonials.length) {
      this.setState({
        activeDot: activeDot + 1,
      });
    }
  }

  onRenderDots = () => {
    const { activeDot, testimonials } = this.state;
    return testimonials.map((item) => {
      return (
        <a
          className={item.id === 1 ? "testimonials__dots first__dot" : "testimonials__dots"}
          onClick={() => this.setState({ activeDot: item.id })}
          key={item.id}
        >
          <FaCircle size={12} color={activeDot === item.id ? '#4D4D4D' : '#BFBFBF'} />
        </a>
      );
    })
  }

  render() {
    return (
      <div className="landing__container">
        <Header
          onToggleModal={() => this.openModal()}
          logout={() => this.logout()}
          selected="home"
        />
        <div className="section__main">
          <img src={LogoWhite} width="600px" />
          <div className="section__main-divider" />
          <p className="section__main-text">
          Our national network of associates provides free seminars for public school employees and their
          spouses to inform and educate them about the impact of WEP/GPO on their retirement income so that
          they can better prepare for their future. 
          </p>
          <Button type="red" width="250px" click={() => window.scrollBy(0, 800)}>WATCH VIDEO</Button>
        </div>
        <div className="section__video">
          <video controls>
            <source src={LandingVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="section__socialSec">
          <div className="section__socialSec__wrapper">
            <p className="section__socialSec-bold">
              The Social Security benefits of millions of public school employees across America
              are negatively affected by the Windfall Elimination Provision (WEP) and/or
              Government Pension Offset (GPO).
            </p>
            <div className="section__socialSec-divider" />
            <p className="section__socialSec-light">
              If you are married or have a partner, this information is vital for you to understand
              the ways in which WEP/GPO will affect you in retirement.
            </p>
          </div>
        </div>
        <div className="section__testimonials">
          {this.onRenderTestimonials()}
          <div className="section__dots">
            {this.onRenderDots()}
          </div>
        </div>
        <ContactUsBlock />
        <Footer />
        <style jsx>{`
          .section__main {
            width: 100vw;
            height: 88vh;
            background: url(${PictureMain}) 50% 50%;
            background-size: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .section__main-divider {
            width: 100px;
            background-color: ${colors.red};
            height: 2px;
            margin-bottom: 30px;
            margin-top: 5px;
          }
          .section__main-text {
            color: ${colors.white};
            font-family: GothamProLight;
            padding: 0 300px;
            font-size: 18px;
            text-align: center;
          }

          .section__video {
            height: 700px;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .section__video video {
            width: 100%;
            padding: 0 175px;
            max-width: 1500px;
          }

          .section__socialSec {
            height: 200px;
            width: 100vw;
            padding: 0 175px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .section__socialSec__wrapper {
            display: flex;
            flex-direction: column;
            width: 1000px;
          }

          .section__socialSec-bold {
            font-family: GothamPro;
            font-weight: bolder;
            font-size: 18px;
          }

          .section__socialSec-divider {
            width: 70px;
            background-color: red;
            height: 3px;
            margin-bottom: 15px;
          }

          .section__socialSec-light {
            font-family: GothamProLight;
            font-size: 16px;
          }

          .section__testimonials {
            width: 100vw;
            height: 480px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .testimonial__card {
            width: 60%;
            background-color: red;
            height: 400px;
          }

          .section__dots {
            margin-top: 30px;
          }

          .testimonials__dots {
            padding: 0;
            border: none;
            margin-left: 5px;
          }

          .first__dot {
            margin-left: 0 !important;
          }

          .landing__container {
            width: 100vw;
            overflow-x: hidden;
          }

          hr {
            width: 50%;
          }

          .dotsContainer {
            margin-top: 50px;
          }

          .dotsContainer svg {
            margin-right: 5px;
            cursor: pointer;
          }

          .dotsContainer a {
            border: none;
            padding: 0;
          }

          .testimonialsContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            width: 100%;
            height: 550px;
          }

          .testimonialsContainer h1 {
            font-size: 40px;
            margin: 0;
          }

          .testimonials__underline {
            width: 70px;
            height: 3px;
            background-color: ${colors.blue};
            margin-top: 10px;
            box-shadow: 1px 1px 18px #888888;
          }

          .testimonials {
            width: 100%;
            margin-top: 50px;
            display: flex;
          }

          .testimonials__wrapper {
            display: flex;
            align-items: center;
            width: 50%;
            height: 100%;
            margin-top: 20px;
          }

          .wrapper__1 {
            justify-content: flex-end;
            margin-right: 15px;
          }

          .wrapper__2 {
            justify-content: flex-start;
            margin-left: 15px;
          }

          .testimonials__author {
            font-weight: 600 !important;
          }

          @-webkit-keyframes fadeInDown {
            from {
              opacity:0;
              -webkit-transform: translatey(-80px);
              -moz-transform: translatey(-80px);
              -o-transform: translatey(-80px);
              transform: translatey(-80px);
            }
            to {
              opacity:1;
              -webkit-transform: translatey(0);
              -moz-transform: translatey(0);
              -o-transform: translatey(0);
              transform: translatey(0);
            }
          }
          @-moz-keyframes fadeInDown {
            from {
              opacity:0;
              -webkit-transform: translatey(-80px);
              -moz-transform: translatey(-80px);
              -o-transform: translatey(-80px);
              transform: translatey(-80px);
            }
            to {
              opacity:1;
              -webkit-transform: translatey(0);
              -moz-transform: translatey(0);
              -o-transform: translatey(0);
              transform: translatey(0);
            }
          }
          @keyframes fadeInDown {
            from {
              opacity:0;
              -webkit-transform: translatey(-80px);
              -moz-transform: translatey(-80px);
              -o-transform: translatey(-80px);
              transform: translatey(-80px);
            }
            to {
              opacity:1;
              -webkit-transform: translatey(0);
              -moz-transform: translatey(0);
              -o-transform: translatey(0);
              transform: translatey(0);
            }
          }
          .in-down {
            -webkit-animation-name: fadeInDown;
            -moz-animation-name: fadeInDown;
            -o-animation-name: fadeInDown;
            animation-name: fadeInDown;
            -webkit-animation-fill-mode: both;
            -moz-animation-fill-mode: both;
            -o-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-duration: 1s;
            -moz-animation-duration: 1s;
            -o-animation-duration: 1s;
            animation-duration: 1s;
          }
        `}</style>
      </div>
    );
  }
}

function mapStatetoProps(state, props) {
  return {
    user: state.user,
    admins: state.admins,
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Landing);