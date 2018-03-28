import React from 'react';
import Header from '../components/Header';
import PictureBack from '../assets/images/feature_back.jpg';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div
            className="wildcard"
            style={{ background: `url(${PictureBack}) 50% 50%`, backgroundSize: 100 + 'vw', backgroundRepeat: 'no-repeat' }}
          ></div>
          <div className="wildcard__content">
            <p>hey</p>
          </div>
        </div>
        <style jsx>{`
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