import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FaCircle from 'react-icons/lib/fa/circle';
import Quotes from '../assets/images/Quotes-01.svg';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import Growl from './Growl';
import PictureBack from '../assets/images/feature_back.jpg';
import Couple from '../assets/images/couple.jpg';
import Logo from '../assets/images/logo-hea.svg';
import Stats from '../assets/images/stats.svg';
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
      showModal: false,
      growl: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }

  logout = () => {
    this.props.actions.logout();
  }

  onGrowlClose = () => {
    this.setState({
      growl: false,
    });
  }

  render() {
    return (
      <div className="landing__container">
        <Header
          onToggleModal={() => this.openModal()}
          userData={this.props.user}
          logout={() => this.logout()}
        />
        <Growl type="danger" isEnabled={this.state.growl} close={() => this.onGrowlClose()}>
          testing testing testing testing testing testing testing testing<br /> testing testing testing testing testing testing testing testing 
        </Growl>
        <div className="main__section">
          <div className="in-down">
            <h1>
              Protect your retirement savings
            </h1>
            <p>
              Social Security benefits of million of public school employees accross <br />
              America are negatively affected by social security law (WEP/GPO).
            </p>
            <Button>ABOUT US</Button>
          </div>
          <div
            className="main__section--block"
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
          >
            <div className="main__section--block_1">
              <div>
                <img src={Stats} className="stats" />
              </div>
            </div>
            <div className="main__section--block_2">
              <p>Our national network of associates provides free seminars<br /> for public school employees to inform and educate you<br /> about the impact of WEP/GPO on your retirement income<br /> so that you can better prepare for retirement.</p>
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
          <div className="testimonials">
            <div className="testimonials__wrapper wrapper__1">
              <div className="testimonials__card">
                <img src={Quotes} />
                <p>Teachers and all other school personnel will gain<br /> valuable knowledge regarding WEP/GPO in order to<br /> plan for their future and retirement in this seminar. </p>
                <div className="testimonials__card-hr" />
                <p className="testimonials__author">Jan Crow, retired, Assistant Principal; <br />Cy Fair ISD</p>
              </div>
            </div>
            <div className="testimonials__wrapper wrapper__2">
              <div className="testimonials__card">
                <img src={Quotes} />
                <p>Teachers and all other school personnel will gain<br /> valuable knowledge regarding WEP/GPO in order to<br /> plan for their future and retirement in this seminar. </p>
                <div className="testimonials__card-hr" />
                <p className="testimonials__author">Jan Crow, retired, Assistant Principal; <br />Cy Fair ISD</p>
              </div>
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
        {/* CONTACT US BLOCK!! */}
        <Modal
          show={this.state.showModal}
          onToggleModal={() => this.closeModal()}
          onLogin={this.props.actions.addUser}
        />
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
            background-size: 100% 500px;
          }

          .main__section {
            display: flex;
            flex-direction: column;
            height: 600px;
            width: 100%;
            background-image: url("${PictureBack}");
            background-size: 100% 600px;
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
            height: 200px;
            width: 50%;
            min-width: 500px;
            max-width: 720px;
            background-color: white;
            position: absolute;
            margin-top: 305px;
            box-shadow: 0 0 18px #BDBDBD;
            display: flex;
          }

          .main__section--block_1 {
            height: 100%;
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
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
          }

          .stats {
            height: 60px;
            width: 60px;
          }

          .main__section--block_2 {
            height: 100%;
            width: 70%;
            display: flex;
            align-items: center;
          }

          .main__section--block_2 p {
            color: black;
            font-size: 16px;
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

          .testimonials__card {
            background-color: #FCFCFC;
            height: 75%;
            width: 420px;
            box-shadow: 0 0 20px #E6E6E6;
            padding: 40px;
          }

          .testimonials__card img {
            width: 45px;
          }

          .testimonials__card p {
            font-size: 14px;
            font-weight: 100;
          }

          .testimonials__card-hr {
            width: 40px;
            height: 1px;
            margin-top: 50px;
            background-color: black;
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
    user: state.user
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Landing);