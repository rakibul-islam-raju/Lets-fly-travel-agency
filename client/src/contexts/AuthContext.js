import React, { useContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from "firebase/auth";
import "../firebase";

const AuthContext = React.createContext();

const googleProvider = new GoogleAuthProvider();

export function useAuth() {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	// useEffect
	useEffect(() => {
		const auth = getAuth();
		const cleanUp = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return cleanUp;
	}, []);

	// google login
	async function googleLogin() {
		const auth = getAuth();
		await signInWithPopup(auth, googleProvider);

		const user = auth.currentUser;
		console.log("user =>", user);
		setCurrentUser({ ...user });
	}

	// login
	async function login(email, password) {
		try {
			const auth = getAuth();
			return signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
		}
	}

	// signup
	async function signup(email, password, username) {
		try {
			const auth = getAuth();
			await createUserWithEmailAndPassword(auth, email, password);

			// update profile
			await updateProfile(auth.currentUser, {
				displayName: username,
			});

			const user = auth.currentUser;
			setCurrentUser({ ...user });
		} catch (error) {
			console.log(error);
		}
	}

	// logout
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	const value = { currentUser, googleLogin, signup, logout, login };

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
