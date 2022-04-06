import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
	return (
		<div>
			<Header />
			<main className="" style={{ minHeight: "100vh" }}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
