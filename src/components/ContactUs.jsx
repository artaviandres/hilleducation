import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as emailjs from 'emailjs-com';
import FaCheck from 'react-icons/lib/fa/check';
import FaExclamation from 'react-icons/lib/fa/exclamation';
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
  state = {
    mail: '',
    name: '',
    content: '',
    growl: false,
    message: '',
    type: 'success',
  }

  submitContact = (e) => {
    e.preventDefault();
    emailjs.send("default_service","template_LdwxOUUM",{from_name: this.state.name, message_html: this.state.content, reply_to: this.state.mail}, 'user_kCRwRozcLUM6fPoa7V0hs')
    .then((success) => {
      this.setState({
        growl: true,
        message: 'Your message was sent successfully',
        type: 'success',
      });
    })
    .catch((err) => {
      this.setState({
        growl: true,
        message: 'There was an error submitting your message, please try again later.',
        type: 'danger',
      })
    })
  }

  updateState = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

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
                <div className="icon" style={{ width: 40 + 'px' }}>
                  <img src={Mail} width="20px" alt="mail" />
                </div>
                <p style={{ marginLeft: 10 + 'px' }}>Email: <br />Dhill@hilleducationassociates.com</p>
              </div>
              <div className="phone__info">
                <div className="icon">
                  <img src={Phone} width="15px" alt="phone" />
                </div>
                <p style={{ marginLeft: 10 + 'px' }}>Phone: <br />713-333-4500</p>
              </div>
            </div>
            <input type="text" placeholder="Full name" onChange={this.updateState} id="name" />
            <input type="email" placeholder="Email address" onChange={this.updateState} id="mail" />
            <textarea placeholder="How can we help you?" onChange={this.updateState} id="content" />
            <div className="growl__message" style={{
              display: this.state.growl === true ? 'inline-flex' : 'none',
              backgroundColor: this.state.type === 'success' ? '#d9ecdc' : '#F0B1B1',
              marginBottom: this.state.growl === true ? '30' + 'px' : '0',
              width: '80' + '%',
              height: '50' + 'px',
              borderRadius: '10' + 'px',
              color: this.state.type === 'success' ? '#2a552a' : '#F15D5D',
              marginLeft: '40' + 'px',
              paddingTop: '10' + 'px',
            }}>
              {this.state.type === 'success' ? <FaCheck /> : <FaExclamation />} {this.state.message}
            </div>
            <Button type="white" click={this.submitContact}>SUBMIT</Button>
          </form>
        </div>
        <div className="contact__map">
          <p>1095 Evergreen Circle, suite 200, The Woodlands, Texas 77380</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1724.7006673053786!2d-95.46479245326246!3d30.168527596611558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864736c44b9883f7%3A0x6e0e5e3efa23b1dc!2sEvergreen+Cir%2C+The+Woodlands%2C+TX+77380%2C+EE.+UU.!5e0!3m2!1ses!2scr!4v1526448586680" title="map" style={{ width: 100 + 'vw', height: 500 + 'px' }} frameBorder="0"></iframe>
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
            height: ${this.state.growl === true ? '570px' : '500px'};
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
            width: 70%;
          }

          .mail__info p {
            font-size: 11px;
            margin-bottom: 0;
            padding-left: 5px;
          }

          .icon {
            height: 40px !important;
            width: 40px !important;
            background-color: white;
            box-shadow: 0 0 3px #BDBDBD;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }

          .icon img {
            padding-top: 2px;
          }

          .phone__info {
            display: inline-flex;
            align-items: center;
            justify-items: flex-end;
            height: 100%;
            width: 200px !important;
            margin-left: 10px;
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

          .growl__message {
            justify-content: center;
            align-content: center;
          }

          .growl__message svg {
            margin-top: 3px;
            margin-right: 5px;
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
