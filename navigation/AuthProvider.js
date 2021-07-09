import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

import database from '@react-native-firebase/database';
export const AuthContext = createContext({});
import { GoogleSignin } from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId: '88838102565-vto2f6pmq2tniekqqjfasc3a5dgh4kgd.apps.googleusercontent.com',
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userdetails=(name,email)=>{
    const newReference = database().ref('/users').push();
           newReference
            .set({
                name:name,
                email:email,
            })
            .then(() => console.log('Data updated.'));
  }
 
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
           
          } catch (e) {
            console.log(e);
          }
        },
        register: async (name,email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            userdetails(name,email);
          }
           catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        fblogin:async ()=>{
          try{
                        // Attempt login with permissions
              const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

              if (result.isCancelled) {
                throw 'User cancelled the login process';
              }

              // Once signed in, get the users AccesToken
              const data = await AccessToken.getCurrentAccessToken();

              if (!data) {
                throw 'Something went wrong obtaining access token';
              }

              // Create a Firebase credential with the AccessToken
              const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

              // Sign-in the user with the credential
              return auth().signInWithCredential(facebookCredential);

          }catch(e){
            console.log(e);
          }

        },
        googlelogin:async ()=>{
          try{
                      // Get the user's ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign in the user with the credential
            return  auth().signInWithCredential(googleCredential);
            

          }catch(e){
            console.log(e);
          }

        },
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};