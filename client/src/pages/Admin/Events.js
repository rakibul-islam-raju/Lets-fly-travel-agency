import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EventListTable from "../../components/tables/EventListTable";

export default function Events() {
	return (
		<>
			<div className="wrapper mt-24">
				<div className="flex justify-between items-center">
					<div className="text-2xl font-semibold">Event List</div>
					<Link
						to="/dashboard/events/new"
						type="button"
						className="rounded-full px-3 py-2 bg-sky-500 text-white hover:bg-sky-600 transition"
					>
						<FontAwesomeIcon icon={faPlus} />
					</Link>
				</div>
				<EventListTable />
			</div>
		</>
	);
}
