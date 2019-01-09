import {
  authRef,
  provider,
  databaseRef,
  storageRef,
  categoriesRef
} from '../config/firebase'

export const submitDocument = (category, subCategory, url, pdfName, currentTime) => dispatch => {
  categoriesRef
    .child(category)
    .child(subCategory)
    .child('documents')
    .push({
      name: pdfName,
      url: url,
      timestamp: currentTime
    })
}

export const retrieveDocuments = (category) => dispatch => {
  categoriesRef
    .child(category)
    .on('value', snapshot => {
      dispatch({
        type: 'RETRIEVE_DOCUMENTS',
        payload: snapshot.val()
      })
    })
}

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: 'FETCH_USER',
        payload: user
      })
    } else {
      dispatch({
        type: 'FETCH_USER',
        payload: null
      })
    }
  })
}

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {
      if (result.user.email.includes('@')) {
        console.log('valid email')
      } else {
        console.log('not a valid email')
        // Sign user out automatically if the email is not correct
        authRef
          .signOut()
          .then(() => {
            // Sign-out successful.
            window.alert('Please sign in with a valid email. :)')
          })
          .catch(error => {
            console.log(error)
          })
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      console.log('Sign-out successful.')
    })
    .catch(error => {
      console.log(error)
    })
}
