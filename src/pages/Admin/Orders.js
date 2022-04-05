import OrderListTable from "../../components/tables/OrderListTable";

export default function Orders() {
	return (
		<>
			<div className="wrapper mt-24">
				<div className="flex justify-between items-center">
					<h4 className="text-2xl font-semibold">Order List</h4>
				</div>
				<OrderListTable />
			</div>
		</>
	);
}
