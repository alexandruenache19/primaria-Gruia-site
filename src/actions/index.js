  import {
    authRef,
    provider,
    databaseRef,
    storageRef
  } from "../config/firebase";

  export const submitDocument = (file, category, subCategory) => dispatch => {
    const storage = storageRef.ref('/documents');
    const categoriesRef = databaseRef.ref('/category').child(category);
    const subCategoryRef = categoriesRef.child(subCategory);

    const uploadTask = storage.child(category).child(subCategory).put(file, { contentType: file.type });

    uploadTask.then((snapshot) => {
      subCategoryRef.child('documents').push(snapshot.downloadURL);
    });
  };

  export const retrieveDocuments = (category, subCategory) => dispatch => {
    const categoriesRef = databaseRef.ref('/category').child(category);
    const subCategoryRef = categoriesRef.child(subCategory);

    subCategoryRef.child('documents').on('value', (snapshot) => {
      const documents = snapshot.val();
      if(documents) {
        console.log("Retrived:",documents);
        dispatch({
          type: "RETRIEVE_DOCUMENTS",
          payload: documents
        })
      } else {
        dispatch({
          type: "RETRIEVE_DOCUMENTS",
          payload: null
        })
      };
    });
  };

  export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: "FETCH_USER",
          payload: user
        });
      } else {
        dispatch({
          type: "FETCH_USER",
          payload: null
        });
      }
    });
  };

  export const signIn = () => dispatch => {
    authRef
      .signInWithPopup(provider)
      .then(result => {
        // Check if user signed in with @satalia email.
        if (result.user.email.includes("@")) {
          console.log("valid email");
        } else {
          console.log("not a valid email");
          // Sign user out automatically if the email is not correct
          authRef
            .signOut()
            .then(() => {
              // Sign-out successful.
              window.alert('Please sign in with a valid email. :)');
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  export const signOut = () => dispatch => {
    authRef
      .signOut()
      .then(() => {
        console.log("Sign-out successful.")
      })
      .catch(error => {
        console.log(error);
      });
  };
