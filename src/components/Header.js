import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="shadow py-3 fixed top-0 left-0 w-full bg-white z-20">
			<nav className="wrapper flex flex-wrap justify-between items-center">
				<Link to="/" className="text-3xl text-sky-400 font-bold">
					let's Fly
				</Link>
				<ul className="flex flex-wrap md:space-x-4 items-start font-semibold">
					<li>
						<Link className="nav-link">Events</Link>
					</li>
					<li>
						<Link className="nav-link">Gallery</Link>
					</li>
					<li>
						<Link className="nav-btn">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
