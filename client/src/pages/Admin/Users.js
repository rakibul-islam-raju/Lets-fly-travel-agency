import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import OrderListTable from "../../components/tables/OrderListTable";

export default function Users() {
	return (
		<>
			<div className="wrapper mt-24">
				<div className="flex justify-between items-center">
					<div className="text-2xl font-semibold">User List</div>
					{/* <div className="text-2xl font-semibold">User List</div> */}
					<Link
						to=""
						type="button"
						className="rounded-full px-3 py-2 bg-sky-500 text-white hover:bg-sky-600 transition"
					>
						<FontAwesomeIcon icon={faPlus} />
					</Link>
				</div>
				<OrderListTable />
			</div>
		</>
	);
}
