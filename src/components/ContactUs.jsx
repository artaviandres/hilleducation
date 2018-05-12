import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import BlueBackgroundImg from './BlueBackgroundImg';
import ContactUsImage from '../assets/images/CONTACT_US.jpg';
import Mail from '../assets/images/mail.svg';
import Phone from '../assets/images/phone.svg';
import colors from '../variables';
import * as UserActions from '../actions/user';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <Header selected="contactUs" />
        <BlueBackgroundImg
          image={ContactUsImage}
          title="Contact us"
          subtitle="Feel free to get in touch with us today so that we can plan a seminar for your school district!"
        />
        <div className="contact__form">
          <form>
            <div className="contact__form-info">
              <div className="mail__info">
                <div className="icon">
                  <img src={Mail} width="20px" />
                </div>
                <p>Email: DennisHill@hea.net</p>
              </div>
              <div className="phone__info">
                <div className="icon">
                  <img src={Phone} width="15px" />
                </div>
                <p>Phone: 71 3333 4500</p>
              </div>
            </div>
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="How can we help you?" />
            <Button type="reversed">SUBMIT</Button>
          </form>
        </div>
        <div className="contact__map">
          <p>333 Grogans Mill, The Woodlands, Texas 77380</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.8578284886758!2d-95.47263858477267!3d30.15548048184199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864736b9031b05b7%3A0x79124dd4b087135c!2sGrogans+Mill+Rd%2C+Spring%2C+TX+77380%2C+EE.+UU.!5e0!3m2!1ses!2scr!4v1525044822818" style={{ width: 100 + 'vw', height: 500 + 'px' }} frameBorder="0" allowFullScreen></iframe>
        </div>
        <Footer />
        <style jsx>{`
          .section__1 {
            width: 100vw;
            height: 480px;
            background: url(${ContactUsImage});
            background-size: 100%;
            background-repeat: no-repeat;
            display: inline-flex;
            align-items: center;
            padding-left: 200px;
          }

          .section__1-text {
            display: inline-flex;
            flex-direction: column;
            color: white;
          }

          .divider {
            background-color: white;
            width: 3px;
            height: 150px;
            margin-right: 30px;
          }

          .contact__form {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 600px;
          }

          .contact__form form {
            width: 550px;
            height: 500px;
            box-shadow: 0 0 30px ${colors.gray};
            padding: 20px 60px;
          }

          .contact__form-info {
            height: 75px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 30px;
          }

          .mail__info {
            display: inline-flex;
            align-items: center;
            height: 100%;
            width: 50%;
          }

          .mail__info p {
            font-size: 12.3px;
            margin-bottom: 0;
          }

          .icon {
            height: 40px;
            width: 40px;
            background-color: white;
            box-shadow: 0 0 3px #BDBDBD;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            border-radius: 50%;
          }

          .icon img {
            padding-top: 2px;
          }

          .phone__info {
            display: inline-flex;
            align-items: center;
            height: 100%;
            width: 50%;
            margin-left: 35px;
          }

          .phone__info p {
            font-size: 12px;
            margin-bottom: 0;
          }

          .contact__form form input {
            width: 100%;
            height: 40px;
            background-color: ${colors.inputBg};
            color: ${colors.inputGray};
            border: none;
            margin-bottom: 20px;
            padding-left: 20px;
          }

          .contact__form form input::placeholder {
            color: ${colors.inputGray};
          }

          .contact__form form input:focus {
            outline: none;
          }

          .contact__form form textarea {
            width: 100%;
            height: 150px;
            resize: none;
            background-color: ${colors.inputBg};
            color: ${colors.inputGray};
            border: none;
            margin-bottom: 15px;
            padding-left: 20px;
            padding-top: 15px;
          }

          .contact__form form textarea:focus {
            outline: none;
          }

          .contact__form form textarea::placeholder {
            color: ${colors.inputGray};
          }

          .contact__map {
            width: 100vw;
            display: inline-flex;
            align-items: center;
            flex-direction: column;
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

export default connect(mapStatetoProps, mapDispatchtoProps)(ContactUs);
