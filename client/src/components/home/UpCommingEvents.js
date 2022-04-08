import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChair } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{events.map((event) => (
					<div kay={event?._id} className="group">
						<img
							className="rounded relative z-0 w-full h-56"
							src={event?.image}
							alt={event?.title}
						/>
						<div className="bg-sky-500 text-white p-4 rounded mx-6 shadow-xl relative z-10 -mt-44 bg-opacity-75 group-hover:bg-opacity-100 transition">
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
								<Link
									to={`/event/${event?._id}`}
									className="border-b border-white font-semibold"
								>
									Book Now
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
