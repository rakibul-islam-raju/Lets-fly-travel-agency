import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ children }) {
	const { currentUser } = useAuth();

	return currentUser?.email ? <Navigate to="/" replace /> : children;
}
