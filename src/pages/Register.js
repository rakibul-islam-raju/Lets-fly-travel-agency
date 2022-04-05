import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();

	const navigate = useNavigate();

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
			navigate("/");
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
				{error && <Error text={error} />}

				<div className="mb-3">
					<input
						id="email"
						name="email"
						type="email"
						className="form-input"
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
						className="form-input"
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
						className="form-input"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>

				{loading ? (
					<Loading />
				) : (
					<button
						disabled={loading}
						type="submit"
						className="nav-btn w-full bg-sky-500"
					>
						Register
					</button>
				)}
			</form>
			<p className="mt-6 text-center">
				Already have an account?{" "}
				<Link to="/login" className="text-sky-500">
					Login here.
				</Link>
			</p>
		</section>
	);
}
