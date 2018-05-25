import React from 'react';
import FaCircle from 'react-icons/lib/fa/circle';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import Growl from './Growl';
import Testimonial from './Testimonial';
import ContactUsBlock from './ContactUsBlock';
import PictureBack from '../assets/images/feature_back.jpg';
import Couple from '../assets/images/couple.jpg';
import Stats from '../assets/images/stats.svg';
// import LandingVideo from '../assets/landing.mp4';
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
    };
  }

  onRenderTestimonials = () => {
    const { activeDot } = this.state;
    if (activeDot === 1) {
      return (
        <React.Fragment>
          <div className="testimonials__wrapper wrapper__1">
            <Testimonial
              text="You were able to help plan around the portion of social security that was lost due to my Teacher Retirement plan. Thanks for all your help!"
              author="David Schuelke"
              subAuthor="Tomball ISD Assistant Superintendent, retired"
            />
          </div>
          <div className="testimonials__wrapper wrapper__2">
            <Testimonial
              text="Extremely important information to know"
              author="Nancy Philbrick, Klein Collins"
              subAuthor="School Secretary"
            />
          </div>
        </React.Fragment>
      );
    } else if (activeDot === 2) {
      return (
        <React.Fragment>
          <div className="testimonials__wrapper wrapper__1">
            <Testimonial
              text="I would recommend this seminar to teachers and faculty!"
              author="Paula Alexander"
              subAuthor="Krimmel Intermediate, teacher"
            />
          </div>
          <div className="testimonials__wrapper wrapper__2">
            <Testimonial
              text="I learned a lot about retirement and social security that I was unaware of"
              author="James Fobbs"
              subAuthor="Wunderlich Elementary, Administrator"
            />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="testimonials__wrapper wrapper__1">
            <Testimonial
              text="I gained more knowledge than I expected from the seminar. The information is extremely important for public employees to know!"
              author="Otila Gonzales"
              subAuthor="Klein Oak High School, AP Secretary"
            />
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="landing__container">
        <Header
          onToggleModal={() => this.openModal()}
          logout={() => this.logout()}
          selected="home"
          transparent
        />
        <div className="main__section">
        {/* video */}
          <div
            className="main__section--block"
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >
            <div className="main__section--block_1">
              <div>
                <img src={Stats} className="stats" alt="stats" />
              </div>
            </div>
            <div className="main__section--block_2">
              <h2>Social Security benefits of millions of public school employees across America are negatively affected by social security law (WEP/GPO).</h2>
              <p>Our national network of associates provides free seminars for public school employees to inform and educate you about the impact of WEP/GPO on your retirement income so that you can better prepare for retirement.</p>
              <Button type="white"><a href="/aboutUs" style={{ marginTop: 15 + 'px' }}>ABOUT US</a></Button>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__1">
            <div>
              <h1 className="section__text-header">Maximize TRS <br />& SS Benefits</h1>
              <p className="section__text-paragraph">
                If you are married or have a partner, this<br />
                information is vital for you to understand the ways<br />
                in which WEP/GPO will affect you in retirement.
              </p>
            </div>
          </div>
          <div className="section__2" />
        </div>
        <div className="testimonialsContainer">
          <h1>Testimonials</h1>
          <div className="testimonials__underline" />
            <div>
              <div className="testimonials">
                {this.onRenderTestimonials()}
              </div>
            </div>
          <div className="dotsContainer">
            <a onClick={() => this.setState({ activeDot: 1 })}>
              <FaCircle size={12} color={this.state.activeDot === 1 ? '#4D4D4D' : '#BFBFBF'} />
            </a>
            <a onClick={() => this.setState({ activeDot: 2 })}>
              <FaCircle size={12} color={this.state.activeDot === 2 ? '#4D4D4D' : '#BFBFBF'} />
            </a>
            <a onClick={() => this.setState({ activeDot: 3 })}>
              <FaCircle size={12} color={this.state.activeDot === 3 ? '#4D4D4D' : '#BFBFBF'} />
            </a>
          </div>
        </div>
        <ContactUsBlock />
        <Footer />
        <style jsx>{`
          .landing__container {
            width: 100vw;
            overflow-x: hidden;
          }
          .section__text {
            text-align: left;
            width: 100%;
          }

          .section__text-header {
            font-size: 40px;
          }

          .section__text-paragraph {
            color: ${colors.darkGray};
            font-weight: 200;
            font-size: 18px;
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

          .contact-image {
            height: 500px;
            width: 100%;
            margin-top: 50px;
          }

          .section {
            display: flex;
            width: 100%;
            height: 500px;
            margin-top: 180px;
            background-color: ${colors.sectionGray};
          }

          .section__1 {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .section__2 {
            width: 50%;
            height: 100%;
            background-image: url("${Couple}");
            background-size: 100% 100%;
          }

          .main__section {
            display: flex;
            flex-direction: column;
            height: 670px;
            width: 100%;
            justify-content: center;
            align-items: center;
          }

          .main__section h1 {
            color: white;
            font-weight: 1000;
            font-size: 3em;
            margin: 0;
          }

          .main__section p {
            color: white;
            font-weight: 100;
            font-size: 20px;
          }

          .main__section--block {
            height: 300px;
            width: 100%;
            min-width: 500px;
            max-width: 900px;
            background-color: white;
            position: absolute;
            margin-top: 335px;
            box-shadow: 0 0 18px #BDBDBD;
            display: flex;
            flex-direction: column;
          }

          .main__section--block_1 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: -60px;
          }

          .main__section--block_1 div {
            border-radius: 50%;
            border: ${this.state.hover ? '2px solid' + colors.blue : '1px solid #D8D8D8'};
            box-shadow: ${this.state.hover ? '0' : '0 0 22px #E6E6E6'};
            -webkit-transition: all 0.25s ease;
            -moz-transition: all 0.25s ease;
            transition: all 0.20s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 110px;
            height: 110px;
            background-color: white;
          }

          .stats {
            height: 60px;
            width: 60px;
          }

          .main__section--block_2 {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .main__section--block_2 a {
            border: none;
            color: inherit;
            height: 100%;
            padding: 0;
          }

          .main__section--block_2 h2 {
            font-size: 18px;
            font-family: GothamProBold;
            text-align: center;
            margin-top: 25px;
            padding: 0 30px;
            text-transform: uppercase;
          }

          .main__section--block_2 p {
            color: black;
            font-size: 16px;
            font-weight: 100;
            text-align: center;
            padding: 0 100px;
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

          video {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1000;
            width: 100% !important;
            min-width: 1300px;
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