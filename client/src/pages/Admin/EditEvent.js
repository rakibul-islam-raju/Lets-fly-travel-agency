import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import EventForm from "../../components/forms/EventForm";
import Loading from "../../components/Loading";

export default function EditEvent() {
	const [event, setEvent] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const { eventId } = useParams();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/events/${eventId}`)
			.then((res) => setEvent(res.data))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, [eventId]);

	return (
		<section className="wrapper mt-24">
			<h4 className="text-2xl font font-semibold mb-4">Edit Event</h4>

			{error && <Error text={error} />}

			{loading ? <Loading /> : <EventForm event={event} />}
		</section>
	);
}
