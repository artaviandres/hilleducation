import React from 'react';

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

import LogoDownload from '../assets/downloadables/LOGO.zip';
import FlyersDownload from '../assets/downloadables/FLYERS.zip';
import PresentationDownload from '../assets/downloadables/PRESENTATION.key';

import colors from '../variables';

export default class HEA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
    };
  }

  render() {
    return (
      <div>
        <Header selected="associates" />
        <BlueBackgroundImg
          image={HeaAssociatesImg}
          title="HEA Associates"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pharetra"
        />

        {/* border: ${this.state.hover ? '2px solid' + colors.blue : '1px solid #D8D8D8'};
            box-shadow: ${this.state.hover ? '0' : '0 0 22px #E6E6E6'}; */}
        <div className="downloadable__wrapper">
          <div className="downloadable__container">
            <div className="downloadable__logo">
              <img src={Logo} alt="logo" />
              <Button click={() => window.location = LogoDownload} type="reversed" width="250px">DOWNLOAD LOGO</Button>
            </div>
            <div className="downloadable__assets">
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
                <p>Flyers</p>
              </div>
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
                <p>Presentations</p>                
              </div>
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
                <p>Videos</p>                
              </div>
            </div>
          </div>
        </div>
        <ContactUsBlock />
        <Footer />
        <style jsx>{`
          .downloadable__wrapper {
            width: 100vw;
            height: 650px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
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
            width: 33.4%;
            height: 100%;
            border: 1px solid ${colors.downloadableBorder};
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
        `}</style>
      </div>
    );
  }
}
