import React, { useContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
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
		setCurrentUser({ ...user });
	}

	// logout
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	const value = { currentUser, googleLogin, logout };

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
