import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
	const { currentUser } = useAuth();
	const location = useLocation();

	return currentUser?.email ? (
		children
	) : (
		<Navigate to="/login" replace state={{ from: location.pathname }} />
	);
}
