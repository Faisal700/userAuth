import React, { Component } from "react"
import * as firebase from 'firebase'
import fire from '../config/Fire'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class Blog extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    fire.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => fire.auth().signOut()}>Sign out!</button>
            <h1>Welcome {fire.auth().currentUser.displayName}</h1>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={fire.auth()}
          />
        )}
      </div>
    )
  }
}

export default Blog