import HeroImg from "../../assets/images/hero.jpg";

export default function Hero() {
	return (
		<section className="hero">
			<div className="relative">
				<img className="h-screen w-full" src={HeroImg} alt="lets fly" />
				<div className="absolute top-32 w-full">
					<h4 className="text-white text-center text-6xl">
						Let's Make Your Best Trip Ever
					</h4>
					<p className="text-center text-xl text-white mt-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus, quasi!
					</p>
					<div className="w-6/12 mx-auto bg-white px-8 py-5 rounded mt-32">
						<h4 className="text-xl mb-3">
							Searh for your next location...
						</h4>
						<form className="flex items-center">
							<input
								className="p-3 border-b border-sky-500 w-full focus:outline-none focus:border-gray-700 trnasition"
								type="text"
								placeholder="Search Location"
							/>
							<button
								type="submit"
								className="nav-btn bg-sky-500"
							>
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
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
