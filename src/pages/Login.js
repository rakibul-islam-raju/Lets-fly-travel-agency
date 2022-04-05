import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { useAuth } from "../contexts/AuthContext";

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { state = {} } = props.location;
	const { prevLocation } = state;

	const { googleLogin, login } = useAuth();

	const history = useHistory();
	const redirectUrl = prevLocation || "/";

	// google login
	const handleGoogleSignin = async () => {
		try {
			setError("");
			setLoading(true);
			await googleLogin();
			history.push(redirectUrl);
		} catch (error) {
			setError("Faild to login");
		} finally {
			setLoading(false);
		}
	};

	// email login
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			await login(email, password);
			history.push(redirectUrl);
		} catch (error) {
			setError("Uesr not found.");
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="pt-24">
			<h4 className="text-3xl font-semibold text-center">Login</h4>

			<form onSubmit={handleLogin} className="mt-8 w-4/12 mx-auto">
				{error && <Message color="red" text={error} />}

				<div className="mb-3">
					<input
						id="username"
						name="username"
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

				{loading ? (
					<Loading />
				) : (
					<>
						<button
							disabled={loading}
							type="submit"
							className="nav-btn w-full"
						>
							Login
						</button>
						<button
							disabled={loading}
							onClick={handleGoogleSignin}
							type="button"
							className="nav-btn w-full mt-4"
						>
							Login with Google
						</button>
					</>
				)}
			</form>
			<p className="mt-6 text-center">
				Need an account?{" "}
				<Link to="/register" className="text-sky-400">
					Register Now.
				</Link>
			</p>
		</section>
	);
}
