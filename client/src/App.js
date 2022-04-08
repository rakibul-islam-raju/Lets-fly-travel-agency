import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home, Login, Register, EventDetail } from "./pages";
import { Orders, Users, Events, CreateEvent, EditEvent } from "./pages/Admin";
import Layout from "./containers/Layout";
import DashboardLayout from "./containers/DashboardLayout";

export default function App() {
	return (
		<div className="text-gray-600">
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
							<Route
								path="event/:eventId"
								element={<EventDetail />}
							/>
						</Route>

						{/* dashboard */}
						<Route path="dashboard" element={<DashboardLayout />}>
							<Route path="orders" element={<Orders />} />
							<Route path="users" element={<Users />} />
							<Route path="events" element={<Events />} />
							<Route
								path="events/new"
								element={<CreateEvent />}
							/>
							<Route
								path="events/:eventId"
								element={<EditEvent />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}
