import React, {Component} from 'react';
import './SignUp.css';
// import passport from 'passport-facebook'
import {Link, Route} from "react-router-dom";
import SignIn from './SignIn'

class SignUp extends Component {

  signUp = () => {}

  render(props) {
    return (
      <div className="maincontainer">
        <div className="tabbed-pane">
          <div className="tabbed-pane--tabs">
            <div
              className="tabbed-pane--tab-selected tabbed-pane--_tab"
              onClick={this.signUp}>
              Sign Up
            </div>
            <div className="tabbed-pane--tab tabbed-pane--_tab" onClick={this.signIn}>

              <Link to="/SignIn" className="btn btn-default" style={{ textDecoration: 'none' }}>
                Sign In
              </Link>
            </div>

          </div>
          <div className="tabbed-pane--content">
            <div>
              <div>
                <div className="form--header--r6_0T">Create your 321 account</div>

                <div className="form--alerts--2ACem">
                  <div
                    className="alert--success--1kPKM alert--_alert--1gt-I alert--hidden--2Mlfp"></div>
                  <div className="alert--error--3iAkS alert--_alert--1gt-I alert--hidden--2Mlfp"></div>
                </div>
                <form>
                  <div className="form--form--vx8k8">
                    <div className="form-group">
                      <input
                        placeholder="First Name*"
                        className="index--text-input--ee5HP undefined"
                        type="text"/>
                      <input
                        placeholder="Last Name*"
                        className="index--text-input--ee5HP undefined"
                        type="text"/></div>
                    <div className="form-group">
                      <input
                        placeholder="Email Address*"
                        className="index--text-input--ee5HP undefined"
                        type="email"/></div>
                    <div className="form-group">
                      <input
                        placeholder="Password*"
                        className="index--text-input--ee5HP undefined"
                        type="password"/>
                      <input
                        placeholder="Confirm Password*"
                        className="index--text-input--ee5HP undefined"
                        type="password"/></div>
                    <div className="form--tos-blurb--1zCtL">
                      <span>By signing up, you agree to the 321
                        <a href="https://localhost:3000/terms-of-service">Terms of Service</a>.</span>
                    </div>
                  </div>
                  <button type="button" className="index--primary--P14pO index--_btn--9nYKH form--primary-button--1NgrB index--standard--3U4zZ" // style="cursor: pointer;"
                  >Sign Up</button>
                </form>
              </div>
              <div>
                <form method="post" action="">
                  <input
                    name="next"
                    value=""
                    type="hidden"/>
                  <input name="provider" value="" type="hidden"/></form>
                <div className="index--description--113WL">or sign up with one of these services</div>
                <div className="index--buttons--1r2XL">
                  <button type="button" className="index--body--3i32b index--_btn--9nYKH _provider-button--provider-button--6VDst index--standard--3U4zZ" // style="cursor: pointer;"
                  >
                    <div className="_provider-button--label--3kTNo">
                      <img src="/images/facebook_logo-adc2f.svg" alt=""/>Facebook</div>
                  </button>
                  {/* <button type="button" className="index--body--3i32b index--_btn--9nYKH _provider-button--provider-button--6VDst index--standard--3U4zZ" // style="cursor: pointer;"
                  >*/}
                  {/* <div className="_provider-button--label--3kTNo">}
                  */} {/* { <img src="/images/google_logo-12018.svg" alt=""/> } */}
                  <span class="text">
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                  </span>

                  {/* </div> */}
                  {/* </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Route exact path={`${this.props.match.url}/SignIn`} component={SignIn}/>
      
      </div>
      ) } 
      
      onSignIn = googleUser => {var profile = googleUser.getBasicProfile();
      var idToken = googleUser
        .getAuthResponse()
        .id_token;
      let url;

      // $('#profilename').html('Welcome ' + profile.ofa) loggedinUser = profile.U3;

      var newUser = {
        userName: profile.ofa,
        email: profile.U3,
        image: profile.Paa
      };

      // $.ajax("/api/user", {     type: "POST",     data: newUser, }).then(function()
      // {});
}

      onSignOut = () => {// var auth2 = gapi.auth2.getAuthInstance(); auth2.signOut();}

      } // passport.use(new FacebookStrategy({//   clientID: FACEBOOK_APP_ID,   clientSecret: FACEBOOK_APP_SECRET,
      // callbackURL: "http://localhost:3000/auth/facebook/callback"
      //}, // function(accessToken, refreshToken, profile, cb) {//   User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      // return cb(err, user);   });
    }

    export default SignUp;