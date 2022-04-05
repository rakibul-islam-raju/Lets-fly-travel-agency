import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChair } from "@fortawesome/free-solid-svg-icons";

export default function UpCommingEvents() {
	return (
		<section className="pt-16">
			<h4 className="section-title">Upcomming Events</h4>
			<div className="flex flex-wrap justify-between">
				<div className="w-full md:w-6/12 lg:w-4/12 px-6 py-4 mx-auto">
					<div className="bg-sky-500 text-white p-4 rounded shadow-xl">
						<h4 className="text-xl font-semibold text-center">
							Lorem ipsum dolor sit amet consectetur
						</h4>
						<p className="text-sm flex justify-between">
							<span className="underline">
								<FontAwesomeIcon icon={faClock} /> 30st April,
								2022
							</span>
							<span className="underline">
								<FontAwesomeIcon icon={faChair} />
								72 Seat Left
							</span>
						</p>
						<p className=" mt-2">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quibusdam enim at odio voluptate voluptatibus
							officiis a blanditiis doloribus qui eum.
						</p>
						<div className="flex justify-center mt-3">
							<button
								type="button"
								className="border-b border-white font-semibold"
							>
								Book Now
							</button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-6/12 lg:w-4/12 px-6 py-4 mx-auto">
					<div className="bg-sky-500 text-white p-4 rounded shadow-xl">
						<h4 className="text-xl font-semibold text-center">
							Lorem ipsum dolor sit amet consectetur
						</h4>
						<p className="text-sm flex justify-between">
							<span className="underline">30st April, 2022</span>
							<span className="underline">72 Seat Left</span>
						</p>
						<p className=" mt-2">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quibusdam enim at odio voluptate voluptatibus
							officiis a blanditiis doloribus qui eum.
						</p>
						<div className="flex justify-center mt-3">
							<button
								type="button"
								className="border-b border-white font-semibold"
							>
								Book Now
							</button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-6/12 lg:w-4/12 px-6 py-4 mx-auto">
					<div className="bg-sky-500 text-white p-4 rounded shadow-xl">
						<h4 className="text-xl font-semibold text-center">
							Lorem ipsum dolor sit amet consectetur
						</h4>
						<p className="text-sm flex justify-between">
							<span className="underline">30st April, 2022</span>
							<span className="underline">72 Seat Left</span>
						</p>
						<p className=" mt-2">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quibusdam enim at odio voluptate voluptatibus
							officiis a blanditiis doloribus qui eum.
						</p>
						<div className="flex justify-center mt-3">
							<button
								type="button"
								className="border-b border-white font-semibold"
							>
								Book Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
