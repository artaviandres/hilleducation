import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FaCircle from 'react-icons/lib/fa/circle';
import Quotes from '../assets/images/Quotes-01.svg';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PictureBack from '../assets/images/feature_back.jpg';
import Couple from '../assets/images/couple.jpg';
import People from '../assets/images/people.jpg';
import Logo from '../assets/images/logo-hea.svg';
import Stats from '../assets/images/stats.svg';
import colors from '../variables';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing__container">
        <Header />
        <div className="main__section">
          <h1>
            Protect your retirement savings
          </h1>
          <p>
            Social Security benefits of million of public school employees accross <br />
            America are negatively affected by social security law (WEP/GPO).
          </p>
          <Button>ABOUT US</Button>
          <div className="main__section--block">
            <div className="main__section--block_1">
              <img src={Stats} className="stats" />
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
        <Grid fluid>
          <Row center="xs">
            <Col xs={12}>
              <h1 style={{ fontSize: 40 + 'px' }}>Testimonials</h1>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6}>
              <div className="quotesContainer">
                <img src={Quotes} width="7%" />
                <br />
                <p style={{ color: colors.darkGray, width: 50 + '%', margin: '25px auto 0 auto' }}>
                  Teachers and other school personnel will gain
                  valuable knowledge regarding WEP/GPO in order to 
                  plan for their future and retirement in this seminar.
                </p>
                <hr />
                <p style={{ color: colors.black, width: 50 + '%', margin: '5px auto 0 auto' }}>
                  Jan Crow, retired, Assistant Principal;<br />
                  Cy Fair ISD
                </p>
              </div>
            </Col>
            <Col xs={6}>
              <div className="quotesContainer">
                <img src={Quotes} width="7%" />
                <br />
                <p style={{ color: colors.darkGray, width: 50 + '%', margin: '25px auto 0 auto' }}>
                Teachers and all other school personnel will gain 
                valuable knowledge regarding WEP/GPO in order to 
                plan for their future and retirement in this seminar. 
                </p>
                <hr />
                <p style={{ color: colors.black, width: 50 + '%', margin: '5px auto 0 auto' }}>
                  Jan Crow, retired, Assistant Principal;<br />
                  Cy Fair ISD
                </p>
              </div>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <div className="dotsContainer">
                <FaCircle size="11" color={colors.black} /><FaCircle size="11" color={colors.lightGray} /><FaCircle size="11" color={colors.lightGray} />
              </div>
            </Col>
          </Row>
        </Grid>
        <div className="contactContainer">
          <div className="contactContainer_1" />
          <div className="contactContainer_2">
            <div>
              <h1>Contact us today so that<br /> we can plan a seminar<br /> for your school district!</h1>
              <Button reverse={true}>CONTACT US</Button>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`

          .landing__container {
            width: 100vw;
            overflow-x: hidden;
          }
          .content {
            float: left;
            width: 100%;
            margin-bottom: 50px;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 100;
            height: 800px;
          }
          .wildcard {
            position: absolute;
            height: 800px;
            width: 100%;
            filter: blur(5px) brightness(50%);
            -webkit-filter: blur(5px) brightness(50%);
            z-index: 0;
          }
          .wildcard__content {
            overflow: hidden;
            position: relative;
            z-index: 10;
          }
          .couple__image {
            width: 100%;
            height: 450px;
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

          .quotesContainer {
            
          }

          .dotsContainer {
            margin-top: 30px;
          }

          .dotsContainer svg {
            margin-right: 5px;
            cursor: pointer;
          }

          .contact-image {
            height: 500px;
            width: 100%;
            margin-top: 50px;
          }

          .contactContainer {
            height: 500px;
            width: 100%;
            background-image: url("${People}");
            background-size: 100% 500px;
            display: flex;
            margin-top: 30px;
          }

          .contactContainer_1 {
            height: 100%;
            width: 50%;
          }

          .contactContainer_2 {
            height: 100%;
            width: 50%;
            background-color: rgba(11, 92, 206, 0.66);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .contactContainer_2 h1 {
            color: ${colors.white};
            padding: 0 85px;
            font-weight: 500;
          }

          .section {
            display: flex;
            width: 100%;
            height: 500px;
            margin-top: 200px;
          }

          .section__1 {
            width: 50%;
            height: 100;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .section__2 {
            width: 50%;
            height: 100;
            background-image: url("${Couple}");
            background-size: 100% 500px;
          }

          .main__section {
            display: flex;
            flex-direction: column;
            height: 700px;
            width: 100%;
            background-image: url("${PictureBack}");
            background-size: 100% 700px;
            justify-content: center;
            align-items: center;
          }

          .main__section h1 {
            color: white;
            font-weight: 550;
            font-size: 3em;
            margin: 0;
          }

          .main__section p {
            color: white;
            font-weight: 200;
            font-size: 20px;
          }

          .main__section--block {
            height: 200px;
            width: 60%;
            min-width: 500px;
            background-color: white;
            position: absolute;
            margin-top: 350px;
            box-shadow: 1px 1px 18px #888888;
            display: flex;
          }

          .main__section--block_1 {
            height: 100%;
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .stats {
            height: 70px;
            width: 70px;
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
        `}</style>
      </div>
    );
  }
}
