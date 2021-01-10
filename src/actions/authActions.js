import firebase from "../firebase";

//2. register
//3. catchValue
//4. logout
//5. checkActiveSession

//Actions Creators
const setUser = (userObj) => {
  //Una vez que el usuario inicie sesión guardarmos los datos del usuario en el store
  return {
    type: "SET_USER",
    userObj,
  };
};

export const login = (provider, email, password) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (provider === "email") {
          let { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
          console.log(user);
          dispatch(setUser(user));
        } else {
          if (provider === "google") {
            let googleProvider = new firebase.auth.GoogleAuthProvider();
            let { user } = await firebase
              .auth()
              .signInWithPopup(googleProvider);
            console.log(user);
            dispatch(setUser(user));
            console.log(user);
          }
          if(provider === "facebook"){
              let facebookProvider = new firebase.auth.FacebookAuthProvider();
              let { user } = await firebase
                .auth()
                .signInWithPopup(facebookProvider);
            console.log(user);
            dispatch(setUser(user));
            console.log(user);
          }
        }
        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
};

export const Register = (email, password, name, lastname, namec) => {
  return (dispatch, state) => {
    return new Promise(async (resolve, reject) => {
      try {
        let { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        let userupdt = firebase.auth().currentUser;
        userupdt.updateProfile({
          displayName: name + "  " + lastname,
          photoURL:
            "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
        });
        postNewUsser(email, name, lastname, user.uid);
        dispatch(setUser(user));

        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
};
export const forgotPassword = (email) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      try {
        var auth = firebase.auth();
        await auth.sendPasswordResetEmail(email);
        resolve(true);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
};

export const logout = (sesionactive) => {
  firebase.auth().signOut();

  return {
    type: "LOGOUT_SYSTEM",
    sesionactive,
  };
};

export const checkActiveSession = (sesionactive) => {
  return {
    type: "CHECK_ACTIVE_SESSION",
    sesionactive,
  };
};

export const postNewUsser = async (email, name, lastname, uid) => {
  let response = await fetch(
    `https://academlo-whats.herokuapp.com/api/v1/users`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: name,
        lastName: lastname,
        email: email,
        uid: uid,
        username: name + " " + lastname,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
      }),
    }
  );
  let results = await response.json();
  console.log(results);
  return results;
};