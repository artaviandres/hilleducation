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
import colors from '../variables';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing__container">
        <Header />
        {/* <div className="content">
          <div
            className="wildcard"
            style={{ background: `url(${PictureBack}) 50% 50%`, backgroundSize: 100 + 'vw', backgroundRepeat: 'no-repeat' }}
          ></div>
          <div className="wildcard__content">
            <p>hey</p>
          </div>
          
        </div> */}
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
          {/* <Row center="xs">
            <Col xs={6}>
              <div className="section__text">
                <h1 className="section__text-header">Maximize TRS & SS Benefits</h1>
                <p className="section__text-paragraph">
                  If you are married or have a partner, this
                  information is vital for you to understand the ways
                  in which WEP/GPO will affect you in retirement.
                </p>
              </div>
            </Col>
            <Col xs={6}>
              <img src={Couple} className="couple__image" />
            </Col>
          </Row> */}
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
              <h1>Contact us today so that we can plan a seminar for your school district!</h1>
              <Button reverse={true}>CONTACT US</Button>
            </div>
          </div>
        </div>
        <Footer />
          {/* <Row>
            <img src={People} className="contact-image" />
            <Col xs={6} />
            <Col xs={6}>
              <div className="contactContainer">

              </div>
            </Col>
          </Row> */}
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
        `}</style>
      </div>
    );
  }
}

// background: linear-gradient(to right, ${colors.blue} , ${colors.darkBlue});
// opacity: 0.8;

{/* <div className="content"><div className="wildcard" style={{ background: `url(${key.picture}) 50% 50%` }}></div>
<div className="wildcard__content">
<h2>Título de Colección de Fotos</h2>
</div>
</div> */}


// .picture_back {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   z-index: -1000;
  //   width: 100%;
  // }