import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<main className="" style={{ minHeight: "100vh" }}>
				<div className="">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
