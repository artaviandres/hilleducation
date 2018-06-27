import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import BlueBackgroundImg from './BlueBackgroundImg';
import ContactUsBlock from './ContactUsBlock';
import AboutUsImage from '../assets/images/ABOUT_US.jpg';
import Check from '../assets/images/check.svg';
import HundredsOf from '../assets/images/About_us_red.svg';
import colors from '../variables';
import * as UserActions from '../actions/user';

class AboutUs extends React.Component {
  render() {
    const infoData = ["Educator in Michigan and Texas", "Classroom teacher", "Counselor", "College Administrator", "Coach", "Member; Texas Teacher Retirement System", "In the retirement planning business 20+ years", "Emphasis on retirement planning for educators/school personnel"];
    return (
      <div>
        <Header selected="aboutUs" />
        <BlueBackgroundImg
          image={AboutUsImage}
          title="About Us"
          subtitle="Hill Education Associates is a growing national network of financial
          advisors who have made it their mission to educate public
          employees about the impact of WEP/GPO on their retirement."
        />
        <div className="section__2">
          <img src={HundredsOf} alt="hundreds" />
        </div>
        <div className="section__largeText">
          <p>
            Dennis Hill has spent a lifetime guiding, coaching, and leading people to better themselves. As a school counselor in the 70’s and 80’s, he was dedicated to helping young people find their way in life. As a wrestling coach, he distinguished himself as a builder of champions, both of teams and individuals, culminating in several state championships in the state of Michigan. In 1973, Dennis was honored to be selected as “Coach of the Year” by the Michigan High School Coaches Association.
            <br /><br />
            For more than 20 years, Dennis has been dedicated to helping people prepare for retirement, with a special focus on public educators. Dennis and his associates have held hundreds of free education seminars for thousands of public employees over a period of more than 10 years. If you ask Dennis, he is most proud of his love of 55 years, Virginia, their four children, and 11 grandchildren. 
          </p>
        </div>
        <div className="section__3">
          <h2>Led by Dennis Hill</h2>
          <div className="divider-horizontal" />
          <div className="section__3-wrapper">
            <div className="section__3-picture">
              <div className="picture" />
            </div>
            <div className="section__3-info">
              <ul>
                {infoData.map(item => {
                  const itemPosition = infoData.indexOf(item);
                  return <li key={itemPosition}><div className="check__container"><img src={Check} alt="check" /></div>{item}</li>                
                }
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="section__4">
          <div className="divider-red" />
          <p>Hill Education Associates provides critical information for <br />
          public school employees and their spouses to understand how they will <br />
          be affected by WEP/GPO and methods to better prepare for retirement.</p>
        </div>
        <ContactUsBlock />
        <Footer />
        <style jsx>{`
          .divider-red {
            background-color: ${colors.red};
            width: 3px;
            height: 110px;
            margin-right: 30px;
          }

          .divider-horizontal {
            height: 2px;
            width: 60px;
            margin-bottom: 50px;
            background-color: ${colors.red};
          }

          .section__2 {
            width: 100vw;
            height: 700px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .section__2 img {
            width: 50%;
            margin-top: -100px;
            min-width: 400px;
            max-width: 780px;
          }

          .section__3 {
            background-color: ${colors.sectionGray};
            width: 100vw;
            height: 550px;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .section__3-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
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

          .section__largeText {
            width: 60%;
            min-width: 600px;
            text-align: justify;
            margin: -80px auto 80px auto;
            font-family: GothamProLight;
            font-size: 16px;
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