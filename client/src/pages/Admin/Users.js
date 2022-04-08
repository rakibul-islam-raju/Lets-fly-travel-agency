import UserListTable from "../../components/tables/UserListTable";

export default function Users() {
	return (
		<>
			<div className="wrapper mt-24">
				<div className="flex justify-between items-center">
					<div className="text-2xl font-semibold">User List</div>
				</div>
				<UserListTable />
			</div>
		</>
	);
}
