import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import BlueBackgroundImg from './BlueBackgroundImg';
import ContactUsBlock from './ContactUsBlock';
import AboutUsImage from '../assets/images/ABOUT_US.jpg';
import Check from '../assets/images/check.svg';
import HundredsOf from '../assets/images/ABOUT_US-02.svg';
import colors from '../variables';
import * as UserActions from '../actions/user';

class AboutUs extends React.Component {
  render() {
    const infoData = ["Educator in Michigan and Texas.", "Classroom teacher.", "Counselor.", "College Administrator", "Coach", "Member; Texas Teacher Retirement System.", "In the retirement planning business 20+ years.", "Focus on retirement planning for educator/school personnel."];
    return (
      <div>
        <Header selected="aboutUs" />
        <BlueBackgroundImg
          image={AboutUsImage}
          title="About Us"
          subtitle="Hill Education Associates have held hundreds of education seminars for public employees affected by WEP/GPO"
        />
        <div className="section__2">
          <img src={HundredsOf} />
        </div>
        <div className="section__3">
          <div className="section__3-picture">
            <div className="picture" />
          </div>
          <div className="section__3-info">
            <h2>Led by Dennis Hill</h2>
            <div className="divider-horizontal" />
            <ul>
              {infoData.map(item => {
                const itemPosition = infoData.indexOf(item);
                return <li key={itemPosition}><div className="check__container"><img src={Check} /></div>{item}</li>                
               }
              )}
            </ul>
          </div>
        </div>
        <div className="section__4">
          <div className="divider-blue" />
          <p>Hill Education Associates provides critical information for you to<br />
          understand how you and your spouse will be affected by WEP/GPO<br />
          and methods to better prepare for your retirement.</p>
        </div>
        <ContactUsBlock />
        <Footer />
        <style jsx>{`
          .divider-blue {
            background-color: ${colors.blue};
            width: 3px;
            height: 110px;
            margin-right: 30px;
          }

          .divider-horizontal {
            height: 2px;
            width: 60px;
            background-color: ${colors.blue};
          }

          .section__2 {
            width: 100vw;
            height: 700px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .section__2 img {
            width: 70%;
            min-width: 600px;
            max-width: 780px;
          }

          .section__3 {
            background-color: ${colors.sectionGray};
            width: 100vw;
            height: 480px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            align-items: center;
          }

          .section__3-picture {
            width: 50%;
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 50px;
          }

          .section__3-info {
            width: 50%;
            height: 100%;
            display: inline-flex;
            justify-content: center;
            flex-direction: column;
          }

          .section__3-info h2 {
            font-size: 24px;
            font-weight: 1000;
          }

          .picture {
            background-color: ${colors.noPicture};
            width: 370px;
            height: 370px;
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

          .section__4 {
            width: 100vw;
            height: 300px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .section__4 p {
            font-size: 18px;
            margin: 0;
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

export default connect(mapStatetoProps, mapDispatchtoProps)(AboutUs);