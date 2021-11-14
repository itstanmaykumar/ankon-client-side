import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";


//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // saving new user to database
                const saveUser = { email: email, name: name };
                axios.put("https://serene-badlands-47415.herokuapp.com/users", saveUser)
                    .then()

                //send name to firebase after registration
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location.state?.from || '/';
                history.replace(destination);
                setAuthError('');

                // saving new user to database\
                const newUser = result.user;
                const saveUser = { email: newUser.email, name: newUser.displayName };
                axios.put("https://serene-badlands-47415.herokuapp.com/users", saveUser)
                    .then()
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const [status, setStatus] = useState(false);
    useEffect(() => {
        fetch(`https://serene-badlands-47415.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setStatus(data))
    }, [user.email]);

    return {
        user,
        status,
        signUpUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        isLoading,
        authError
    }
}

export default useFirebase;