import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function EventDetail() {
	const [event, setEvent] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const { eventId } = useParams();
	const navigate = useNavigate();

	const { currentUser } = useAuth();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/events/${eventId}`)
			.then((res) => setEvent(res.data))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, [eventId]);

	const handleSubscribe = () => {
		axios
			.post(`${process.env.REACT_APP_BASE_URL}/subscribes`, {
				name: currentUser?.displayName,
				email: currentUser?.email,
				event: event?._id,
			})
			.then((res) => {
				window.alert("Congrats! Succesfully subscribed.");
				navigate("/");
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	return (
		<section className="wrapper mt-16">
			<img
				className="w-full h-80"
				src={event?.image}
				alt={event?.title}
			/>

			{loading && <Loading />}
			{error && <Error text={error} />}

			<h4 className="text-4xl font-semibold my-6">{event?.title}</h4>
			<div className="flex justify-between">
				<div className="w-full md:w-8/12 pr-4">
					<div className="flex justify-between mb-4">
						<span>
							Event Date:{" "}
							{new Date(event?.date).toLocaleDateString()}
						</span>
						<span>Total Seat: {event?.seat}</span>
					</div>
					<p>{event?.description}</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloremque quas qui earum voluptas nulla totam impedit
						iste id, vel perspiciatis voluptates sapiente, deserunt
						omnis hic. Necessitatibus, quibusdam quod consectetur
						mollitia id voluptates nisi ullam a at blanditiis, illum
						consequuntur, praesentium porro repellat. Dicta adipisci
						vero ad culpa hic ipsum magni!
					</p>
				</div>
				<div className="w-full md:w-4/12 px-5 py-4 shadow">
					<form>
						<div className="mb-3">
							<label htmlFor="name">Name</label>
							<input
								id="name"
								name="name"
								type="text"
								value={currentUser?.displayName}
								className="form-input"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="email">Email</label>
							<input
								id="email"
								name="email"
								type="email"
								value={currentUser?.email}
								className="form-input"
							/>
						</div>
						<button
							className="nav-btn bg-sky-500 w-full"
							type="button"
							onClick={handleSubscribe}
							disabled={loading}
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
