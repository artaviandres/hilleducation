import React from 'react';

import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

import {
  Accordion,
  AccordionItem,
} from 'react-accessible-accordion';

import Header from './Header';
import BlueBackgroundImg from './BlueBackgroundImg';
import Footer from './Footer';
import ContactUsBlock from './ContactUsBlock';
import Button from './Button';

import HeaAssociatesImg from '../assets/images/HEA_ASSOCIATES.jpg';
import Logo from '../assets/images/logo-hea.svg';
import Flyers from '../assets/images/flyers.svg';
import Presentations from '../assets/images/presentations.svg';
import Videos from '../assets/images/videos.svg';
import Check from '../assets/images/check.svg';

import LogoDownload from '../assets/downloadables/LOGO.zip';
import FlyersDownload from '../assets/downloadables/FLYERS.zip';
import PresentationDownload from '../assets/downloadables/PRESENTATION.key';

import colors from '../variables';

export default class HEA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      accordion: false,
    };
  }

  render() {
    const firstRow = ['Direct support from HEA Associates', 'E-flyers', 'Print flyers', 'Educational video library', 'Seminar presentations'];
    const secondRow = ['Marketing Support', 'Business Development support', 'Formula charts for calculating Pension & SS benefits', 'Webinars', 'On site seminar support'];
    const flyers = [
      {
        id: 1,
        text: 'How social security retirement benefits of millions of public school employees are affected by WEP/GPO',
      },
      {
        id: 2,
        text: 'Led by Denis Hill',
      },
      {
        id: 3,
        text: 'Are you looking for a low cost business modal that will put you in front of hundreds/thousands of investors?',
      },
      {
        id: 4,
        text: 'We provide a proven business for you to get in front on hundreds of potential clients',
      },
      {
        id: 5,
        text: 'Maximize TRS and SS benefits',
      },
      {
        id: 6,
        text: 'Agent strategy to approach school district',
      },
      {
        id: 7,
        text: 'Agent support provided by Hill Education Associates',
      },
    ];

    return (
      <div>
        <Header selected="associates" />
        <BlueBackgroundImg
          image={HeaAssociatesImg}
          title="WELCOME TO THE HEA ASSOCIATES WORKSTATION"
          subtitle="This section of the website has been designed to provide you with the tool kid you will need to successfully communicate with school administrators, principals, teachers, and other public school employees."
          width="1000px"
        />
        <div className="introduction__wrapper">
          <p className="introduction__wrapper-bold">WEP/GPO has a significant impact on all public school employees.</p>
          <p>
            As a financial advisor, you are already prepared to help guide them toward a successful financial retirement.
            Our objective is to pair your expertise with these materials to equip you with the
            knowledge and skills necessary to hold a successful educational seminar in your area.
          </p>
          <p>
            You will be able to convince school administrators of the importance of this information as well as
            accurately convey this issue to the school employees.
          </p>
          <p>
            You will also find pertinent information specific to the circumstances of your particular state. The
            impact of WEP/GPO will vary by state and, in some instances, by country.
          </p>
          <p>
            Our goal is to help you get a room full of attentive seminar attendees for you to convert into clients of your business.
          </p>
        </div>
        <div className="workstation__wrapper">
          <div className="workstation__wrapper-title">
            <h1>The workstation includes</h1>
            <div className="divider-red" />
            <div className="workstation__lists">
              <div className="workstation__first">
                <ul>
                  {firstRow.map((item) => {
                    const itemPosition = firstRow.indexOf(item);
                    return <li key={itemPosition}><div className="check__container"><img src={Check} alt="check" /></div>{item}</li>
                  })}
                </ul>
              </div>
              <div className="workstation__second">
                <ul>
                  {secondRow.map((item) => {
                    const itemPosition = secondRow.indexOf(item);
                    return <li key={itemPosition}><div className="check__container"><img src={Check} alt="check" /></div>{item}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="downloadable__wrapper">
          <div className="downloadable" style={{ flexDirection: 'column' }}>
            <img src={Logo} alt="logo" width="350px" />
            <Button click={() => window.location = LogoDownload} type="redReversed" width="250px">DOWNLOAD LOGO</Button>
          </div>
          <div className="downloadable">
            <div className="downloadable-beta__icon">
              <div
                  style={{ borderRight: 'none',  }}
                  onMouseEnter={() => this.setState({ hover: 1 })}
                  onMouseLeave={() => this.setState({ hover: null })}
                  onClick={() => window.location = FlyersDownload}
                  className="downloadable__assets-item"
                >
                  <div style={{
                    border: this.state.hover === 1 ? '2px solid' + colors.blue : '1px solid #D8D8D8',
                    boxShadow: this.state.hover === 1 ? '0' : '0 0 22px #E6E6E6'
                  }}>
                    <img src={Flyers} width="75px" alt="flyers" />
                  </div>
                </div>
            </div>
            <div className="downloadable-beta__info">
              <h3>Flyers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra
              </p>
              <div className="downloadable-beta__info-button">
                <Button type="redReversed" width="250px" click={() => this.setState({ accordion: !this.state.accordion })}>SEE ALL FLYERS {this.state.accordion === false ? <FaAngleDown size={25} /> : <FaAngleUp size={25} />}</Button>
              </div>
            </div>
          </div>
          <div className="accordion__wrapper">
            {flyers.map((item) => {
              return (
                <div
                  key={item.id}
                  className="accordion__item"
                  style={{
                    backgroundColor: item.id % 2 === 0 ? colors.sectionGray : colors.white,
                    borderBottom: item.id === flyers.length ? `1px solid ${colors.gray}` : null,
                  }}
                >
                  <p>{item.id}. {item.text} </p>
                  <div className="accordion__item-buttons">
                    <Button type="blueBorder">Preview</Button>
                    <Button type="redReversed">Download</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="downloadable">
            <div className="downloadable-beta__icon">
              <div
                  style={{ borderRight: 'none' }}
                  onMouseEnter={() => this.setState({ hover: 2 })}
                  onMouseLeave={() => this.setState({ hover: null })}
                  onClick={() => window.location = PresentationDownload}
                  className="downloadable__assets-item"
                >
                  <div style={{
                    border: this.state.hover === 2 ? '2px solid' + colors.blue : '1px solid #D8D8D8',
                    boxShadow: this.state.hover === 2 ? '0' : '0 0 22px #E6E6E6'
                  }}>
                    <img src={Presentations} width="70px" alt="presentations" />
                  </div>             
                </div>
            </div>
            <div className="downloadable-beta__info">
              <h3>Presentations</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra
              </p>
              <div className="downloadable-beta__info-button">
                <Button type="redReversed" width="250px" click={() => window.location = PresentationDownload}>DOWNLOAD</Button>
              </div>
            </div>
          </div>
          <div className="downloadable">
            <div className="downloadable-beta__icon">
              <div
                onMouseEnter={() => this.setState({ hover: 3 })}
                onMouseLeave={() => this.setState({ hover: null })}
                className="downloadable__assets-item"
                onClick={() => alert('No videos available at the moment.')}
              >
                <div style={{
                  border: this.state.hover === 3 ? '2px solid' + colors.blue : '1px solid #D8D8D8',
                  boxShadow: this.state.hover === 3 ? '0' : '0 0 22px #E6E6E6'
                }}>
                  <img src={Videos} width="60px" alt="videos" />
                </div>               
              </div>
            </div>
            <div className="downloadable-beta__info">
              <h3>Videos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra
              </p>
              <div className="downloadable-beta__info-button">
                <Button type="redReversed" width="250px" click={() => window.location = PresentationDownload}>DOWNLOAD</Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .downloadable__wrapper {
            width: 100vw;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .downloadable {
            height: 250px;
            width: 65%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid ${colors.downloadableBorder};
          }

          .downloadable-beta__icon {
            height: 100%;
            width: 25%;
          }

          .downloadable-beta__info {
            height: 100%;
            width: 75%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .downloadable-beta__info h3 {
            font-family: GothamPro;
            font-weight: 900;
            font-size: 18px;
          }

          .downloadable-beta__info p {
            font-family: GothamProLight;
            font-size: 14px;
            color: ${colors.darkGray};
          }

          .downloadable__container {
            width: 85%;
            height: 85%;
          }

          .downloadable__logo {
            width: 100%;
            height: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border: 1px solid ${colors.downloadableBorder};
            border-bottom: none;
          }

          .downloadable__logo img {
            width: 400px;
          }

          .downloadable__assets {
            height: 50%;
            width: 100%;
            display: inline-flex;
          }

          .downloadable__assets-item {
            width: 100%;
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
          }

          .downloadable__assets-item div {
            border-radius: 50%;
            -webkit-transition: all 0.25s ease;
            -moz-transition: all 0.25s ease;
            transition: all 0.20s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 110px;
            height: 110px;
          }

          .downloadable__assets-item p {
            margin-top: 15px;
          }

          .introduction__wrapper {
            width: 50%;
            min-width: 600px;
            text-align: justify;
            margin: 80px auto 80px auto;
            font-family: GothamProLight;
            font-size: 16px;
          }

          .introduction__wrapper-bold {
            font-family: GothamPro;
            font-weight: bolder;
          }

          .workstation__wrapper {
            background-color: ${colors.sectionGray};
            width: 100%;
            height: 450px;
          }

          .workstation__wrapper-title {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .workstation__wrapper h1 {
            font-size: 28px;
            font-weight: bolder;
            margin-top: 45px;
            margin-bottom: 20px;
          }

          .divider-red {
            background-color: ${colors.red};
            width: 90px;
            height: 3px;
          }

          .check__container {
            height: 20px;
            width: 20px;
            background-color: white;
            box-shadow: 0 0 3px #BDBDBD;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            border-radius: 50%;
          }

          .check__container img {
            padding-top: 2px;
            width: 15px;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 20px 0 0 0;
          }

          ul li {
            margin-bottom: 10px;
            display: inline-flex;
            align-items: center;
            width: 100%;
          }

          .workstation__lists {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 60px;
          }

          .workstation__first {
            width: 400px;
          }

          .workstation__second {
            width: 450px;
          }

          .accordion__wrapper {
            display: ${this.state.accordion === false ? 'none' : 'flex'};
            width: 100%;
            flex-direction: column;
            align-items: center;
          }

          .accordion__item {
            width: 65%;
            height: 130px;
            padding: 20px 100px;
            border-right: 1px solid ${colors.gray};
            border-left: 1px solid ${colors.gray};
          }

          .accordion__item p {
            font-size: 16px;
            font-weight: bolder;
          }

          .accordion__item-buttons {
            display: flex;
            width: 100%;
            justify-content: flex-start;
          }

          .accordion__item-buttons button {
            margin-right: 30px;
          }

          .downloadable-beta__info-button {
            width: 225px;
          }
        `}</style>
      </div>
    );
  }
}
