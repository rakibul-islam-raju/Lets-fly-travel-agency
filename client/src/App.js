import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home, Login, Register, EventDetail } from "./pages";
import { Orders, Users, Events, CreateEvent, EditEvent } from "./pages/Admin";
import Layout from "./containers/Layout";
import DashboardLayout from "./containers/DashboardLayout";
import PublicRoute from "./containers/PublicRoute";
import PrivateRoute from "./containers/PrivateRoute";

export default function App() {
	return (
		<div className="text-gray-600">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route index element={<Home />} />

							<Route
								path="login"
								element={
									<PublicRoute>
										<Login />
									</PublicRoute>
								}
							/>
							<Route
								path="register"
								element={
									<PublicRoute>
										<Register />
									</PublicRoute>
								}
							/>

							<Route
								path="event/:eventId"
								element={
									<PrivateRoute>
										<EventDetail />
									</PrivateRoute>
								}
							/>
						</Route>

						{/* dashboard */}
						<Route
							path="dashboard"
							element={
								<PrivateRoute>
									<DashboardLayout />
								</PrivateRoute>
							}
						>
							<Route
								path="orders"
								element={
									<PrivateRoute>
										<Orders />
									</PrivateRoute>
								}
							/>
							<Route
								path="users"
								element={
									<PrivateRoute>
										<Users />
									</PrivateRoute>
								}
							/>
							<Route
								path="events"
								element={
									<PrivateRoute>
										<Events />
									</PrivateRoute>
								}
							/>
							<Route
								path="events/new"
								element={
									<PrivateRoute>
										<CreateEvent />
									</PrivateRoute>
								}
							/>
							<Route
								path="events/:eventId"
								element={
									<PrivateRoute>
										<EditEvent />
									</PrivateRoute>
								}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}
