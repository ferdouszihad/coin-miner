import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthContextProvider = (props = {}) => {
  const { children } = props || {};

  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  console.log(user);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const removeUser = (user) => {
    return deleteUser(user);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("office e dhukar shomoy amar kache ja thakbe", currentUser);
      if (currentUser) {
        fetch(`http://localhost:5000/users/${currentUser?.email}`)
          .then((res) => res.json())
          .then((databaseData) => {
            const myUsersAllData = { ...currentUser, ...databaseData };
            setUser(myUsersAllData);
          });
      } else {
        setUser(currentUser);
      }
      //jdi user thake taile ami amar database theke baki dta niye eshe user e diye dibo
      setLoading(false);
    });
    return () => {
      unscubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    setUser,
    logOut,
    googleSignIn,
    updateUser,
    removeUser,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};
export default AuthContextProvider;
