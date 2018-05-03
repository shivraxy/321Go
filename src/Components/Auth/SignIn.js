import React, {Component} from 'react';
import './SignIn.css';
// import passport from 'passport-facebook'
import {Link, Route} from "react-router-dom";
import SignUp from './SignUp'

class SignIn extends Component {

  render() {
    return (
      <div className="maincontainer">
        <div className="tabbed-pane">
          <div className="tabbed-pane--tabs">
            <div className="tabbed-pane--tab tabbed-pane--_tab" onClick={this.signUp}>
            <Link to="/SignUp" className="btn btn-default" style={{ textDecoration: 'none' }}>
            Sign Up
              </Link>
            
            </div>
            <div className="tabbed-pane--tab-selected tabbed-pane--_tab" onClick={this.signIn}>Sign In</div>
          </div>
          <div className="tabbed-pane--content">
            <div>
              <div>
              <div class="form--header">Sign in to your account</div>

                <div className="form--alerts">
                  <div className="alert--success alert--_alert--1gt-I alert--hidden"></div>
                  <div className="alert--error alert--_alert--1gt-I alert--hidden"></div>
                </div>
                <form>
                  <div className="form--form">
                    <div className="form-group">
                      <input
                        placeholder="Email Address*"
                        className="index--text-input undefined"
                        type="email"/></div>
                    <div className="form-group">
                      <input
                        placeholder="Password*"
                        className="index--text-input undefined"
                        type="password"/>
                      <button type="button" className="index--primary index--_btn form--primary-button index--standard"
                  >Login</button>
                  </div>
                  </div>
                </form>
              </div>
              <div>
                <form method="post" action="/Login">
                  <input
                    name="next"
                    value="authenticated"
                    type="hidden"/>
                  <input name="provider" value="" type="hidden"/></form>
                <div className="index--buttons">
                  {/* <button type="button" className="index--body index--_btn _provider-button--provider-button index--standard" // style="cursor: pointer;"
                  >
                    <div className="_provider-button--label--3kTNo">
                      <img src="/images/facebook_logo-adc2f.svg" alt=""/>Facebook</div>
                  </button> */}
                  {/* <button type="button" className="index--body--3i32b index--_btn--9nYKH _provider-button--provider-button--6VDst index--standard--3U4zZ" // style="cursor: pointer;"
                  >*/}
                    {/* <div className="_provider-button--label--3kTNo">} */}
                      {/* { <img src="/images/google_logo-12018.svg" alt=""/> } */}
                      <span class="text"><div class="g-signin2" data-onsuccess="onSignIn"></div> </span>
                      
                    {/* </div> */}
                  {/* </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Route exact path={`${this.props.match.url}/SignUp`} component={SignUp}/>
      </div>
    )
  }

  onSignIn = googleUser => {
    var profile = googleUser.getBasicProfile();
    var idToken = googleUser.getAuthResponse().id_token;
    let url;

    // $('#profilename').html('Welcome ' + profile.ofa)
    // loggedinUser = profile.U3;

    var newUser = {
        userName: profile.ofa,
        email: profile.U3,
        image: profile.Paa
    };

    // $.ajax("/api/user", {
    //     type: "POST",
    //     data: newUser,
    // }).then(function() {});

}

onSignOut = () => {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut();
}

}



export default SignIn;