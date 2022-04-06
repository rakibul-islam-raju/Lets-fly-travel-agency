import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChair } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UpCommingEvents() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/events`)
			.then((res) => setEvents(res.data));
	}, []);

	return (
		<section className="wrapper pt-16">
			<h4 className="section-title">Upcomming Events</h4>
			<div className="flex flex-wrap justify-between">
				{events.map((event) => (
					<div className="w-full md:w-6/12 lg:w-4/12 px-6 py-4 mx-auto">
						<div className="bg-sky-500 text-white p-4 rounded shadow-xl">
							<h4 className="text-xl font-semibold text-center mb-3">
								{event?.title}
							</h4>
							<p className="text-sm flex justify-between">
								<span className="underline">
									<FontAwesomeIcon icon={faClock} />{" "}
									{new Date(event?.date).toLocaleDateString()}
								</span>
								<span className="underline">
									<FontAwesomeIcon icon={faChair} />
									{event?.seat} Seat Left
								</span>
							</p>
							<p className=" mt-2">{event?.description}</p>
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
				))}
			</div>
		</section>
	);
}
