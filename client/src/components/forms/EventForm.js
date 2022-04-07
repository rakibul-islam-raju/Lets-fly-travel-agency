import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import Error from "../Error";

export default function EventForm({ event }) {
	const [formData, setFormData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleChange = (evt) => {
		const value = evt.target.value;
		setFormData({
			...formData,
			[evt.target.name]: value,
		});
	};

	const handleCreateEvent = (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		axios
			.post(`${process.env.REACT_APP_BASE_URL}/events/`, formData)
			.then((res) => {
				if (res.data._id) {
					e.target.reset();
					navigate("/dashboard/events");
				}
			})
			.catch((err) => setError(err.response.data.message))
			.finally(() => setLoading(false));
	};

	const handleSaveEdit = (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		axios
			.patch(
				`${process.env.REACT_APP_BASE_URL}/events/${event._id}`,
				formData
			)
			.then((res) => {
				if (res.data._id) {
					e.target.reset();
					navigate("/dashboard/events");
				}
			})
			.catch((err) => setError(err.response.data.message))
			.finally(() => setLoading(false));
	};

	return (
		<>
			<div className="w-7/12 mx-auto">
				{error && <Error text={error} />}

				<form onSubmit={event ? handleSaveEdit : handleCreateEvent}>
					<div className="mb-3">
						<label htmlFor="image">Image URL</label>
						<input
							id="image"
							name="image"
							type="url"
							className="form-input"
							required
							defaultValue={event?.image ?? ""}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="title">Title</label>
						<input
							id="title"
							name="title"
							type="text"
							className="form-input"
							required
							defaultValue={event?.title ?? ""}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							name="description"
							rows={5}
							className="form-input"
							required
							defaultValue={event?.description ?? ""}
							onChange={handleChange}
						></textarea>
					</div>
					<div className="flex flex-wrap justify-between">
						<div className="mb-3">
							<label htmlFor="date">Event Date</label>
							<input
								id="date"
								name="date"
								type="date"
								className="form-input"
								required
								defaultValue={
									new Date(
										event?.date
									).toLocaleDateString() ?? Date.now()
								}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="seat">Total Seat</label>
							<input
								id="seat"
								name="seat"
								type="number"
								className="form-input"
								required
								defaultValue={event?.seat ?? 0}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="mb-3">
						<input
							id="status"
							name="status"
							type="checkbox"
							className="mr-2"
							defaultChecked={event?.status ?? true}
							onChange={handleChange}
						/>
						<label htmlFor="status">Status</label>
					</div>

					{loading ? (
						<Loading />
					) : (
						<button
							type="submit"
							className="nav-btn w-full bg-sky-500"
						>
							Save
						</button>
					)}
				</form>
			</div>
		</>
	);
}
