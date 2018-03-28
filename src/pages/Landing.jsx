import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FaQuote from 'react-icons/lib/fa/quote-left';
import Header from '../components/Header';
import PictureBack from '../assets/images/feature_back.jpg';
import Couple from '../assets/images/couple.jpg';
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
        <Grid fluid>
          <Row center="xs">
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
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <h1 style={{ fontSize: 50 + 'px' }}>Testimonials</h1>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={6}>
              <FaQuote color={colors.blue} size={60} />
              <br />
              <p style={{ color: colors.darkGray }}>
                Teachers and other school personnel will gain <br />
                valuable knowledge regarding WEP/GPO in order to <br />
                plan for their future and retirement in this seminar
              </p>
            </Col>
            <Col xs={6}>
              <FaQuote color={colors.blue} size={60} />
            </Col>
          </Row>
        </Grid>
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
            height: 600px;
          }

          .section__text {
            text-align: left;
            width: 100%;
          }

          .section__text-header {
            font-size: 50px;
            margin: 20vh auto 0 auto;
            width: 330px;
          }

          .section__text-paragraph {
            color: ${colors.darkGray};
            margin: 15px auto 0 auto;
            width: 390px;
            font-weight: 200;
            font-size: 18px;
          }
        `}</style>
      </div>
    );
  }
}


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