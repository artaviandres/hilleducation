import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div style={{ width: '100' + 'px', height: '100' + 'px', backgroundColor: 'red', marginTop: '200' + 'px', marginLeft: '200' + 'px' }} className="in-down" />
        <style>{`
          @-webkit-keyframes fadeInDown {
            from {
                opacity:0;
                -webkit-transform: translatey(-10px);
                -moz-transform: translatey(-10px);
                -o-transform: translatey(-10px);
                transform: translatey(-10px);
            }
            to {
                opacity:1;
                -webkit-transform: translatey(0);
                -moz-transform: translatey(0);
                -o-transform: translatey(0);
                transform: translatey(0);
            }
          }
          @-moz-keyframes fadeInDown {
              from {
                  opacity:0;
                  -webkit-transform: translatey(-10px);
                  -moz-transform: translatey(-10px);
                  -o-transform: translatey(-10px);
                  transform: translatey(-10px);
              }
              to {
                  opacity:1;
                  -webkit-transform: translatey(0);
                  -moz-transform: translatey(0);
                  -o-transform: translatey(0);
                  transform: translatey(0);
              }
          }
          @keyframes fadeInDown {
              from {
                  opacity:0;
                  -webkit-transform: translatey(-10px);
                  -moz-transform: translatey(-10px);
                  -o-transform: translatey(-10px);
                  transform: translatey(-10px);
              }
              to {
                  opacity:1;
                  -webkit-transform: translatey(0);
                  -moz-transform: translatey(0);
                  -o-transform: translatey(0);
                  transform: translatey(0);
              }
          }
          .in-down {
              -webkit-animation-name: fadeInDown;
              -moz-animation-name: fadeInDown;
              -o-animation-name: fadeInDown;
              animation-name: fadeInDown;
              -webkit-animation-fill-mode: both;
              -moz-animation-fill-mode: both;
              -o-animation-fill-mode: both;
              animation-fill-mode: both;
              -webkit-animation-duration: 1s;
              -moz-animation-duration: 1s;
              -o-animation-duration: 1s;
              animation-duration: 1s;
          }
        `}</style>
      </div>
    );
  }
}

export default Login;
