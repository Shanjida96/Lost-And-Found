import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // useEffect(()=>{
  //   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
  //       setUser(currentUser);
  //       setLoading(false);
  //       console.log('user in the auth state',currentUser)
  //   })
  //   return ()=>{
  //       unSubscribe();
  //   }
  // },[])
  const authInfo = {
    loading,
    user,
    createUser,
  };
  return (
       <AuthContext value={authInfo}>
         {children}
       </AuthContext>
  )
  
};

export default AuthProvider;
