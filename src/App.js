import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./pages";
import Layout from "./containers/Layout";

export default function App() {
	return (
		<div className="text-gray-600">
			<Router>
				<AuthProvider>
					<Layout>
						<Switch>
							<Route exact path="/" component={Home} />
						</Switch>
					</Layout>
				</AuthProvider>
			</Router>
		</div>
	);
}
