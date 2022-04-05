import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-sky-500 text-white py-4">
			<div className="wrapper flex flex-wrap justify-between">
				<Link className="text-3xl font-bold" to="/">
					let's Fly
				</Link>
			</div>
		</footer>
	);
}
