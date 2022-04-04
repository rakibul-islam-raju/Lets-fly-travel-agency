import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Register(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { state = {} } = props.location;
	const { prevLocation } = state;

	const { signup } = useAuth();

	const history = useHistory();
	const redirectUrl = prevLocation || "/";

	const handleRegister = async (e) => {
		e.preventDefault();
		// do validation
		if (password !== confirmPassword) {
			setError("Passwords didn't match");
			return;
		}
		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}
		if (password.search(/[a-z]/i) < 0) {
			setError("Password must contain at least one letter.");
			return;
		}
		if (password.search(/[0-9]/) < 0) {
			setError("Password must contain at least one digit.");
			return;
		}

		// generate username from email
		const username = email.split("@")[0];

		// signup
		try {
			setError("");
			setLoading(true);
			await signup(email, password, username);
			history.push(redirectUrl);
		} catch (err) {
			setError("Faild to create an account");
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="pt-24">
			<h4 className="text-3xl font-semibold text-center">
				Create New Account
			</h4>
			<form onSubmit={handleRegister} className="mt-8 w-4/12 mx-auto">
				<div className="mb-3">
					<input
						id="email"
						name="email"
						type="email"
						className="w-full p-3 rounded border"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						id="password"
						name="password"
						type="password"
						className="w-full p-3 rounded border"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						id="cpassword"
						name="cpassword"
						type="password"
						className="w-full p-3 rounded border"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<button
					disabled={loading}
					type="submit"
					className="nav-btn w-full"
				>
					Register
				</button>
			</form>
			<p className="mt-6 text-center">
				Already have an account?{" "}
				<Link to="/login" className="text-sky-400">
					Login here.
				</Link>
			</p>
		</section>
	);
}
