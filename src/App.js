import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home, Login, Register } from "./pages";
import Layout from "./containers/Layout";

export default function App() {
	return (
		<div className="text-gray-600">
			<Router>
				<AuthProvider>
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route
								exact
								path="/register"
								component={Register}
							/>
						</Switch>
					</Layout>
				</AuthProvider>
			</Router>
		</div>
	);
}
