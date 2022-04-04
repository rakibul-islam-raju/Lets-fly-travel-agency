import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<main className="" style={{ minHeight: "70vh" }}>
				<div className="wrapper">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
