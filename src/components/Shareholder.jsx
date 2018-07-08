import React from 'react';

export default class Shareholder extends React.Component {
  render() {
    const { title, text, image, margin, smallHeight } = this.props;
    return (
      <div className="shareholder__wrapper">
        {image ? 
          <div className="shareholder__picture">
            <img src={image} />
          </div>
          : null
        }
        <div className="shareholder__text">
          {margin ?
            <React.Fragment>
              <p className="shareholder__bold">{title}</p>
              <p className="shareholder__light">{text}</p>
            </React.Fragment>
            : <p className="shareholder__light"><span className="shareholder__bold">{title}</span>{text}</p>
          }
        </div>
        <style jsx>{`
          .shareholder__wrapper {
            width: 100vw;
            height: 450px;
            margin-bottom: 50px;
            display: flex;
            justify-content: ${image ? null : 'center'};
          }

          .shareholder__picture {
            height: 100%;
            width: 30%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .shareholder__picture img {
            width: 300px;
            height: 435px;
          }

          .shareholder__placeholder {
            background-color: gray;
            width: 300px;
            height: 435px;
          }

          .shareholder__text {
            width: 70%;
            display: flex;
            flex-direction: column;
            padding-left: 60px;
            padding-right: 110px;
            justify-content: center;
          }

          .shareholder__bold {
            font-family: GothamProBold;
            font-size: 20px;
          }

          .shareholder__light {
            font-family: GothamPro;
            font-size: 20px;
          }
        `}</style>
      </div>
    );
  }
}