import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const { currentUser, logout } = useAuth();

	const handleLogout = () => {
		setShowMenu(false);
		logout();
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-white z-20">
			<div className="shadow py-3">
				<nav className="wrapper relative">
					<div className="flex flex-wrap justify-between items-center ">
						<Link
							to="/"
							className="text-3xl text-sky-500 font-bold"
						>
							let's Fly
						</Link>
						<ul className="flex flex-wrap md:space-x-4 items-start font-semibold">
							<li>
								<Link to="/" className="nav-link">
									Events
								</Link>
							</li>
							<li>
								<Link to="/" className="nav-link">
									Gallery
								</Link>
							</li>
							<li>
								{!currentUser ? (
									<Link to="/login" className="nav-btn">
										Login
									</Link>
								) : (
									<span
										onClick={() => setShowMenu(!showMenu)}
										className="nav-btn cursor-pointer"
									>
										{currentUser.displayName}
									</span>
								)}
							</li>
						</ul>
					</div>

					{showMenu && (
						<div className="absolute right-0">
							<div className="bg-white mr-5 rounded-b shadow flex flex-col w-32 mt-3">
								<Link
									className="p-2 font-semibold hover:bg-gray-200 flex items-center space-x-3"
									to="/dashboard/orders"
									onClick={() => setShowMenu(false)}
								>
									<span>Dashboard</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</Link>
								<div
									className="p-2 font-semibold hover:bg-gray-200 flex items-center space-x-3 cursor-pointer"
									onClick={handleLogout}
								>
									<span>Logout</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
								</div>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
}
